import React from 'react';

interface BrutalBoxProps {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
    variant?: 'default' | 'dark' | 'highlight' | 'accent';
    padding?: 'none' | 'sm' | 'md' | 'lg';
}

const BrutalBox: React.FC<BrutalBoxProps> = ({ 
    children, 
    className = '', 
    hoverEffect = true,
    variant = 'default',
    padding = 'lg'
}) => {
    const hoverStyles = hoverEffect 
        ? "hover:-translate-y-[3px] hover:-translate-x-[3px] hover:shadow-hard-hover transition-all duration-150" 
        : "";
    
    const variantStyles = {
        default: 'bg-white border-black',
        dark: 'bg-ink text-white border-white',
        highlight: 'bg-high-yellow border-black',
        accent: 'bg-digi-cyan border-black'
    };
    
    const paddingStyles = {
        none: '',
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8'
    };

    return (
        <article className={`border-4 shadow-hard relative ${variantStyles[variant]} ${paddingStyles[padding]} ${hoverStyles} ${className}`}>
            {children}
        </article>
    );
};

export default BrutalBox;
