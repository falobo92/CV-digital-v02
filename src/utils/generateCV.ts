import { PROFILE, EXPERIENCES, PROJECTS } from '../data/profile';

// ================= CONFIGURACIÓN (FORMATO SERIO / PROFESIONAL) =================
const CFG = {
    page: { w: 210, h: 297 }, // A4
    margin: { top: 18, bot: 18, left: 18, right: 18 },
    colors: {
        black: [0, 0, 0] as [number, number, number],
        darkGrey: [45, 45, 45] as [number, number, number],
        grey: [95, 95, 95] as [number, number, number],
        lightGrey: [175, 175, 175] as [number, number, number],
        white: [255, 255, 255] as [number, number, number],
        accent: [25, 55, 105] as [number, number, number] // Azul sobrio
    },
    fonts: {
        head: 'helvetica',
        body: 'helvetica'
    },
    type: {
        h1: 18,
        h2: 10.5,
        h3: 10,
        body: 9.5,
        small: 8.5,
        tiny: 7.5,
        line: 4.6
    }
};

function safeText(input: string): string {
    // jsPDF con fuentes base puede fallar con algunos símbolos (em dash, checkmark, etc.)
    return (input || '')
        .replaceAll('—', '-')
        .replaceAll('✓', '-')
        .replaceAll('•', '·');
}

function joinNonEmpty(parts: Array<string | undefined | null>, sep: string): string {
    return parts.map(p => (p || '').trim()).filter(Boolean).join(sep);
}

export async function generateCV() {
    console.log("Generando CV (formato serio/profesional)...");
    try {
        // Carga diferida para no inflar el bundle inicial (solo se necesita al descargar)
        const { jsPDF } = await import('jspdf');
        const doc = new jsPDF({ unit: 'mm', format: 'a4' });
        
        let cursorY = CFG.margin.top;
        const contentWidth = CFG.page.w - CFG.margin.left - CFG.margin.right;

        // Metadatos PDF (mejora percepción “documento serio”)
        try {
            doc.setProperties({
                title: `CV - ${PROFILE.name.full}`,
                subject: 'Currículum Vitae',
                author: PROFILE.name.full,
                keywords: 'CV, currículum, experiencia, proyectos',
                creator: 'CV Digital'
            });
        } catch {
            // noop
        }

        // ================= HELPERS =================
        const checkPageBreak = (needed: number) => {
            if (cursorY + needed > CFG.page.h - CFG.margin.bot) {
                doc.addPage();
                cursorY = CFG.margin.top;
                return true;
            }
            return false;
        };

        const drawSectionTitle = (title: string, y: number) => {
            doc.setFont(CFG.fonts.head, 'bold');
            doc.setFontSize(CFG.type.h2);
            doc.setTextColor(...CFG.colors.accent);
            doc.text(safeText(title).toUpperCase(), CFG.margin.left, y);

            doc.setDrawColor(...CFG.colors.lightGrey);
            doc.setLineWidth(0.25);
            doc.line(CFG.margin.left, y + 2.2, CFG.page.w - CFG.margin.right, y + 2.2);

            return y + 8;
        };

        const drawBulletLine = (text: string, x: number, y: number, maxW: number) => {
            doc.setFont(CFG.fonts.body, 'normal');
            doc.setFontSize(CFG.type.body);
            doc.setTextColor(...CFG.colors.black);

            const bullet = '·';
            doc.setTextColor(...CFG.colors.black);
            doc.text(bullet, x, y);
            const lines = doc.splitTextToSize(safeText(text), maxW - 4);
            doc.text(lines, x + 3.5, y, { maxWidth: maxW - 4 });
            return y + lines.length * CFG.type.line;
        };

        const addTextBlock = (text: string, x: number, y: number, maxW: number, fontSize = CFG.type.body) => {
            doc.setFont(CFG.fonts.body, 'normal');
            doc.setFontSize(fontSize);
            doc.setTextColor(...CFG.colors.black);
            const lines = doc.splitTextToSize(safeText(text), maxW);
            doc.text(lines, x, y, { maxWidth: maxW });
            return y + lines.length * CFG.type.line;
        };

        const addLinkInline = (label: string, url: string, x: number, y: number) => {
            const anyDoc = doc as unknown as { textWithLink?: (text: string, x: number, y: number, opts: { url: string }) => void };
            const safeLabel = safeText(label);
            doc.setFont(CFG.fonts.body, 'normal');
            doc.setFontSize(CFG.type.small);
            doc.setTextColor(...CFG.colors.accent);
            if (typeof anyDoc.textWithLink === 'function') {
                anyDoc.textWithLink(safeLabel, x, y, { url });
            } else {
                // fallback (sin link clickeable)
                doc.text(safeLabel, x, y);
            }
            doc.setTextColor(...CFG.colors.black);
        };

        // ================= HEADER (SOBRIO) =================
        doc.setFont(CFG.fonts.head, 'bold');
        doc.setFontSize(CFG.type.h1);
        doc.setTextColor(...CFG.colors.black);
        doc.text(safeText(PROFILE.name.full).toUpperCase(), CFG.margin.left, cursorY);

        cursorY += 7.5;

        doc.setFont(CFG.fonts.head, 'normal');
        doc.setFontSize(CFG.type.h3);
        doc.setTextColor(...CFG.colors.darkGrey);
        doc.text(safeText(`${PROFILE.title} | ${PROFILE.subtitle}`), CFG.margin.left, cursorY);

        cursorY += 6.2;

        // Contacto (1 línea principal + links reales)
        doc.setFont(CFG.fonts.body, 'normal');
        doc.setFontSize(CFG.type.small);
        doc.setTextColor(...CFG.colors.grey);

        const locationText = PROFILE.contact?.location
            ? `${PROFILE.contact.location.city}, ${PROFILE.contact.location.country}${PROFILE.contact.location.availability ? ` (${PROFILE.contact.location.availability})` : ''}`
            : '';

        const contactLine = joinNonEmpty(
            [
                PROFILE.contact?.email,
                PROFILE.contact?.phone,
                locationText
            ],
            '  |  '
        );
        doc.text(safeText(contactLine), CFG.margin.left, cursorY);

        cursorY += 5;

        // LinkedIn como link clickeable (si existe)
        if (PROFILE.contact?.linkedin?.url) {
            addLinkInline(PROFILE.contact.linkedin.url, PROFILE.contact.linkedin.url, CFG.margin.left, cursorY);
            cursorY += 5.5;
        } else {
            cursorY += 2;
        }

        // Separador fino
        doc.setDrawColor(...CFG.colors.lightGrey);
        doc.setLineWidth(0.35);
        doc.line(CFG.margin.left, cursorY, CFG.page.w - CFG.margin.right, cursorY);
        cursorY += 8;

        // ================= PERFIL =================
        cursorY = drawSectionTitle('PERFIL', cursorY);
        cursorY = addTextBlock(PROFILE.summary || '', CFG.margin.left, cursorY, contentWidth, CFG.type.body);
        cursorY += 6.5;

        // ================= COMPETENCIAS CLAVE =================
        cursorY = drawSectionTitle('COMPETENCIAS CLAVE', cursorY);
        const competencies = (PROFILE.competencies || []).map(safeText);
        const colGap = 10;
        const colW = (contentWidth - colGap) / 2;
        const leftX = CFG.margin.left;
        const rightX = CFG.margin.left + colW + colGap;
        const rows = Math.ceil(competencies.length / 2);

        const startY = cursorY;
        let yL = startY;
        let yR = startY;
        for (let i = 0; i < rows; i++) {
            const left = competencies[i];
            const right = competencies[i + rows];
            if (left) yL = drawBulletLine(left, leftX, yL, colW);
            if (right) yR = drawBulletLine(right, rightX, yR, colW);
        }
        cursorY = Math.max(yL, yR) + 6;

        // ================= EXPERIENCIA PROFESIONAL =================
        cursorY = drawSectionTitle('EXPERIENCIA PROFESIONAL', cursorY);

        (EXPERIENCES || []).forEach((exp, idx) => {
            const detailsLinesCount = (exp.details || []).reduce(
                (acc, det) => acc + doc.splitTextToSize(safeText(det), contentWidth - 6).length,
                0
            );
            const tagsLineCount = exp.tags?.length ? doc.splitTextToSize(`Herramientas: ${safeText(exp.tags.join(', '))}`, contentWidth).length : 0;
            const headerCount = 3; // role/company/location+period
            const needed = 10 + (headerCount + detailsLinesCount + tagsLineCount) * CFG.type.line + 6;

            if (checkPageBreak(Math.max(needed, 30)) && idx > 0) {
                cursorY = drawSectionTitle('EXPERIENCIA PROFESIONAL (CONT.)', cursorY);
            }

            // Cargo
            doc.setFont(CFG.fonts.head, 'bold');
            doc.setFontSize(CFG.type.h3);
            doc.setTextColor(...CFG.colors.black);
            doc.text(safeText(exp.role), CFG.margin.left, cursorY);

            // Empresa / proyecto (subtítulo)
            cursorY += 5.2;
            doc.setFont(CFG.fonts.head, 'normal');
            doc.setFontSize(CFG.type.body);
            doc.setTextColor(...CFG.colors.darkGrey);
            const companyLine = joinNonEmpty([exp.company, exp.project ? `(${exp.project})` : ''], ' ');
            doc.text(safeText(companyLine), CFG.margin.left, cursorY);

            // Período + ubicación a la derecha
            const rightInfo = joinNonEmpty([exp.period, exp.location], ' | ');
            doc.setFont(CFG.fonts.body, 'normal');
            doc.setFontSize(CFG.type.small);
            doc.setTextColor(...CFG.colors.grey);
            const rightW = doc.getTextWidth(safeText(rightInfo));
            doc.text(safeText(rightInfo), CFG.page.w - CFG.margin.right - rightW, cursorY);

            cursorY += 5.8;

            // Bullets (logros / responsabilidades)
            (exp.details || []).forEach(det => {
                cursorY = drawBulletLine(det, CFG.margin.left, cursorY, contentWidth);
            });

            // Herramientas (línea sobria)
            if (exp.tags && exp.tags.length > 0) {
                cursorY += 1.5;
                doc.setFont(CFG.fonts.body, 'italic');
                doc.setFontSize(CFG.type.small);
                doc.setTextColor(...CFG.colors.grey);
                const tagsText = `Herramientas: ${safeText(exp.tags.join(', '))}`;
                const tagsLines = doc.splitTextToSize(tagsText, contentWidth);
                doc.text(tagsLines, CFG.margin.left, cursorY, { maxWidth: contentWidth });
                cursorY += tagsLines.length * (CFG.type.line - 0.2);
            }

            cursorY += 7;
        });

        // ================= FORMACIÓN =================
        if (checkPageBreak(50)) {
            // nueva página
        }
        cursorY = drawSectionTitle('FORMACIÓN', cursorY);

        if (PROFILE.education) {
            doc.setFont(CFG.fonts.head, 'bold');
            doc.setFontSize(CFG.type.h3);
            doc.setTextColor(...CFG.colors.black);
            doc.text(safeText(PROFILE.education.degree), CFG.margin.left, cursorY);

            cursorY += 5.2;

            doc.setFont(CFG.fonts.head, 'normal');
            doc.setFontSize(CFG.type.body);
            doc.setTextColor(...CFG.colors.darkGrey);
            const eduLine = joinNonEmpty([PROFILE.education.institution, PROFILE.education.year ? String(PROFILE.education.year) : ''], ' | ');
            doc.text(safeText(eduLine), CFG.margin.left, cursorY);

            cursorY += 5.2;

            if (PROFILE.education.distinction) {
                doc.setFont(CFG.fonts.body, 'normal');
                doc.setFontSize(CFG.type.small);
                doc.setTextColor(...CFG.colors.grey);
                const dLines = doc.splitTextToSize(safeText(PROFILE.education.distinction), contentWidth);
                doc.text(dLines, CFG.margin.left, cursorY, { maxWidth: contentWidth });
                cursorY += dLines.length * (CFG.type.line - 0.2);
                cursorY += 2;
            }
        }

        // Cursos (si existen)
        if (PROFILE.courses && PROFILE.courses.length > 0) {
            cursorY += 4;
            doc.setFont(CFG.fonts.head, 'bold');
            doc.setFontSize(CFG.type.h3);
            doc.setTextColor(...CFG.colors.black);
            doc.text('Cursos', CFG.margin.left, cursorY);
            cursorY += 5.2;

            PROFILE.courses.forEach(course => {
                cursorY = drawBulletLine(`${course.name} - ${course.institution} (${course.year})`, CFG.margin.left, cursorY, contentWidth);
            });
            cursorY += 2;
        }

        // ================= HERRAMIENTAS / TECNOLOGÍAS =================
        if (checkPageBreak(55)) {
            // nueva página
        }
        cursorY = drawSectionTitle('HERRAMIENTAS Y TECNOLOGÍAS', cursorY);

        const allTools = [
            ...(PROFILE.tools?.development?.map(t => t.name) || []),
            ...(PROFILE.tools?.microsoft365?.map(t => t.name) || []),
            ...(PROFILE.tools?.construction?.map(t => t.name) || []),
            ...(PROFILE.tools?.methodologies?.map(t => t.name) || []),
            ...(PROFILE.tools?.emerging?.map(t => t.name) || [])
        ].map(safeText);

        // Para un CV serio: listado compacto (2 columnas) y sin excesiva “decoración”
        const maxTools = 18;
        const tools = allTools.slice(0, maxTools);
        const toolsRows = Math.ceil(tools.length / 2);

        const toolsColGap = 10;
        const toolsColW = (contentWidth - toolsColGap) / 2;
        const toolsLeftX = CFG.margin.left;
        const toolsRightX = CFG.margin.left + toolsColW + toolsColGap;

        let tYL = cursorY;
        let tYR = cursorY;
        for (let i = 0; i < toolsRows; i++) {
            const left = tools[i];
            const right = tools[i + toolsRows];
            if (left) tYL = drawBulletLine(left, toolsLeftX, tYL, toolsColW);
            if (right) tYR = drawBulletLine(right, toolsRightX, tYR, toolsColW);
        }
        cursorY = Math.max(tYL, tYR) + 6;

        // ================= IDIOMAS =================
        if (checkPageBreak(30)) {
            // nueva página
        }
        cursorY = drawSectionTitle('IDIOMAS', cursorY);

        (PROFILE.languages || []).forEach(lang => {
            doc.setFont(CFG.fonts.body, 'bold');
            doc.setFontSize(CFG.type.body);
            doc.setTextColor(...CFG.colors.black);
            doc.text(safeText(lang.name), CFG.margin.left, cursorY);

            doc.setFont(CFG.fonts.body, 'normal');
            doc.setFontSize(CFG.type.body);
            doc.setTextColor(...CFG.colors.darkGrey);
            const lvl = safeText(lang.level || '');
            const nameW = doc.getTextWidth(safeText(lang.name));
            doc.text(` - ${lvl}`, CFG.margin.left + nameW + 1.5, cursorY);

            cursorY += 5.4;
            if (lang.note) {
                doc.setFont(CFG.fonts.body, 'normal');
                doc.setFontSize(CFG.type.small);
                doc.setTextColor(...CFG.colors.grey);
                const noteLines = doc.splitTextToSize(safeText(lang.note), contentWidth);
                doc.text(noteLines, CFG.margin.left, cursorY, { maxWidth: contentWidth });
                cursorY += noteLines.length * (CFG.type.line - 0.2);
            }
            cursorY += 3;
        });

        // ================= PROYECTOS (FORMATO CV) =================
        if (checkPageBreak(55)) {
            // nueva página
        }
        cursorY = drawSectionTitle('PROYECTOS RELEVANTES', cursorY);
        const topProjects = (PROJECTS || []).slice(0, 3);
        topProjects.forEach(proj => {
            const needed = 18;
            checkPageBreak(needed);

            doc.setFont(CFG.fonts.body, 'bold');
            doc.setFontSize(CFG.type.body);
            doc.setTextColor(...CFG.colors.black);
            doc.text(safeText(proj.title), CFG.margin.left, cursorY);

            const rightW = doc.getTextWidth(safeText(proj.year));
            doc.setFont(CFG.fonts.body, 'normal');
            doc.setFontSize(CFG.type.small);
            doc.setTextColor(...CFG.colors.grey);
            doc.text(safeText(proj.year), CFG.page.w - CFG.margin.right - rightW, cursorY);

            cursorY += 5;
            doc.setFont(CFG.fonts.body, 'normal');
            doc.setFontSize(CFG.type.small);
            doc.setTextColor(...CFG.colors.darkGrey);
            doc.text(safeText(proj.subtitle), CFG.margin.left, cursorY);

            cursorY += 4.8;
            // 1 línea de contexto (no storytelling)
            const oneLiner = proj.results?.[0] || proj.challenge || '';
            if (oneLiner) {
                cursorY = drawBulletLine(oneLiner, CFG.margin.left, cursorY, contentWidth);
            }
            cursorY += 3.5;
        });

        // ================= FOOTER (SOBRIO) =================
        const pageCount = doc.getNumberOfPages();
        for (let i = 1; i <= pageCount; i++) {
            doc.setPage(i);
            
            doc.setFont(CFG.fonts.body, 'normal');
            doc.setFontSize(7.5);
            doc.setTextColor(...CFG.colors.grey);
            doc.text(safeText(PROFILE.name.full), CFG.margin.left, CFG.page.h - 8);

            doc.setFont(CFG.fonts.body, 'normal');
            doc.setFontSize(7.5);
            doc.setTextColor(...CFG.colors.grey);
            const pageText = `${i}/${pageCount}`;
            const pageW = doc.getTextWidth(pageText);
            doc.text(pageText, CFG.page.w - CFG.margin.right - pageW, CFG.page.h - 8);
        }

        // ================= GUARDAR =================
        console.log("Guardando PDF...");
        try {
            const fileName = `CV_${PROFILE.name.first}_${PROFILE.name.last.replace(' ', '_')}.pdf`;
            doc.save(fileName);
            console.log(`PDF guardado exitosamente: ${fileName}`);
        } catch (saveError) {
            console.error("Error guardando PDF:", saveError);
            alert("El navegador bloqueó la descarga automática. Abriendo en nueva pestaña...");
            doc.output('dataurlnewwindow');
        }

    } catch (error) {
        console.error("ERROR FATAL AL GENERAR PDF:", error);
        alert(`Error generando el PDF: ${error instanceof Error ? error.message : 'Error desconocido'}.`);
    }
}
