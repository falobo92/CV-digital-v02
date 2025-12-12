import React from 'react';

type BrutalButtonVariant = 'default' | 'primary' | 'dark';
type BrutalButtonSize = 'sm' | 'md' | 'lg';

type BrutalButtonBaseProps = {
    variant?: BrutalButtonVariant;
    size?: BrutalButtonSize;
    active?: boolean;
    className?: string;
    children: React.ReactNode;
};

type BrutalButtonAsButtonProps = BrutalButtonBaseProps &
    React.ButtonHTMLAttributes<HTMLButtonElement> & {
        as?: 'button';
    };

type BrutalButtonAsAnchorProps = BrutalButtonBaseProps &
    React.AnchorHTMLAttributes<HTMLAnchorElement> & {
        as: 'a';
        href: string;
    };

type BrutalButtonProps = BrutalButtonAsButtonProps | BrutalButtonAsAnchorProps;

const BrutalButton: React.FC<BrutalButtonProps> = (props) => {
    const {
        children,
        variant = 'default',
        size = 'md',
        as = 'button',
        className = '',
        active = false
    } = props;

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

    if (as === 'a') {
        const { as: _as, variant: _variant, size: _size, active: _active, className: _className, ...anchorProps } = props;
        return (
            <a
                className={combinedStyles}
                {...anchorProps}
            >
                {children}
            </a>
        );
    }

    const { as: _as, variant: _variant, size: _size, active: _active, className: _className, ...buttonProps } = props;
    return (
        <button className={combinedStyles} {...buttonProps}>
            {children}
        </button>
    );
};

export default BrutalButton;
