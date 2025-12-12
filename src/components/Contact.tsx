import React, { useState, useRef } from 'react';
import BrutalButton from './ui/BrutalButton';
import SectionDivider from './ui/SectionDivider';
import emailjs from '@emailjs/browser';
import { getSupabaseClient } from '../utils/supabaseClient';

const emailConfig = {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
} as const;

const isEmailConfigured = Boolean(
    emailConfig.serviceId &&
    emailConfig.templateId &&
    emailConfig.publicKey
);

interface FormState {
    from_name: string;
    from_email: string;
    message: string;
}

interface FormErrors {
    from_name?: string;
    from_email?: string;
    message?: string;
}

const Contact: React.FC = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [formData, setFormData] = useState<FormState>({
        from_name: '',
        from_email: '',
        message: ''
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.from_name.trim()) {
            newErrors.from_name = 'Identificación requerida';
        }

        if (!formData.from_email.trim()) {
            newErrors.from_email = 'Canal de retorno requerido';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.from_email)) {
            newErrors.from_email = 'Sintaxis de correo inválida';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Payload de mensaje vacío';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitError(null);

        if (!validateForm()) return;

        setIsSubmitting(true);

        try {
            if (!formRef.current) {
                throw new Error('Formulario no disponible. Refresca la página.');
            }

            // Guardar en Supabase primero (si está configurado)
            const supabase = getSupabaseClient();
            let dbError: unknown = null;
            if (supabase) {
                const { error } = await supabase
                    .from('contact_messages')
                    .insert([
                        {
                            name: formData.from_name,
                            email: formData.from_email,
                            message: formData.message
                        }
                    ]);
                dbError = error;
            }

            if (dbError) {
                // Continuamos aunque falle la BD, para intentar enviar el correo
            }

            // Enviar correo con EmailJS si está configurado
            if (isEmailConfigured) {
                try {
                    await emailjs.sendForm(
                        emailConfig.serviceId!,
                        emailConfig.templateId!,
                        formRef.current,
                        emailConfig.publicKey!
                    );
                } catch (emailError) {
                    // Si falla el correo pero se guardó en BD, no es crítico
                    if (dbError) {
                        throw new Error('Error en transmisión y almacenamiento. Intente canal alternativo (LinkedIn/Email).');
                    }
                }
            }

            setIsSubmitted(true);
            setFormData({ from_name: '', from_email: '', message: '' });
        } catch (error) {
            setSubmitError(
                error instanceof Error
                    ? error.message
                    : 'Error en transmisión. Intente canal alternativo (LinkedIn/Email).'
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
    };

    return (
        <section id="contacto" className="bg-cream border-b-6 border-ink relative overflow-hidden pb-12 sm:pb-16 lg:pb-24 xl:pb-32 pt-0">
            <SectionDivider text="CONTACTO /// CONEXIÓN /// COLABORACIÓN" theme="dark" direction="left" />

            {/* Background: Technical Grid similar to Hero */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none bg-tech-grid-40" />

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 relative z-10 pt-12 sm:pt-16 lg:pt-20">
                {/* Header Section Homologated */}
                <div className="flex flex-col md:flex-row gap-4 sm:gap-6 lg:gap-8 justify-between items-start md:items-end mb-10 sm:mb-12 lg:mb-16 border-b-3 sm:border-b-4 border-ink pb-6 sm:pb-8">
                    <div>
                        <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-ink flex items-center justify-center text-white font-mono text-[10px] sm:text-xs font-bold">07</div>
                            <span className="font-mono text-xs sm:text-sm font-bold text-ink uppercase tracking-widest">Iniciar Contacto</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display text-ink uppercase tracking-tight leading-none">
                            INICIAR <span className="text-eng-blue">TRANSMISIÓN</span>
                        </h2>
                    </div>
                    <p className="font-mono text-sm sm:text-base md:text-lg max-w-[500px] text-left md:text-right text-gray-600 md:border-r-4 md:border-ink md:pr-6 mt-3 md:mt-0">
                        Conversemos cómo ordenar la información de tu proyecto y acelerar decisiones con datos claros.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 sm:gap-10 lg:gap-16 xl:gap-20">

                    {/* Left: Data Input Terminal */}
                    <div className="bg-white border-3 sm:border-4 border-ink p-1 shadow-[4px_4px_0px_0px_rgba(15,15,15,1)] sm:shadow-[8px_8px_0px_0px_rgba(15,15,15,1)]">
                        <div className="bg-ink text-cream p-1.5 sm:p-2 font-mono text-xs sm:text-sm flex justify-between items-center mb-1">
                            <span className="truncate">:: INPUT_TERMINAL</span>
                            <span className="animate-pulse flex items-center gap-1"><span className="hidden sm:inline">●</span><span className="sm:hidden text-[10px]">◉</span> ONLINE</span>
                        </div>

                        <div className="p-4 sm:p-6 md:p-8 bg-cream/50">
                            {isSubmitted ? (
                                <div className="text-center py-16 flex flex-col items-center justify-center h-full min-h-[400px]">
                                    <div className="w-24 h-24 bg-term-green border-4 border-ink rounded-full flex items-center justify-center mb-6 shadow-brutal">
                                        <i className="fa-solid fa-check text-4xl text-ink"></i>
                                    </div>
                                    <h3 className="font-display text-3xl mb-2 text-ink uppercase">TRANSMISIÓN EXITOSA</h3>
                                    <p className="font-mono text-gray-600 mb-8 max-w-xs mx-auto">
                                        Datos recibidos. Responderé pronto con horarios disponibles.
                                    </p>
                                    <BrutalButton
                                        as="button"
                                        onClick={() => setIsSubmitted(false)}
                                        variant="outline"
                                        size="sm"
                                    >
                                        NUEVA TRANSMISIÓN
                                    </BrutalButton>
                                </div>
                            ) : (
                                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 sm:space-y-6" noValidate>
                                    {/* Name Field */}
                                    <div className="relative group">
                                        <label htmlFor="user_name" className="block font-mono text-xs sm:text-sm font-bold mb-1.5 sm:mb-2 uppercase text-gray-500 group-focus-within:text-eng-blue transition-colors">
                                            [01] Identificación (Nombre)
                                        </label>
                                        <div className="relative">
                                            <div className="absolute left-0 top-0 bottom-0 w-10 sm:w-12 bg-gray-100 border-r-3 sm:border-r-4 border-ink flex items-center justify-center border-y-3 sm:border-y-4 border-l-3 sm:border-l-4">
                                                <i className="fa-solid fa-user text-gray-400 text-sm sm:text-lg"></i>
                                            </div>
                                            <input
                                                id="user_name"
                                                type="text"
                                                name="from_name"
                                                value={formData.from_name}
                                                onChange={handleChange}
                                                className={`w-full pl-14 sm:pl-16 pr-3 sm:pr-4 py-3 sm:py-4 border-3 sm:border-4 ${errors.from_name ? 'border-alert-red bg-red-50' : 'border-ink bg-white'} font-mono text-sm sm:text-base focus:outline-none focus:border-eng-blue transition-all placeholder:text-gray-300`}
                                                placeholder="NOMBRE_APELLIDO"
                                            />
                                        </div>
                                        {errors.from_name && <div className="mt-1 text-alert-red font-mono text-[10px] sm:text-xs font-bold flex items-center gap-1"><i className="fa-solid fa-xmark"></i> {errors.from_name}</div>}
                                    </div>

                                    {/* Email Field */}
                                    <div className="relative group">
                                        <label htmlFor="user_email" className="block font-mono text-xs sm:text-sm font-bold mb-1.5 sm:mb-2 uppercase text-gray-500 group-focus-within:text-eng-blue transition-colors">
                                            [02] Canal de Retorno (Email)
                                        </label>
                                        <div className="relative">
                                            <div className="absolute left-0 top-0 bottom-0 w-10 sm:w-12 bg-gray-100 border-r-3 sm:border-r-4 border-ink flex items-center justify-center border-y-3 sm:border-y-4 border-l-3 sm:border-l-4">
                                                <i className="fa-solid fa-at text-gray-400 text-sm sm:text-lg"></i>
                                            </div>
                                            <input
                                                id="user_email"
                                                type="email"
                                                name="from_email"
                                                value={formData.from_email}
                                                onChange={handleChange}
                                                className={`w-full pl-14 sm:pl-16 pr-3 sm:pr-4 py-3 sm:py-4 border-3 sm:border-4 ${errors.from_email ? 'border-alert-red bg-red-50' : 'border-ink bg-white'} font-mono text-sm sm:text-base focus:outline-none focus:border-eng-blue transition-all placeholder:text-gray-300`}
                                                placeholder="USUARIO@DOMINIO.COM"
                                            />
                                        </div>
                                        {errors.from_email && <div className="mt-1 text-alert-red font-mono text-[10px] sm:text-xs font-bold flex items-center gap-1"><i className="fa-solid fa-xmark"></i> {errors.from_email}</div>}
                                    </div>

                                    {/* Message Field */}
                                    <div className="relative group">
                                        <label htmlFor="message" className="block font-mono text-xs sm:text-sm font-bold mb-1.5 sm:mb-2 uppercase text-gray-500 group-focus-within:text-eng-blue transition-colors">
                                            [03] Payload de Datos (Mensaje)
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={4}
                                            className={`w-full p-3 sm:p-4 border-3 sm:border-4 ${errors.message ? 'border-alert-red bg-red-50' : 'border-ink bg-white'} font-mono text-sm sm:text-base focus:outline-none focus:border-eng-blue transition-all placeholder:text-gray-300 resize-none`}
                                            placeholder="Ingresar mensaje..."
                                        />
                                        {errors.message && <div className="mt-1 text-alert-red font-mono text-[10px] sm:text-xs font-bold flex items-center gap-1"><i className="fa-solid fa-xmark"></i> {errors.message}</div>}
                                    </div>

                                    {submitError && (
                                        <div className="bg-alert-red text-white p-3 sm:p-4 border-3 sm:border-4 border-ink font-mono text-xs sm:text-sm">
                                            ERROR: {submitError}
                                        </div>
                                    )}

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-ink text-white font-display text-base sm:text-lg lg:text-xl uppercase py-3 sm:py-4 border-3 sm:border-4 border-transparent hover:bg-eng-blue hover:border-ink transition-all disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2 sm:gap-3 shadow-[3px_3px_0px_0px_rgba(200,200,200,1)] sm:shadow-[4px_4px_0px_0px_rgba(200,200,200,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <i className="fa-solid fa-spinner fa-spin"></i>
                                                TRANSMITIENDO...
                                            </>
                                        ) : (
                                            <>
                                                ejecutar_envio()
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>

                    {/* Right: Info Blocks */}
                    <div className="flex flex-col gap-4 sm:gap-6">
                        {/* Status Card */}
                        <div className="bg-digital-cyan border-3 sm:border-4 border-ink p-4 sm:p-6 shadow-brutal group hover:-translate-y-1 transition-transform">
                            <h3 className="font-mono text-xs sm:text-sm font-bold opacity-60 mb-1.5 sm:mb-2">:: ESTADO_ACTUAL</h3>
                            <div className="flex items-center gap-3 sm:gap-4">
                                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-term-green rounded-full animate-ping"></div>
                                <span className="font-display text-xl sm:text-2xl uppercase">DISPONIBLE</span>
                            </div>
                            <p className="font-mono text-xs sm:text-sm mt-2 opacity-80">
                                Abierto a proyectos donde la construcción necesite orden digital y decisiones basadas en datos.
                            </p>
                        </div>

                        {/* Direct Links */}
                        <div className="space-y-3 sm:space-y-4">
                            <a href="mailto:felipealonso.lobo@gmail.com" className="block bg-white border-3 sm:border-4 border-ink p-3 sm:p-5 hover:bg-accent-yellow transition-colors group">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                                        <i className="fa-solid fa-envelope text-lg sm:text-xl w-6 sm:w-8 flex-shrink-0"></i>
                                        <div className="min-w-0">
                                            <div className="font-mono text-[10px] sm:text-xs text-gray-500 uppercase">PROTOCOLO SMTP</div>
                                            <div className="font-bold font-mono text-xs sm:text-sm md:text-base group-hover:underline truncate">felipealonso.lobo@gmail.com</div>
                                        </div>
                                    </div>
                                    <i className="fa-solid fa-arrow-up-right-from-square opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 ml-2"></i>
                                </div>
                            </a>

                            <a href="https://www.linkedin.com/in/felipealonsolobo" target="_blank" rel="noopener noreferrer" className="block bg-white border-3 sm:border-4 border-ink p-3 sm:p-5 hover:bg-[#0077b5] hover:text-white transition-colors group">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-3 sm:gap-4">
                                        <i className="fa-brands fa-linkedin text-lg sm:text-xl w-6 sm:w-8 flex-shrink-0"></i>
                                        <div>
                                            <div className="font-mono text-[10px] sm:text-xs text-gray-500 group-hover:text-white/70 uppercase">RED LINKEDIN</div>
                                            <div className="font-bold font-mono text-xs sm:text-sm md:text-base group-hover:underline">/in/felipealonsolobo</div>
                                        </div>
                                    </div>
                                    <i className="fa-solid fa-arrow-up-right-from-square opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 ml-2"></i>
                                </div>
                            </a>

                            <div className="bg-ink text-cream border-3 sm:border-4 border-ink p-3 sm:p-5">
                                <div className="flex items-center gap-3 sm:gap-4">
                                    <i className="fa-solid fa-location-dot text-lg sm:text-xl w-6 sm:w-8 text-accent-yellow flex-shrink-0"></i>
                                    <div>
                                        <div className="font-mono text-[10px] sm:text-xs text-gray-400 uppercase">BASE DE OPERACIONES</div>
                                        <div className="font-bold font-mono text-xs sm:text-sm md:text-base">Santiago, Chile (GMT-3)</div>
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
