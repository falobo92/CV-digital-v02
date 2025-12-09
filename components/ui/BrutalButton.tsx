import React from 'react';

interface BrutalButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'default' | 'primary' | 'dark';
    size?: 'sm' | 'md' | 'lg';
    as?: 'button' | 'a';
    href?: string;
    target?: string;
    rel?: string;
    active?: boolean;
}

const BrutalButton: React.FC<BrutalButtonProps> = ({ 
    children, 
    variant = 'default', 
    size = 'md',
    as = 'button', 
    href,
    target,
    rel,
    className = '',
    active = false,
    ...props 
}) => {
    const baseStyles = "brutal-btn inline-flex items-center justify-center font-display uppercase border-4 border-ink text-center cursor-pointer select-none tracking-wide";
    
    const sizeStyles = {
        sm: 'px-5 py-2 text-xs',
        md: 'px-7 py-3 text-sm',
        lg: 'px-10 py-4 text-base'
    };
    
    const variants = {
        default: `bg-white text-ink hover:bg-accent-yellow shadow-brutal hover:-translate-y-1 hover:-translate-x-1 hover:shadow-brutal-lg transition-all`,
        primary: `bg-safety-orange text-cream hover:bg-safety-orange-light shadow-brutal hover:-translate-y-1 hover:-translate-x-1 hover:shadow-brutal-lg transition-all`,
        dark: `bg-ink text-cream hover:bg-eng-blue shadow-brutal hover:-translate-y-1 hover:-translate-x-1 hover:shadow-brutal-lg transition-all`
    };

    const activeStyles = active 
        ? "bg-ink text-cream translate-x-[4px] translate-y-[4px] shadow-brutal-pressed" 
        : variants[variant];

    const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${activeStyles} ${className}`;

    if (as === 'a' && href) {
        return (
            <a 
                href={href} 
                target={target}
                rel={rel}
                className={combinedStyles}
            >
                {children}
            </a>
        );
    }

    return (
        <button className={combinedStyles} {...props}>
            {children}
        </button>
    );
};

export default BrutalButton;
