"use client";
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface FallBeamProps {
    className?: string;
    containerClassName?: string;
    color?: string;
    beamCount?: number;
}

export const FallBeam = ({
    className,
    containerClassName,
    color = "#3b82f6", // Default blue-500 equivalent
    beamCount = 30
}: FallBeamProps) => {
    const [beams, setBeams] = useState<Array<{ left: string; delay: string; duration: string }>>([]);

    useEffect(() => {
        // Generate beams on mount to avoid hydration mismatch
        const newBeams = Array.from({ length: beamCount }).map(() => ({
            left: `${Math.random() * 100}%`,
            delay: `-${Math.random() * 10}s`,
            duration: `${5 + Math.random() * 10}s`,
        }));
        setBeams(newBeams);
    }, [beamCount]);

    return (
        <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", containerClassName)}>
            {beams.map((beam, i) => (
                <div
                    key={i}
                    className={cn("absolute top-[-100px] w-px h-[20vh] bg-gradient-to-b from-transparent to-current opacity-40", className)}
                    style={{
                        left: beam.left,
                        color: color,
                        animation: `fall-beam ${beam.duration} ${beam.delay} linear infinite`,
                    }}
                />
            ))}
            <style>{`
                @keyframes fall-beam {
                    0% { transform: translateY(-100%); opacity: 0; }
                    10% { opacity: 0.5; }
                    90% { opacity: 0.5; }
                    100% { transform: translateY(120vh); opacity: 0; }
                }
            `}</style>
        </div>
    );
};
