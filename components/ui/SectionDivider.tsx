import React from 'react';

interface SectionDividerProps {
    text: string;
    direction?: 'left' | 'right';
    theme?: 'light' | 'dark' | 'accent';
}

const SectionDivider: React.FC<SectionDividerProps> = ({ text, direction = 'left', theme = 'light' }) => {
    // We only need one copy of the text string here, the duplication happens in the DOM structure
    const content = Array(8).fill(text).join('  ///  ');

    const getThemeStyles = () => {
        switch (theme) {
            case 'dark':
                return 'bg-ink text-white border-y-4 border-white';
            case 'accent':
                return 'bg-safety-orange text-ink border-y-4 border-ink';
            default:
                return 'bg-white text-ink border-y-4 border-ink';
        }
    };

    return (
        <div className={`w-full overflow-hidden py-3 ${getThemeStyles()} relative z-20 flex`}>
            {/* Container for the sliding content - we use 2 div copies to create the infinite loop */}
            {/* The transform -100% animation works if we have two identical children and move the container or the children */}

            <div className={`flex whitespace-nowrap flex-shrink-0 ${direction === 'left' ? 'animate-marquee' : 'animate-marquee-reverse'}`}>
                <span className="font-mono font-bold uppercase text-sm tracking-widest mx-4">{content}</span>
                <span className="font-mono font-bold uppercase text-sm tracking-widest mx-4">///</span>
            </div>

            <div className={`flex whitespace-nowrap flex-shrink-0 ${direction === 'left' ? 'animate-marquee' : 'animate-marquee-reverse'}`} aria-hidden="true">
                <span className="font-mono font-bold uppercase text-sm tracking-widest mx-4">{content}</span>
                <span className="font-mono font-bold uppercase text-sm tracking-widest mx-4">///</span>
            </div>
        </div>
    );
};

export default SectionDivider;
