import { jsPDF } from 'jspdf';
import { PROFILE, EXPERIENCES } from '../data/profile';

// Colores del tema (RGB)
const COLORS = {
    ink: [13, 13, 13] as [number, number, number],
    white: [255, 255, 255] as [number, number, number],
    cream: [255, 253, 245] as [number, number, number],
    engBlue: [30, 58, 95] as [number, number, number],
    safetyOrange: [255, 77, 0] as [number, number, number],
    accentYellow: [255, 213, 0] as [number, number, number],
    digitalCyan: [0, 180, 216] as [number, number, number],
    gray: [100, 100, 100] as [number, number, number],
    lightGray: [200, 200, 200] as [number, number, number],
};

export function generateCV(): void {
    const doc = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
    });

    const pageWidth = 210;
    const pageHeight = 297;
    const margin = 15;
    const contentWidth = pageWidth - (margin * 2);
    let y = margin;
    let currentPage = 1;

    // --- HELPERS ---
    const checkPageBreak = (heightNeeded: number): boolean => {
        if (y + heightNeeded > pageHeight - 20) {
            addFooter();
            doc.addPage();
            currentPage++;
            y = margin;
            return true;
        }
        return false;
    };

    const addFooter = () => {
        doc.setFillColor(...COLORS.ink);
        doc.rect(0, pageHeight - 12, pageWidth, 12, 'F');
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8);
        doc.setTextColor(...COLORS.white);
        doc.text(PROFILE.name.full.toUpperCase(), margin, pageHeight - 5);
        doc.text(`${PROFILE.contact.email}`, pageWidth / 2, pageHeight - 5, { align: 'center' });
        doc.text(`Página ${currentPage}`, pageWidth - margin, pageHeight - 5, { align: 'right' });
    };

    // Título de sección con barra de color
    const drawSectionTitle = (title: string, color: [number, number, number] = COLORS.engBlue) => {
        checkPageBreak(15);
        
        // Barra de color
        doc.setFillColor(...color);
        doc.rect(margin, y, 4, 8, 'F');
        
        // Texto del título
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(12);
        doc.setTextColor(...COLORS.ink);
        doc.text(title.toUpperCase(), margin + 7, y + 6);
        
        // Línea bajo el título
        doc.setDrawColor(...COLORS.lightGray);
        doc.setLineWidth(0.3);
        doc.line(margin + 7, y + 9, pageWidth - margin, y + 9);
        
        y += 14;
    };

    // ========== HEADER ==========
    // Barra superior con color
    doc.setFillColor(...COLORS.engBlue);
    doc.rect(0, 0, pageWidth, 45, 'F');
    
    // Acento naranja
    doc.setFillColor(...COLORS.safetyOrange);
    doc.rect(0, 45, pageWidth, 3, 'F');

    // Nombre
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(28);
    doc.setTextColor(...COLORS.white);
    doc.text(PROFILE.name.full.toUpperCase(), margin, 18);

    // Título profesional
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(12);
    doc.setTextColor(...COLORS.accentYellow);
    doc.text(`${PROFILE.title} | ${PROFILE.subtitle}`, margin, 27);

    // Datos de contacto
    doc.setFontSize(9);
    doc.setTextColor(...COLORS.white);
    const contactInfo = `${PROFILE.contact.email}  •  ${PROFILE.contact.phone}  •  linkedin.com/in/${PROFILE.contact.linkedin.username}  •  ${PROFILE.contact.location.city}`;
    doc.text(contactInfo, margin, 38);

    y = 58;

    // ========== PERFIL PROFESIONAL ==========
    drawSectionTitle('Perfil Profesional', COLORS.engBlue);
    
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(...COLORS.ink);
    
    const summaryLines = doc.splitTextToSize(PROFILE.summary, contentWidth);
    doc.text(summaryLines, margin, y, { align: 'justify', maxWidth: contentWidth });
    y += (summaryLines.length * 4) + 6;

    // ========== OBJETIVO ==========
    checkPageBreak(25);
    
    // Caja destacada para objetivo
    doc.setFillColor(...COLORS.cream);
    doc.setDrawColor(...COLORS.safetyOrange);
    doc.setLineWidth(0.8);
    
    const objLines = doc.splitTextToSize(PROFILE.objective, contentWidth - 10);
    const objHeight = (objLines.length * 4) + 8;
    
    doc.rect(margin, y, contentWidth, objHeight, 'FD');
    
    // Etiqueta
    doc.setFillColor(...COLORS.safetyOrange);
    doc.rect(margin, y, 25, 5, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7);
    doc.setTextColor(...COLORS.white);
    doc.text('OBJETIVO', margin + 1.5, y + 3.5);
    
    // Texto objetivo
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(...COLORS.ink);
    doc.text(objLines, margin + 5, y + 10, { align: 'justify', maxWidth: contentWidth - 10 });
    
    y += objHeight + 8;

    // ========== EXPERIENCIA ==========
    drawSectionTitle('Experiencia Profesional', COLORS.safetyOrange);

    EXPERIENCES.forEach((exp, index) => {
        checkPageBreak(40);
        
        // Indicador de categoría
        const catColor = exp.category === 'digital' ? COLORS.digitalCyan : COLORS.safetyOrange;
        doc.setFillColor(...catColor);
        doc.circle(margin + 2, y + 2, 2, 'F');
        
        // Cargo
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(10);
        doc.setTextColor(...COLORS.engBlue);
        doc.text(exp.role, margin + 7, y + 3);
        
        // Período (derecha)
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(9);
        doc.setTextColor(...COLORS.gray);
        doc.text(exp.period, pageWidth - margin, y + 3, { align: 'right' });
        
        y += 6;
        
        // Empresa y proyecto
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(9);
        doc.setTextColor(...COLORS.ink);
        let companyLine = exp.company;
        if (exp.project) companyLine += ` — ${exp.project}`;
        doc.text(companyLine, margin + 7, y);
        
        y += 4;
        
        // Ubicación
        doc.setFont('helvetica', 'italic');
        doc.setFontSize(8);
        doc.setTextColor(...COLORS.gray);
        doc.text(exp.location, margin + 7, y);
        
        y += 5;
        
        // Detalles (máximo 3)
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8);
        doc.setTextColor(...COLORS.ink);
        
        exp.details.slice(0, 3).forEach(detail => {
            const lines = doc.splitTextToSize(`• ${detail}`, contentWidth - 10);
            
            if (checkPageBreak(lines.length * 3.5)) {
                // Continuar después del salto
            }
            
            doc.text(lines, margin + 7, y, { align: 'justify', maxWidth: contentWidth - 10 });
            y += (lines.length * 3.5);
        });
        
        // Tags
        doc.setFontSize(7);
        doc.setTextColor(...COLORS.digitalCyan);
        const tagsText = exp.tags.slice(0, 5).join(' • ');
        doc.text(tagsText, margin + 7, y + 1);
        
        y += 8;
    });

    // ========== DOS COLUMNAS: COMPETENCIAS Y TECNOLOGÍAS ==========
    checkPageBreak(70);
    
    const colWidth = (contentWidth / 2) - 5;
    const col2X = margin + colWidth + 10;
    const twoColStartY = y;

    // --- COLUMNA 1: COMPETENCIAS ---
    drawSectionTitle('Competencias Clave', COLORS.engBlue);
    
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(...COLORS.ink);
    
    PROFILE.competencies.slice(0, 6).forEach((comp, idx) => {
        // Viñeta con color
        doc.setFillColor(...COLORS.accentYellow);
        doc.rect(margin, y - 1.5, 2, 2, 'F');
        
        const lines = doc.splitTextToSize(comp, colWidth - 5);
        doc.text(lines, margin + 5, y, { align: 'justify', maxWidth: colWidth - 5 });
        y += (lines.length * 3.5) + 2;
    });

    const col1EndY = y;
    y = twoColStartY;

    // --- COLUMNA 2: TECNOLOGÍAS ---
    // Título manual para columna 2
    doc.setFillColor(...COLORS.digitalCyan);
    doc.rect(col2X, y, 4, 8, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.setTextColor(...COLORS.ink);
    doc.text('STACK TECNOLÓGICO', col2X + 7, y + 6);
    doc.setDrawColor(...COLORS.lightGray);
    doc.line(col2X + 7, y + 9, pageWidth - margin, y + 9);
    y += 14;

    const techGroups = [
        { label: 'Desarrollo', items: PROFILE.tools.development, color: COLORS.digitalCyan },
        { label: 'Microsoft 365', items: PROFILE.tools.microsoft365, color: COLORS.engBlue },
        { label: 'Construcción', items: PROFILE.tools.construction, color: COLORS.safetyOrange },
        { label: 'Metodologías', items: PROFILE.tools.methodologies, color: COLORS.accentYellow },
    ];

    techGroups.forEach(group => {
        // Etiqueta de grupo
        doc.setFillColor(...group.color);
        doc.rect(col2X, y, colWidth, 4, 'F');
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(7);
        doc.setTextColor(...COLORS.white);
        doc.text(group.label.toUpperCase(), col2X + 2, y + 3);
        y += 6;
        
        // Items
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8);
        doc.setTextColor(...COLORS.ink);
        const itemsStr = group.items.map(t => t.name).join(', ');
        const lines = doc.splitTextToSize(itemsStr, colWidth);
        doc.text(lines, col2X, y);
        y += (lines.length * 3.5) + 3;
    });

    y = Math.max(col1EndY, y) + 8;

    // ========== FORMACIÓN ==========
    checkPageBreak(35);
    drawSectionTitle('Formación Académica', COLORS.engBlue);

    // Título principal
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(...COLORS.ink);
    doc.text(PROFILE.education.degree.toUpperCase(), margin, y);
    
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(...COLORS.gray);
    doc.text(String(PROFILE.education.year), pageWidth - margin, y, { align: 'right' });
    y += 5;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(...COLORS.ink);
    doc.text(PROFILE.education.institution, margin, y);
    y += 4;

    doc.setFont('helvetica', 'italic');
    doc.setFontSize(8);
    doc.setTextColor(...COLORS.engBlue);
    doc.text(PROFILE.education.distinction, margin, y);
    y += 8;

    // Cursos adicionales
    if (PROFILE.courses.length > 0) {
        PROFILE.courses.forEach(course => {
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(9);
            doc.setTextColor(...COLORS.ink);
            doc.text(course.name, margin, y);
            
            doc.setFont('helvetica', 'normal');
            doc.setTextColor(...COLORS.gray);
            doc.text(String(course.year), pageWidth - margin, y, { align: 'right' });
            y += 4;
            
            doc.setFontSize(8);
            doc.setTextColor(...COLORS.ink);
            doc.text(course.institution, margin, y);
            y += 6;
        });
    }

    // ========== IDIOMAS E INTERESES ==========
    checkPageBreak(25);
    
    // Idiomas (inline)
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(...COLORS.engBlue);
    doc.text('IDIOMAS:', margin, y);
    
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...COLORS.ink);
    const langStr = PROFILE.languages.map(l => `${l.name} (${l.level})`).join(' • ');
    doc.text(langStr, margin + 20, y);
    y += 6;

    // Intereses
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...COLORS.engBlue);
    doc.text('INTERESES:', margin, y);
    
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...COLORS.ink);
    const interestsStr = PROFILE.interests.slice(0, 3).join(' • ');
    const intLines = doc.splitTextToSize(interestsStr, contentWidth - 25);
    doc.text(intLines, margin + 25, y);

    // ========== FOOTER FINAL ==========
    addFooter();

    // Guardar
    doc.save('CV_Felipe_Lobo_Boric.pdf');
}
