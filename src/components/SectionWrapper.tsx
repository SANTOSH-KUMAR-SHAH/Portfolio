import React from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';


interface SectionWrapperProps {
    children: React.ReactNode;
    id: string;
    className?: string;
}

export function SectionWrapper({ children, id, className = "" }: SectionWrapperProps) {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section
            id={id}
            ref={ref}
            className={cn(
                "min-h-screen w-full flex flex-col justify-center px-6 md:px-20 py-20 transition-opacity duration-700",
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
                className
            )}
        >
            {children}
        </section>
    );
}
