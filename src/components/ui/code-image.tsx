"use client";
import React, { useRef } from 'react';
import { cn } from '@/lib/utils';

interface CodeImageProps {
    src: string;
    alt: string;
    className?: string;
}

export const CodeImage: React.FC<CodeImageProps> = ({
    src,
    alt,
    className,
}) => {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <div
            ref={containerRef}
            className={cn(
                "relative w-full aspect-video rounded-xl overflow-hidden group cursor-pointer bg-gray-900 border border-white/10 shadow-2xl",
                className
            )}
        >
            {/* Background Project Image */}
            <img
                src={src}
                alt={alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Blue/Primary Glow Overlay */}
            <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/5 transition-colors duration-500 z-10" />

            {/* Inner Border/Glow for a more futuristic look */}
            <div className="absolute inset-0 border border-white/5 rounded-xl pointer-events-none z-30" />
        </div>
    );
};
