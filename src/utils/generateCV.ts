import { PROFILE, EXPERIENCES, PROJECTS } from '../data/profile';

// ================= CONFIGURACIÓN PROFESIONAL MEJORADA =================
const CFG = {
    page: { w: 210, h: 297 }, // A4
    margin: { top: 25, bot: 25, left: 20, right: 20 },
    colors: {
        black: [0, 0, 0] as [number, number, number],
        darkGrey: [40, 40, 40] as [number, number, number],
        grey: [90, 90, 90] as [number, number, number],
        lightGrey: [160, 160, 160] as [number, number, number],
        white: [255, 255, 255] as [number, number, number],
        accent: [30, 60, 120] as [number, number, number], // Azul profesional
        accentLight: [60, 90, 150] as [number, number, number],
        yellow: [255, 200, 0] as [number, number, number], // Amarillo destacado
        yellowLight: [255, 220, 80] as [number, number, number]
    },
    fonts: {
        head: 'helvetica',
        body: 'helvetica'
    }
};

// Función para formatear fecha y hora en español
function getFormattedDateTime(): string {
    const now = new Date();
    const options: Intl.DateTimeFormatOptions = {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        timeZone: 'America/Santiago'
    };
    
    const formatter = new Intl.DateTimeFormat('es-CL', options);
    const parts = formatter.formatToParts(now);
    
    const day = parts.find(p => p.type === 'day')?.value || '';
    const month = parts.find(p => p.type === 'month')?.value || '';
    const year = parts.find(p => p.type === 'year')?.value || '';
    const hour = parts.find(p => p.type === 'hour')?.value || '';
    const minute = parts.find(p => p.type === 'minute')?.value || '';
    
    return `${day} de ${month} de ${year}, ${hour}:${minute} hrs`;
}

export async function generateCV() {
    console.log("Generando CV profesional mejorado...");
    
    // Capturar fecha y hora de descarga
    const downloadDateTime = getFormattedDateTime();
    
    try {
        // Carga diferida para no inflar el bundle inicial (solo se necesita al descargar)
        const { jsPDF } = await import('jspdf');
        const doc = new jsPDF({ unit: 'mm', format: 'a4' });
        
        let cursorY = CFG.margin.top;
        const contentWidth = CFG.page.w - CFG.margin.left - CFG.margin.right;

        // ================= HELPERS MEJORADOS =================
        const checkPageBreak = (needed: number) => {
            if (cursorY + needed > CFG.page.h - CFG.margin.bot) {
                doc.addPage();
                cursorY = CFG.margin.top;
                return true;
            }
            return false;
        };

        const drawSectionTitle = (title: string, y: number) => {
            // Barra de color superior más visible
            doc.setFillColor(...CFG.colors.accent);
            doc.rect(CFG.margin.left, y - 3, 4, 4, 'F');
            
            // Línea horizontal superior más gruesa
            doc.setDrawColor(...CFG.colors.accent);
            doc.setLineWidth(0.5);
            doc.line(CFG.margin.left + 6, y - 1, CFG.page.w - CFG.margin.right, y - 1);
            
            // Título con mejor formato
            doc.setFont(CFG.fonts.head, 'bold');
            doc.setFontSize(11);
            doc.setTextColor(...CFG.colors.accent);
            doc.text(title.toUpperCase(), CFG.margin.left + 6, y + 2);
            
            // Línea inferior sutil
            doc.setDrawColor(...CFG.colors.lightGrey);
            doc.setLineWidth(0.2);
            doc.line(CFG.margin.left, y + 4, CFG.page.w - CFG.margin.right, y + 4);
            
            return y + 10;
        };

        const drawDivider = (y: number, color = CFG.colors.lightGrey) => {
            doc.setDrawColor(...color);
            doc.setLineWidth(0.3);
            doc.line(CFG.margin.left, y, CFG.page.w - CFG.margin.right, y);
            return y + 5;
        };

        // ================= HEADER MEJORADO =================
        // Barra decorativa superior
        doc.setFillColor(...CFG.colors.accent);
        doc.rect(0, 0, CFG.page.w, 3, 'F');
        
        // Barra amarilla decorativa
        doc.setFillColor(...CFG.colors.yellow);
        doc.rect(0, 3, CFG.page.w, 1.5, 'F');
        
        cursorY = 12;
        
        // Nombre con mejor tipografía
        doc.setFont(CFG.fonts.head, 'bold');
        doc.setFontSize(26);
        doc.setTextColor(...CFG.colors.black);
        doc.text(PROFILE.name.full.toUpperCase(), CFG.margin.left, cursorY);
        
        cursorY += 9;
        
        // Título profesional con formato mejorado
        doc.setFont(CFG.fonts.head, 'bold');
        doc.setFontSize(13);
        doc.setTextColor(...CFG.colors.darkGrey);
        doc.text(PROFILE.title, CFG.margin.left, cursorY);
        
        cursorY += 5;
        
        // Subtítulo
        doc.setFont(CFG.fonts.head, 'normal');
        doc.setFontSize(10.5);
        doc.setTextColor(...CFG.colors.grey);
        doc.text(PROFILE.subtitle, CFG.margin.left, cursorY);
        
        cursorY += 8;
        
        // Línea divisoria
        cursorY = drawDivider(cursorY);
        
        // Información de contacto mejorada (en dos líneas si es necesario)
        doc.setFont(CFG.fonts.body, 'normal');
        doc.setFontSize(9);
        doc.setTextColor(...CFG.colors.grey);
        
        const contactLine1 = [
            PROFILE.contact?.email || '',
            PROFILE.contact?.phone || ''
        ].filter(Boolean).join('  •  ');
        
        const contactLine2 = [
            PROFILE.contact?.location ? `${PROFILE.contact.location.city}, ${PROFILE.contact.location.country}` : '',
            PROFILE.contact?.linkedin?.url ? 'LinkedIn: felipealonsolobo' : ''
        ].filter(Boolean).join('  •  ');
        
        doc.text(contactLine1, CFG.margin.left, cursorY);
        if (contactLine2) {
            cursorY += 4;
            doc.text(contactLine2, CFG.margin.left, cursorY);
        }
        cursorY += 8;

        // ================= RESUMEN PROFESIONAL MEJORADO =================
        cursorY = drawSectionTitle('RESUMEN PROFESIONAL', cursorY);
        
        doc.setFont(CFG.fonts.body, 'normal');
        doc.setFontSize(10);
        doc.setTextColor(...CFG.colors.black);
        const summaryLines = doc.splitTextToSize(PROFILE.summary || '', contentWidth);
        doc.text(summaryLines, CFG.margin.left, cursorY, { align: 'justify', maxWidth: contentWidth });
        cursorY += summaryLines.length * 5.5 + 10;

        // ================= EXPERIENCIA PROFESIONAL MEJORADA =================
        cursorY = drawSectionTitle('EXPERIENCIA PROFESIONAL', cursorY);

        (EXPERIENCES || []).forEach((exp, idx) => {
            const detailsLinesCount = exp.details.reduce((acc, det) => 
                acc + doc.splitTextToSize(det, contentWidth - 8).length, 0);
            const needed = 35 + detailsLinesCount * 5.5;
            
            if (checkPageBreak(needed) && idx > 0) {
                cursorY = drawSectionTitle('EXPERIENCIA PROFESIONAL (CONTINUACIÓN)', cursorY);
            }

            // Puesto con mejor formato
            doc.setFont(CFG.fonts.head, 'bold');
            doc.setFontSize(11.5);
            doc.setTextColor(...CFG.colors.black);
            doc.text(exp.role, CFG.margin.left, cursorY);
            
            // Empresa y período (en la misma línea)
            cursorY += 6;
            doc.setFont(CFG.fonts.head, 'bold');
            doc.setFontSize(10.5);
            doc.setTextColor(...CFG.colors.accent);
            doc.text(exp.company, CFG.margin.left, cursorY);
            
            if (exp.project) {
                doc.setFont(CFG.fonts.body, 'italic');
                doc.setFontSize(9.5);
                doc.setTextColor(...CFG.colors.grey);
                const projectText = `— ${exp.project}`;
                const companyWidth = doc.getTextWidth(exp.company);
                doc.text(projectText, CFG.margin.left + companyWidth + 3, cursorY);
            }
            
            doc.setFont(CFG.fonts.body, 'bold');
            doc.setFontSize(9);
            doc.setTextColor(...CFG.colors.darkGrey);
            const periodWidth = doc.getTextWidth(exp.period);
            doc.text(exp.period, CFG.page.w - CFG.margin.right - periodWidth, cursorY);
            
            cursorY += 7;
            
            // Detalles con mejor formato
            exp.details.forEach(det => {
                doc.setFont(CFG.fonts.body, 'normal');
                doc.setFontSize(9.5);
                doc.setTextColor(...CFG.colors.black);
                
                // Bullet point mejorado (cuadrado pequeño)
                doc.setFillColor(...CFG.colors.accent);
                doc.rect(CFG.margin.left + 1, cursorY - 2, 1.5, 1.5, 'F');
                
                const lines = doc.splitTextToSize(`  ${det}`, contentWidth - 8);
                doc.text(lines, CFG.margin.left + 4, cursorY, { maxWidth: contentWidth - 8, align: 'justify' });
                cursorY += lines.length * 5;
            });
            
            // Tecnologías utilizadas (si hay tags) con mejor formato
            if (exp.tags && exp.tags.length > 0) {
                cursorY += 3;
                doc.setFont(CFG.fonts.body, 'normal');
                doc.setFontSize(8.5);
                doc.setTextColor(...CFG.colors.grey);
                
                // Fondo sutil para las tecnologías
                const tagsText = `Tecnologías: ${exp.tags.join(' • ')}`;
                doc.text(tagsText, CFG.margin.left + 4, cursorY);
                cursorY += 5;
            }
            
            cursorY += 8; // Espacio entre experiencias
        });

        // ================= EDUCACIÓN MEJORADA =================
        if (checkPageBreak(45)) {
            // Nueva página creada
        } else {
            cursorY += 5;
        }
        cursorY = drawSectionTitle('FORMACIÓN ACADÉMICA', cursorY);

        if (PROFILE.education) {
            // Título
            doc.setFont(CFG.fonts.head, 'bold');
            doc.setFontSize(11.5);
            doc.setTextColor(...CFG.colors.black);
            doc.text(PROFILE.education.degree, CFG.margin.left, cursorY);
            
            // Institución y año
            cursorY += 6;
            doc.setFont(CFG.fonts.head, 'normal');
            doc.setFontSize(10.5);
            doc.setTextColor(...CFG.colors.accent);
            doc.text(PROFILE.education.institution, CFG.margin.left, cursorY);
            
            doc.setFont(CFG.fonts.body, 'bold');
            doc.setFontSize(9.5);
            doc.setTextColor(...CFG.colors.darkGrey);
            const yearText = PROFILE.education.year?.toString() || '';
            const yearWidth = doc.getTextWidth(yearText);
            doc.text(yearText, CFG.page.w - CFG.margin.right - yearWidth, cursorY);
            
            if (PROFILE.education.distinction) {
                cursorY += 6;
                doc.setFont(CFG.fonts.body, 'normal');
                doc.setFontSize(9);
                doc.setTextColor(...CFG.colors.grey);
                doc.text(`✓ ${PROFILE.education.distinction}`, CFG.margin.left, cursorY);
                cursorY += 4;
            }
            
            // Especializaciones
            if (PROFILE.education.specializations && PROFILE.education.specializations.length > 0) {
                cursorY += 4;
                doc.setFont(CFG.fonts.body, 'bold');
                doc.setFontSize(9);
                doc.setTextColor(...CFG.colors.darkGrey);
                doc.text('Especializaciones:', CFG.margin.left, cursorY);
                cursorY += 5;
                
                PROFILE.education.specializations.forEach(spec => {
                    doc.setFont(CFG.fonts.body, 'normal');
                    doc.setFontSize(9);
                    doc.setTextColor(...CFG.colors.black);
                    doc.setFillColor(...CFG.colors.lightGrey);
                    doc.circle(CFG.margin.left + 2, cursorY - 1.5, 1, 'F');
                    doc.text(`  ${spec}`, CFG.margin.left + 5, cursorY);
                    cursorY += 4.5;
                });
            }
            
            cursorY += 5;
        }

        // Cursos adicionales
        if (PROFILE.courses && PROFILE.courses.length > 0) {
            cursorY += 5;
            PROFILE.courses.forEach(course => {
                doc.setFont(CFG.fonts.head, 'bold');
                doc.setFontSize(10.5);
                doc.setTextColor(...CFG.colors.black);
                doc.text(course.name, CFG.margin.left, cursorY);
                
                cursorY += 5;
                doc.setFont(CFG.fonts.body, 'normal');
                doc.setFontSize(9);
                doc.setTextColor(...CFG.colors.grey);
                doc.text(`${course.institution} - ${course.year}`, CFG.margin.left, cursorY);
                cursorY += 7;
            });
        }

        // ================= COMPETENCIAS TÉCNICAS MEJORADAS =================
        if (checkPageBreak(65)) {
            // Nueva página
        } else {
            cursorY += 5;
        }
        cursorY = drawSectionTitle('COMPETENCIAS TÉCNICAS', cursorY);

        // Agrupar todas las herramientas
        const allTools = [
            ...(PROFILE.tools?.development?.map(t => t.name) || []),
            ...(PROFILE.tools?.microsoft365?.map(t => t.name) || []),
            ...(PROFILE.tools?.construction?.map(t => t.name) || []),
            ...(PROFILE.tools?.methodologies?.map(t => t.name) || []),
            ...(PROFILE.tools?.emerging?.map(t => t.name) || [])
        ];

        // Organizar en columnas con mejor formato
        const toolsPerColumn = Math.ceil(allTools.length / 3);
        const columnWidth = contentWidth / 3;
        const columnSpacing = 2;
        
        for (let col = 0; col < 3; col++) {
            const startIdx = col * toolsPerColumn;
            const endIdx = Math.min(startIdx + toolsPerColumn, allTools.length);
            const columnTools = allTools.slice(startIdx, endIdx);
            
            let colY = cursorY;
            const colX = CFG.margin.left + (col * (columnWidth + columnSpacing));
            
            columnTools.forEach(tool => {
                doc.setFont(CFG.fonts.body, 'normal');
                doc.setFontSize(9);
                doc.setTextColor(...CFG.colors.black);
                doc.setFillColor(...CFG.colors.accent);
                doc.circle(colX, colY - 1.5, 0.8, 'F');
                doc.text(`  ${tool}`, colX + 2.5, colY);
                colY += 5;
            });
        }
        
        cursorY += Math.ceil(allTools.length / 3) * 5 + 10;

        // ================= IDIOMAS MEJORADOS =================
        if (checkPageBreak(35)) {
            // Nueva página
        } else {
            cursorY += 5;
        }
        cursorY = drawSectionTitle('IDIOMAS', cursorY);

        (PROFILE.languages || []).forEach(lang => {
            doc.setFont(CFG.fonts.head, 'bold');
            doc.setFontSize(10.5);
            doc.setTextColor(...CFG.colors.black);
            doc.text(lang.name, CFG.margin.left, cursorY);
            
            doc.setFont(CFG.fonts.body, 'normal');
            doc.setFontSize(9.5);
            doc.setTextColor(...CFG.colors.grey);
            const levelText = `— ${lang.level}`;
            const nameWidth = doc.getTextWidth(lang.name);
            doc.text(levelText, CFG.margin.left + nameWidth + 4, cursorY);
            
            cursorY += 7;
        });

        // ================= PROYECTOS DESTACADOS MEJORADOS =================
        if (checkPageBreak(90)) {
            // Nueva página
        } else {
            cursorY += 5;
        }
        cursorY = drawSectionTitle('PROYECTOS DESTACADOS', cursorY);

        // Mostrar los 3 proyectos más relevantes
        const topProjects = (PROJECTS || []).slice(0, 3);
        
        topProjects.forEach(proj => {
            // Título del proyecto
            doc.setFont(CFG.fonts.head, 'bold');
            doc.setFontSize(11);
            doc.setTextColor(...CFG.colors.black);
            doc.text(proj.title.toUpperCase(), CFG.margin.left, cursorY);
            
            // Empresa y año
            cursorY += 5;
            doc.setFont(CFG.fonts.head, 'normal');
            doc.setFontSize(10);
            doc.setTextColor(...CFG.colors.accent);
            doc.text(proj.subtitle, CFG.margin.left, cursorY);
            
            doc.setFont(CFG.fonts.body, 'bold');
            doc.setFontSize(9);
            doc.setTextColor(...CFG.colors.darkGrey);
            const yearWidth = doc.getTextWidth(proj.year);
            doc.text(proj.year, CFG.page.w - CFG.margin.right - yearWidth, cursorY);
            
            // Descripción del desafío
            cursorY += 6;
            doc.setFont(CFG.fonts.body, 'bold');
            doc.setFontSize(9);
            doc.setTextColor(...CFG.colors.darkGrey);
            doc.text('Desafío:', CFG.margin.left, cursorY);
            cursorY += 4.5;
            
            doc.setFont(CFG.fonts.body, 'normal');
            doc.setFontSize(9);
            doc.setTextColor(...CFG.colors.black);
            const challengeLines = doc.splitTextToSize(proj.challenge, contentWidth - 5);
            doc.text(challengeLines, CFG.margin.left + 3, cursorY, { align: 'justify', maxWidth: contentWidth - 5 });
            cursorY += challengeLines.length * 5;
            
            // Resultados clave (si hay)
            if (proj.results && proj.results.length > 0) {
                cursorY += 3;
                doc.setFont(CFG.fonts.body, 'bold');
                doc.setFontSize(9);
                doc.setTextColor(...CFG.colors.darkGrey);
                doc.text('Resultados clave:', CFG.margin.left + 3, cursorY);
                cursorY += 5;
                
                proj.results.slice(0, 2).forEach(result => {
                    doc.setFont(CFG.fonts.body, 'normal');
                    doc.setFontSize(9);
                    doc.setTextColor(...CFG.colors.black);
                    doc.setFillColor(...CFG.colors.yellow);
                    doc.circle(CFG.margin.left + 6, cursorY - 1.5, 1, 'F');
                    const resultLines = doc.splitTextToSize(`  ${result}`, contentWidth - 10);
                    doc.text(resultLines, CFG.margin.left + 9, cursorY, { maxWidth: contentWidth - 10 });
                    cursorY += resultLines.length * 4.5;
                });
            }
            
            cursorY += 8; // Espacio entre proyectos
        });

        // ================= FOOTER MEJORADO CON FECHA Y HORA =================
        const pageCount = doc.getNumberOfPages();
        for (let i = 1; i <= pageCount; i++) {
            doc.setPage(i);
            
            // Línea superior del footer más visible
            doc.setDrawColor(...CFG.colors.accent);
            doc.setLineWidth(0.5);
            doc.line(CFG.margin.left, CFG.page.h - 18, CFG.page.w - CFG.margin.right, CFG.page.h - 18);
            
            // Información del footer (primera línea)
            doc.setFont(CFG.fonts.body, 'normal');
            doc.setFontSize(8);
            doc.setTextColor(...CFG.colors.darkGrey);
            
            const footerLine1 = `${PROFILE.name.full}  •  ${PROFILE.contact?.email || ''}`;
            doc.text(footerLine1, CFG.margin.left, CFG.page.h - 12);
            
            // Fecha y hora de descarga (segunda línea, izquierda)
            doc.setFont(CFG.fonts.body, 'normal');
            doc.setFontSize(7.5);
            doc.setTextColor(...CFG.colors.grey);
            const downloadText = `Descargado el ${downloadDateTime}`;
            doc.text(downloadText, CFG.margin.left, CFG.page.h - 8);
            
            // Número de página (segunda línea, derecha)
            doc.setFont(CFG.fonts.body, 'bold');
            doc.setFontSize(8);
            doc.setTextColor(...CFG.colors.darkGrey);
            const pageText = `Página ${i} de ${pageCount}`;
            const pageTextWidth = doc.getTextWidth(pageText);
            doc.text(pageText, CFG.page.w - CFG.margin.right - pageTextWidth, CFG.page.h - 8);
            
            // Línea decorativa inferior
            doc.setFillColor(...CFG.colors.accent);
            doc.rect(CFG.margin.left, CFG.page.h - 3, CFG.page.w - CFG.margin.left - CFG.margin.right, 1, 'F');
        }

        // ================= GUARDAR =================
        console.log("Guardando PDF mejorado...");
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
