"use client";

import React, { useEffect, useRef, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './GSAPScrollReveal.css';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

interface GSAPScrollRevealProps {
    children: React.ReactNode;
    scrollContainerRef?: React.RefObject<HTMLElement | null>;
    enableBlur?: boolean;
    baseOpacity?: number;
    baseRotation?: number;
    blurStrength?: number;
    containerClassName?: string;
    textClassName?: string;
    rotationEnd?: string;
    wordAnimationEnd?: string;
    as?: React.ElementType;
    splitBy?: 'words' | 'chars';
    scrub?: boolean | number;
    stagger?: number;
}

const GSAPScrollReveal: React.FC<GSAPScrollRevealProps> = ({
    children,
    scrollContainerRef,
    enableBlur = true,
    baseOpacity = 0,
    baseRotation = 5,
    blurStrength = 10,
    containerClassName = '',
    textClassName = '',
    rotationEnd = 'center center',
    wordAnimationEnd = 'center center',
    as: Component = 'div',
    splitBy = 'words',
    scrub = true,
    stagger = 0.05
}) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const splitText = useMemo(() => {
        const text = typeof children === 'string' ? children : '';
        if (splitBy === 'chars') {
            return text.split('').map((char, index) => (
                <span className="word inline-block" key={index}>
                    {char === ' ' ? '\u00A0' : char}
                </span>
            ));
        }
        return text.split(/(\s+)/).map((word, index) => {
            if (word.match(/^\s+$/)) return word;
            return (
                <span className="word inline-block" key={index}>
                    {word}
                </span>
            );
        });
    }, [children, splitBy]);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const scroller = scrollContainerRef && scrollContainerRef.current ? scrollContainerRef.current : window;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                el,
                { transformOrigin: '0% 50%', rotate: baseRotation },
                {
                    ease: 'power2.out',
                    rotate: 0,
                    scrollTrigger: {
                        trigger: el,
                        scroller,
                        start: 'top bottom-=10%',
                        end: rotationEnd,
                        scrub: scrub
                    }
                }
            );

            const wordElements = el.querySelectorAll('.word');

            gsap.fromTo(
                wordElements,
                { opacity: baseOpacity, willChange: 'opacity, filter' },
                {
                    ease: 'power2.out',
                    opacity: 1,
                    stagger: stagger,
                    scrollTrigger: {
                        trigger: el,
                        scroller,
                        start: 'top bottom-=20%',
                        end: wordAnimationEnd,
                        scrub: scrub
                    }
                }
            );

            if (enableBlur) {
                gsap.fromTo(
                    wordElements,
                    { filter: `blur(${blurStrength}px)` },
                    {
                        ease: 'power2.out',
                        filter: 'blur(0px)',
                        stagger: stagger,
                        scrollTrigger: {
                            trigger: el,
                            scroller,
                            start: 'top bottom-=20%',
                            end: wordAnimationEnd,
                            scrub: scrub
                        }
                    }
                );
            }
        }, el);

        return () => {
            ctx.revert();
        };
    }, [scrollContainerRef, enableBlur, baseRotation, baseOpacity, rotationEnd, wordAnimationEnd, blurStrength, scrub, stagger]);

    return (
        <Component ref={containerRef} className={`scroll-reveal ${containerClassName}`}>
            <div className={`scroll-reveal-text ${textClassName}`}>{splitText}</div>
        </Component>
    );
};

export default GSAPScrollReveal;
