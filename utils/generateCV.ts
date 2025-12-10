import { jsPDF } from 'jspdf';
import { PROFILE, EXPERIENCES, PROJECTS } from '../data/profile';

// ================= CONFIGURACIÓN NEO-BRUTALISTA =================
const CFG = {
    page: { w: 215.9, h: 279.4 }, // Carta
    margin: { top: 15, bot: 15, left: 10, right: 10 },
    sidebar: { width: 70 },
    colors: {
        cream: [255, 253, 245] as [number, number, number],
        ink: [15, 15, 15] as [number, number, number], // Almost black, softer
        sidebarBg: [20, 20, 20] as [number, number, number],
        textLight: [230, 230, 230] as [number, number, number],
        orange: [255, 77, 0] as [number, number, number], // Safety Orange
        blue: [0, 80, 255] as [number, number, number],   // Eng Blue
        cyan: [0, 240, 255] as [number, number, number],  // Digital Cyan
        yellow: [255, 213, 0] as [number, number, number], // Accent Yellow
        grey: [90, 90, 90] as [number, number, number],
        lightGrey: [200, 200, 200] as [number, number, number]
    },
    fonts: {
        head: 'helvetica',
        body: 'courier'
    },
    border: { thick: 1.0, medium: 0.5, thin: 0.2 }
};

export function generateCV() {
    console.log("Starting CV Generation...");
    try {
        const doc = new jsPDF({ unit: 'mm', format: 'letter' });
        console.log("jsPDF instance created");

        let cursorY = CFG.margin.top;
        const mainX = CFG.sidebar.width + 10;
        const mainW = CFG.page.w - CFG.sidebar.width - CFG.margin.right - 10;

        // ================= HELPERS GEOMÉTRICOS =================

        // Dibuja un "bloque brutalista" (rectángulo con sombra sólida)
        const drawBrutalBlock = (x: number, y: number, w: number, h: number, color: [number, number, number], textColor?: [number, number, number], text?: string, fontSize: number = 8) => {
            // Sombra
            doc.setFillColor(...CFG.colors.ink);
            doc.rect(x + 1, y + 1, w, h, 'F');
            // Bloque
            doc.setFillColor(...color);
            doc.setDrawColor(...CFG.colors.ink);
            doc.setLineWidth(CFG.border.medium);
            doc.rect(x, y, w, h, 'FD');

            if (text && textColor) {
                doc.setFont(CFG.fonts.head, 'bold');
                doc.setFontSize(fontSize);
                doc.setTextColor(...textColor);
                doc.text(text, x + w / 2, y + h / 2 + fontSize / 3.5, { align: 'center' });
            }
        };

        const drawSectionTitle = (title: string, y: number, color: [number, number, number]) => {
            // Marcador lateral
            doc.setFillColor(...color);
            doc.rect(mainX - 4, y, 2, 8, 'F');

            // Título
            doc.setFont(CFG.fonts.head, 'bold');
            doc.setFontSize(14);
            doc.setTextColor(...CFG.colors.ink);
            doc.text(title.toUpperCase(), mainX, y + 6);

            // Línea divisoria técnica
            doc.setDrawColor(...CFG.colors.ink);
            doc.setLineWidth(CFG.border.medium);
            doc.line(mainX, y + 9, CFG.page.w - CFG.margin.right, y + 9);

            // Decoración técnica final
            doc.setFillColor(...CFG.colors.ink);
            doc.rect(CFG.page.w - CFG.margin.right - 2, y + 7, 2, 2, 'F');

            return y + 16;
        };

        const checkPageBreak = (needed: number) => {
            if (cursorY + needed > CFG.page.h - CFG.margin.bot) {
                doc.addPage();
                drawBackground();
                drawSidebar();
                cursorY = CFG.margin.top;
                return true;
            }
            return false;
        };

        // ================= FONDO Y ESTRUCTURA =================
        const drawBackground = () => {
            doc.setFillColor(...CFG.colors.cream);
            doc.rect(0, 0, CFG.page.w, CFG.page.h, 'F');

            // Grid técnico muy sutil en el fondo principal
            doc.setDrawColor(220, 220, 220);
            doc.setLineWidth(0.1);
            for (let i = CFG.sidebar.width; i < CFG.page.w; i += 10) {
                doc.line(i, 0, i, CFG.page.h);
            }
            for (let i = 0; i < CFG.page.h; i += 10) {
                doc.line(CFG.sidebar.width, i, CFG.page.w, i);
            }
        };

        // ================= SIDEBAR (DARK MODE) =================
        const drawSidebar = () => {
            // Fondo
            doc.setFillColor(...CFG.colors.sidebarBg);
            doc.rect(0, 0, CFG.sidebar.width, CFG.page.h, 'F');

            // Borde separador
            doc.setDrawColor(...CFG.colors.orange);
            doc.setLineWidth(CFG.border.thick);
            doc.line(CFG.sidebar.width, 0, CFG.sidebar.width, CFG.page.h);

            let sbY = CFG.margin.top;
            const sbX = CFG.margin.left;
            const sbW = CFG.sidebar.width - CFG.margin.left * 2;

            // --- FOTO / AVATAR (Placeholder o Estilo) ---
            // Simulado con un bloque gráfico si no hay foto cargada, o simplificado
            drawBrutalBlock(sbX, sbY, sbW, sbW * 1.2, CFG.colors.blue);
            // Texto FLB dentro
            doc.setFont(CFG.fonts.head, 'bold');
            doc.setFontSize(40);
            doc.setTextColor(...CFG.colors.lightGrey);
            doc.text('FLB', sbX + sbW / 2, sbY + sbW * 0.7, { align: 'center' });

            sbY += sbW * 1.2 + 10;

            // --- CONTACTO ---
            doc.setFont(CFG.fonts.head, 'bold');
            doc.setFontSize(10);
            doc.setTextColor(...CFG.colors.orange);
            doc.text('CONTACTO', sbX, sbY);
            sbY += 5;

            // Safe access to profile data
            const loc = PROFILE.contact?.location ? `${PROFILE.contact.location.city}, ${PROFILE.contact.location.country}` : 'Santiago, Chile';
            const phone = PROFILE.contact?.phone || '';
            const email = PROFILE.contact?.email || '';

            const contactData = [
                { txt: loc, icon: 'L' },
                { txt: phone, icon: 'P' },
                { txt: email, icon: 'E' },
                { txt: 'linkedin.com/in/felipealonsolobo', icon: 'In' }
            ];

            contactData.forEach(item => {
                doc.setFont(CFG.fonts.body, 'normal');
                doc.setFontSize(8);
                doc.setTextColor(...CFG.colors.textLight);

                // Pequeño marcador
                doc.setFillColor(...CFG.colors.yellow);
                doc.rect(sbX, sbY - 2, 2, 2, 'F');

                const lines = doc.splitTextToSize(item.txt, sbW - 5);
                doc.text(lines, sbX + 4, sbY);
                sbY += lines.length * 4 + 2;
            });

            sbY += 5;

            // --- SKILLS / HERRAMIENTAS ---
            doc.setFont(CFG.fonts.head, 'bold');
            doc.setFontSize(10);
            doc.setTextColor(...CFG.colors.cyan);
            doc.text('TECH STACK', sbX, sbY);
            sbY += 5;

            // Agrupar skills importantes
            const skills = [
                ...(PROFILE.tools?.development?.map(t => t.name) || []),
                ...(PROFILE.tools?.microsoft365?.map(t => t.name) || []),
                ...(PROFILE.tools?.construction?.map(t => t.name) || [])
            ].slice(0, 12); // Top 12

            skills.forEach(skill => {
                doc.setFont(CFG.fonts.body, 'bold'); // Mono bold para código
                doc.setFontSize(7.5);
                doc.setTextColor(...CFG.colors.textLight);

                // Checkbox style icon
                doc.setDrawColor(...CFG.colors.cyan);
                doc.setLineWidth(0.2);
                doc.rect(sbX, sbY - 2.5, 3, 3, 'S');

                doc.text(skill, sbX + 5, sbY);
                sbY += 5;
            });

            sbY += 5;

            // --- IDIOMAS ---
            doc.setFont(CFG.fonts.head, 'bold');
            doc.setFontSize(10);
            doc.setTextColor(...CFG.colors.yellow);
            doc.text('IDIOMAS', sbX, sbY);
            sbY += 5;

            (PROFILE.languages || []).forEach(lang => {
                doc.setFont(CFG.fonts.body, 'bold');
                doc.setFontSize(8);
                doc.setTextColor(...CFG.colors.textLight);
                doc.text(lang.name.toUpperCase(), sbX, sbY);

                // Barra de progreso
                doc.setFillColor(50, 50, 50);
                doc.rect(sbX + 25, sbY - 2.5, 25, 2.5, 'F');
                doc.setFillColor(...CFG.colors.yellow);
                doc.rect(sbX + 25, sbY - 2.5, 25 * (lang.percentage / 100), 2.5, 'F');

                sbY += 5;
            });
        };

        // ================= CONTENIDO PRINCIPAL =================
        console.log("Drawing layout...");
        drawBackground();
        drawSidebar();

        // --- HEADER ---
        // Nombre gigante
        doc.setFont(CFG.fonts.head, 'bold');
        doc.setFontSize(28);
        doc.setTextColor(...CFG.colors.ink);
        doc.text(PROFILE.name.first.toUpperCase(), mainX, cursorY + 8);
        doc.text(PROFILE.name.last.toUpperCase(), mainX, cursorY + 18);

        // Título con fondo negro
        doc.setFillColor(...CFG.colors.ink);
        doc.rect(mainX, cursorY + 24, mainW, 10, 'F');
        doc.setFont(CFG.fonts.body, 'bold'); // Mono
        doc.setFontSize(10);
        doc.setTextColor(...CFG.colors.cyan);
        doc.text((PROFILE.title || '').toUpperCase() + ' // ' + (PROFILE.subtitle || '').toUpperCase(), mainX + 3, cursorY + 30.5);

        cursorY += 45;

        // --- RESUMEN ---
        doc.setFont(CFG.fonts.body, 'normal');
        doc.setFontSize(9);
        doc.setTextColor(...CFG.colors.ink);
        const summaryLines = doc.splitTextToSize(PROFILE.summary || '', mainW);
        doc.text(summaryLines, mainX, cursorY, { align: 'justify', maxWidth: mainW });
        cursorY += summaryLines.length * 4 + 10;

        // --- EXPERIENCIA ---
        console.log("Processing Experience...");
        cursorY = drawSectionTitle('EXPERIENCIA PROFESIONAL', cursorY, CFG.colors.orange);

        (EXPERIENCES || []).forEach(exp => {
            // Calcular altura necesaria para evitar cortes feos
            // Estimación: Header (10) + Detalles (filas * 4) + Tags (6) + Margin (6)
            const detailsLinesCount = exp.details.reduce((acc, det) => acc + doc.splitTextToSize(det, mainW - 5).length, 0);
            const needed = 25 + detailsLinesCount * 4.5;

            if (checkPageBreak(needed)) {
                cursorY = drawSectionTitle('EXPERIENCIA (CONT.)', cursorY, CFG.colors.orange);
            }

            // Timeline dot & line
            doc.setFillColor(...CFG.colors.orange);
            doc.circle(mainX - 3, cursorY + 2, 1.5, 'F');
            doc.setDrawColor(200, 200, 200);
            doc.setLineWidth(0.5);
            // La línea vertical iría hasta el final del bloque, pero es complejo calcular exacto antes de dibujar. 
            // Lo omitimos por limpieza o hacemos una línea corta decorativa.
            doc.line(mainX - 3, cursorY + 2, mainX - 3, cursorY + needed - 5);

            // Header Puesto
            doc.setFont(CFG.fonts.head, 'bold');
            doc.setFontSize(11);
            doc.setTextColor(...CFG.colors.ink);
            doc.text(exp.role.toUpperCase(), mainX, cursorY);

            // Empresa y Año (Derecha e Izquierda)
            cursorY += 5;
            doc.setFont(CFG.fonts.head, 'bold');
            doc.setFontSize(10);
            doc.setTextColor(...CFG.colors.blue);
            doc.text(exp.company.toUpperCase(), mainX, cursorY);

            doc.setFont(CFG.fonts.body, 'bold');
            doc.setFontSize(9);
            doc.setTextColor(...CFG.colors.grey);
            const dateWidth = doc.getTextWidth(exp.period);
            doc.text(exp.period, CFG.page.w - CFG.margin.right - dateWidth, cursorY);

            cursorY += 5;

            // Detalles
            exp.details.forEach(det => {
                doc.setFont(CFG.fonts.body, 'normal');
                doc.setFontSize(8.5);
                doc.setTextColor(30, 30, 30);

                // Bullet cuadrado brutalista
                doc.setFillColor(...CFG.colors.ink);
                doc.rect(mainX, cursorY - 2, 1, 1, 'F');

                const lines = doc.splitTextToSize(det, mainW - 5);
                doc.text(lines, mainX + 3, cursorY, { maxWidth: mainW - 5, align: 'justify' });
                cursorY += lines.length * 4; // Spacing
            });

            cursorY += 2;

            // Tags (Tech stack usado)
            const tagString = (exp.tags || []).join('  //  ');
            doc.setFont(CFG.fonts.body, 'bold');
            doc.setFontSize(7);
            doc.setTextColor(...CFG.colors.grey);
            doc.text(`[STACK: ${tagString}]`, mainX, cursorY);

            cursorY += 10; // Espacio entre experiencias
        });

        // --- EDUCACIÓN ---
        console.log("Processing Education...");
        if (checkPageBreak(50)) {
            // Just created page
        } else {
            cursorY += 5;
        }
        cursorY = drawSectionTitle('EDUCACIÓN', cursorY, CFG.colors.blue);

        if (PROFILE.education) {
            // Titulo
            doc.setFont(CFG.fonts.head, 'bold');
            doc.setFontSize(11);
            doc.setTextColor(...CFG.colors.ink);
            doc.text((PROFILE.education.degree || '').toUpperCase(), mainX, cursorY);

            // Inst y Año
            cursorY += 5;
            doc.setFont(CFG.fonts.body, 'bold');
            doc.setFontSize(9);
            doc.setTextColor(...CFG.colors.blue);
            doc.text(PROFILE.education.institution || '', mainX, cursorY);

            doc.setTextColor(...CFG.colors.grey);
            doc.text((PROFILE.education.year || '').toString(), CFG.page.w - CFG.margin.right - 10, cursorY);

            cursorY += 6;
            doc.setFont(CFG.fonts.body, 'normal');
            doc.setFontSize(8.5);
            doc.setTextColor(40, 40, 40);
            doc.text(PROFILE.education.distinction || '', mainX, cursorY);

            cursorY += 15;
        }

        // --- PROYECTOS DESTACADOS (Si cabe o en nueva página) ---
        console.log("Processing Projects...");
        // Seleccionamos solo 2 para no alargar demasiado
        const topProjects = (PROJECTS || []).slice(0, 2);
        const projHeight = 60; // aprox

        if (checkPageBreak(projHeight)) {
            // new page
        } else {
            cursorY = drawSectionTitle('PROYECTOS CLAVE', cursorY, CFG.colors.yellow);
        }

        topProjects.forEach(proj => {
            // Caja contenedora (estilo card)
            doc.setDrawColor(...CFG.colors.ink);
            doc.setLineWidth(CFG.border.medium);
            doc.rect(mainX, cursorY, mainW, 35);

            // Banda lateral color
            doc.setFillColor(...CFG.colors.ink);
            doc.rect(mainX, cursorY, 2, 35, 'F');

            // Titulo Proyecto
            doc.setFont(CFG.fonts.head, 'bold');
            doc.setFontSize(10);
            doc.setTextColor(...CFG.colors.ink);
            doc.text(proj.title, mainX + 5, cursorY + 6);

            // Subtitulo (Empresa/Año)
            doc.setFont(CFG.fonts.body, 'normal');
            doc.setFontSize(8);
            doc.setTextColor(...CFG.colors.grey);
            doc.text(`${proj.subtitle} | ${proj.year}`, mainX + 5, cursorY + 10);

            // Desafio/Resultado breve
            doc.setFont(CFG.fonts.body, 'normal');
            doc.setFontSize(8);
            doc.setTextColor(...CFG.colors.ink);
            const desc = doc.splitTextToSize(proj.challenge, mainW - 10);
            doc.text(desc, mainX + 5, cursorY + 16);

            // Footer Card
            doc.setFont(CFG.fonts.body, 'bold');
            doc.setFontSize(7);
            doc.setTextColor(...CFG.colors.blue);
            doc.text(proj.category, mainX + 5, cursorY + 32);

            cursorY += 40;
        });

        // FOOTER (Número de página y timestamp)
        console.log("Adding footer...");
        const pageCount = doc.getNumberOfPages();
        for (let i = 1; i <= pageCount; i++) {
            doc.setPage(i);
            doc.setFont(CFG.fonts.body, 'normal');
            doc.setFontSize(7);
            doc.setTextColor(...CFG.colors.grey);
            doc.text(`Generado: ${new Date().toLocaleDateString()} | REF: FLB-AUTO-PDF`, CFG.sidebar.width + 5, CFG.page.h - 5);
            doc.text(`${i} / ${pageCount}`, CFG.page.w - 15, CFG.page.h - 5);
        }

        console.log("Saving PDF...");
        try {
            doc.save('CV_Felipe_Lobo_Boric.pdf');
            console.log("PDF Saved successfully.");
        } catch (saveError) {
            console.error("Error saving PDF:", saveError);
            alert("El navegador bloqueó la descarga automatica. Intentando abrir en nueva pestaña...");
            doc.output('dataurlnewwindow');
        }

    } catch (error) {
        console.error("FATAL PDF GENERATION ERROR:", error);
        alert(`Error generando el PDF: ${error instanceof Error ? error.message : 'Error desconocido'}. \n\nIntenta usar CTRL+P para guardar como PDF por ahora.`);
    }
}

