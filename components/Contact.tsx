import React, { useState } from 'react';
import BrutalButton from './ui/BrutalButton';

interface FormState {
    name: string;
    email: string;
    message: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    message?: string;
}

const Contact: React.FC = () => {
    const [formData, setFormData] = useState<FormState>({
        name: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};
        
        if (!formData.name.trim()) {
            newErrors.name = 'El nombre es requerido';
        }
        
        if (!formData.email.trim()) {
            newErrors.email = 'El email es requerido';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Email inválido';
        }
        
        if (!formData.message.trim()) {
            newErrors.message = 'El mensaje es requerido';
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!validateForm()) return;
        
        setIsSubmitting(true);
        
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            setFormData({ name: '', email: '', message: '' });
        }, 1500);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
    };

    return (
        <section id="contacto" className="py-24 lg:py-32 bg-accent-yellow border-b-6 border-ink relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-diagonal opacity-30 pointer-events-none"></div>
            
            <div className="max-w-[1400px] mx-auto px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-display mb-6 text-ink uppercase tracking-tight">
                        CONTACTO
                    </h2>
                    <p className="font-mono text-lg max-w-[750px] mx-auto text-ink/80">
                        ¿Buscas integrar gestión de datos y transformación digital en tus proyectos de construcción? Conversemos sobre cómo puedo aportar a tu equipo.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 max-w-[1100px] mx-auto">
                    {/* Form */}
                    <div className="bg-white border-4 border-ink p-10 shadow-brutal-xl relative">
                        <div className="absolute top-0 left-0 w-full h-4 bg-safety-orange"></div>
                        
                        {isSubmitted ? (
                            <div className="text-center py-16">
                                <i className="fa-solid fa-circle-check text-6xl text-term-green mb-6"></i>
                                <h3 className="font-display text-2xl mb-3 text-eng-blue uppercase">MENSAJE ENVIADO</h3>
                                <p className="font-mono text-gray-600">
                                    Gracias por contactarme. Te responderé lo antes posible.
                                </p>
                                <button 
                                    onClick={() => setIsSubmitted(false)}
                                    className="mt-8 text-eng-blue font-bold underline flex items-center gap-2 mx-auto"
                                >
                                    <i className="fa-solid fa-arrow-rotate-left"></i>
                                    Enviar otro mensaje
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-8 mt-6" noValidate>
                                {/* Name */}
                                <div>
                                    <label htmlFor="contact-name" className="block font-display text-sm mb-3 uppercase flex items-center gap-2">
                                        <i className="fa-solid fa-user"></i>
                                        NOMBRE
                                    </label>
                                    <input
                                        id="contact-name"
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        autoComplete="name"
                                        className={`w-full border-4 ${errors.name ? 'border-alert-red bg-red-50' : 'border-ink'} p-4 font-mono text-base focus:outline-none focus:border-eng-blue transition-colors`}
                                        placeholder="Tu nombre"
                                        aria-invalid={errors.name ? 'true' : 'false'}
                                        aria-describedby={errors.name ? 'name-error' : undefined}
                                    />
                                    {errors.name && (
                                        <div id="name-error" className="mt-3 bg-alert-red text-white px-4 py-3 border-4 border-ink text-sm font-bold flex items-center gap-2" role="alert">
                                            <i className="fa-solid fa-triangle-exclamation"></i>
                                            {errors.name}
                                        </div>
                                    )}
                                </div>

                                {/* Email */}
                                <div>
                                    <label htmlFor="contact-email" className="block font-display text-sm mb-3 uppercase flex items-center gap-2">
                                        <i className="fa-solid fa-envelope"></i>
                                        EMAIL
                                    </label>
                                    <input
                                        id="contact-email"
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        autoComplete="email"
                                        className={`w-full border-4 ${errors.email ? 'border-alert-red bg-red-50' : 'border-ink'} p-4 font-mono text-base focus:outline-none focus:border-eng-blue transition-colors`}
                                        placeholder="tu@email.com"
                                        aria-invalid={errors.email ? 'true' : 'false'}
                                        aria-describedby={errors.email ? 'email-error' : undefined}
                                    />
                                    {errors.email && (
                                        <div id="email-error" className="mt-3 bg-alert-red text-white px-4 py-3 border-4 border-ink text-sm font-bold flex items-center gap-2" role="alert">
                                            <i className="fa-solid fa-triangle-exclamation"></i>
                                            {errors.email}
                                        </div>
                                    )}
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor="contact-message" className="block font-display text-sm mb-3 uppercase flex items-center gap-2">
                                        <i className="fa-solid fa-message"></i>
                                        MENSAJE
                                    </label>
                                    <textarea
                                        id="contact-message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={5}
                                        autoComplete="off"
                                        className={`w-full border-4 ${errors.message ? 'border-alert-red bg-red-50' : 'border-ink'} p-4 font-mono text-base focus:outline-none focus:border-eng-blue transition-colors resize-none`}
                                        placeholder="Cuéntame sobre tu proyecto..."
                                        aria-invalid={errors.message ? 'true' : 'false'}
                                        aria-describedby={errors.message ? 'message-error' : undefined}
                                    />
                                    {errors.message && (
                                        <div id="message-error" className="mt-3 bg-alert-red text-white px-4 py-3 border-4 border-ink text-sm font-bold flex items-center gap-2" role="alert">
                                            <i className="fa-solid fa-triangle-exclamation"></i>
                                            {errors.message}
                                        </div>
                                    )}
                                </div>

                                {/* Submit */}
                                <BrutalButton 
                                    type="submit" 
                                    variant="primary" 
                                    size="lg"
                                    className="w-full"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <i className="fa-solid fa-spinner fa-spin mr-2"></i>
                                            ENVIANDO...
                                        </>
                                    ) : (
                                        <>
                                            <i className="fa-solid fa-paper-plane mr-2"></i>
                                            ENVIAR MENSAJE
                                        </>
                                    )}
                                </BrutalButton>
                            </form>
                        )}
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        {/* Email */}
                        <a 
                            href="mailto:felipealonso.lobo@gmail.com"
                            className="block bg-white border-4 border-ink p-6 shadow-brutal hover:-translate-y-1 hover:shadow-brutal-lg transition-all group"
                        >
                            <div className="flex items-center gap-5">
                                <div className="bg-eng-blue border-4 border-ink w-16 h-16 flex items-center justify-center text-cream group-hover:bg-safety-orange transition-colors">
                                    <i className="fa-solid fa-envelope text-2xl"></i>
                                </div>
                                <div>
                                    <div className="font-display text-xs text-gray-500 uppercase">EMAIL</div>
                                    <div className="font-mono text-lg group-hover:text-eng-blue transition-colors">
                                        felipealonso.lobo@gmail.com
                                    </div>
                                </div>
                            </div>
                        </a>

                        {/* LinkedIn */}
                        <a 
                            href="https://www.linkedin.com/in/felipealonsolobo"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block bg-white border-4 border-ink p-6 shadow-brutal hover:-translate-y-1 hover:shadow-brutal-lg transition-all group"
                        >
                            <div className="flex items-center gap-5">
                                <div className="bg-[#0077B5] border-4 border-ink w-16 h-16 flex items-center justify-center text-cream group-hover:bg-safety-orange transition-colors">
                                    <i className="fa-brands fa-linkedin-in text-2xl"></i>
                                </div>
                                <div>
                                    <div className="font-display text-xs text-gray-500 uppercase">LINKEDIN</div>
                                    <div className="font-mono text-lg group-hover:text-eng-blue transition-colors">
                                        /in/felipealonsolobo
                                    </div>
                                </div>
                            </div>
                        </a>

                        {/* Phone */}
                        <div className="bg-white border-4 border-ink p-6 shadow-brutal">
                            <div className="flex items-center gap-5">
                                <div className="bg-term-green border-4 border-ink w-16 h-16 flex items-center justify-center text-ink">
                                    <i className="fa-solid fa-phone text-2xl"></i>
                                </div>
                                <div>
                                    <div className="font-display text-xs text-gray-500 uppercase">TELÉFONO</div>
                                    <div className="font-mono text-lg">
                                        +56 9 9871 4263
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="bg-ink text-cream border-4 border-ink p-6 shadow-brutal">
                            <div className="flex items-center gap-5">
                                <div className="bg-accent-yellow border-4 border-ink w-16 h-16 flex items-center justify-center text-ink">
                                    <i className="fa-solid fa-location-dot text-2xl"></i>
                                </div>
                                <div>
                                    <div className="font-display text-xs text-gray-400 uppercase">UBICACIÓN</div>
                                    <div className="font-mono text-lg">
                                        Santiago, Chile
                                    </div>
                                    <div className="font-mono text-xs text-gray-400 mt-1">
                                        Disponible: Híbrido / Remoto
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
