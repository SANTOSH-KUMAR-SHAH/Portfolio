"use client";

import { useEffect, useState, useRef } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

const styles = {
    wrapper: {
        display: 'inline-block',
        whiteSpace: 'pre-wrap' as const,
    },
    srOnly: {
        position: 'absolute' as const,
        width: '1px',
        height: '1px',
        padding: 0,
        margin: '-1px',
        overflow: 'hidden',
        clip: 'rect(0,0,0,0)',
        border: 0,
    }
};

interface DecryptedTextProps extends Omit<HTMLMotionProps<"span">, 'children'> {
    text: string;
    speed?: number;
    maxIterations?: number;
    sequential?: boolean;
    revealDirection?: 'start' | 'end' | 'center';
    useOriginalCharsOnly?: boolean;
    characters?: string;
    className?: string;
    parentClassName?: string;
    encryptedClassName?: string;
    animateOn?: 'hover' | 'view' | 'both';
}

export default function DecryptedText({
    text,
    speed = 50,
    maxIterations = 10,
    sequential = false,
    revealDirection = 'start',
    useOriginalCharsOnly = false,
    characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+',
    className = '',
    parentClassName = '',
    encryptedClassName = '',
    animateOn = 'hover',
    ...props
}: DecryptedTextProps) {
    const [displayText, setDisplayText] = useState(text);
    const [isHovering, setIsHovering] = useState(false);
    const [isScrambling, setIsScrambling] = useState(false);
    const [revealedIndices, setRevealedIndices] = useState(new Set<number>());
    const [hasAnimated, setHasAnimated] = useState(false);
    const containerRef = useRef<HTMLSpanElement>(null);

    // Correctly handle complex characters like Devanagari or Emojis
    const splitText = (str: string) => {
        if (typeof Intl !== 'undefined' && (Intl as any).Segmenter) {
            const segmenter = new (Intl as any).Segmenter(undefined, { granularity: "grapheme" });
            return Array.from(segmenter.segment(str)).map((s: any) => s.segment);
        }
        return str.split('');
    };

    useEffect(() => {
        let interval: ReturnType<typeof setInterval>;
        let currentIteration = 0;
        const textChars = splitText(text);

        const getNextIndex = (revealedSet: Set<number>) => {
            const textLength = textChars.length;
            switch (revealDirection) {
                case 'start':
                    return revealedSet.size;
                case 'end':
                    return textLength - 1 - revealedSet.size;
                case 'center': {
                    const middle = Math.floor(textLength / 2);
                    const offset = Math.floor(revealedSet.size / 2);
                    const nextIndex = revealedSet.size % 2 === 0 ? middle + offset : middle - offset - 1;

                    if (nextIndex >= 0 && nextIndex < textLength && !revealedSet.has(nextIndex)) {
                        return nextIndex;
                    }

                    for (let i = 0; i < textLength; i++) {
                        if (!revealedSet.has(i)) return i;
                    }
                    return 0;
                }
                default:
                    return revealedSet.size;
            }
        };

        const availableChars = useOriginalCharsOnly
            ? Array.from(new Set(textChars.filter(char => char !== ' ')))
            : splitText(characters);

        const shuffleText = (originalChars: string[], currentRevealed: Set<number>) => {
            if (useOriginalCharsOnly) {
                const positions = originalChars.map((char, i) => ({
                    char,
                    isSpace: char === ' ',
                    index: i,
                    isRevealed: currentRevealed.has(i)
                }));

                const nonSpaceChars = positions.filter(p => !p.isSpace && !p.isRevealed).map(p => p.char);

                for (let i = nonSpaceChars.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [nonSpaceChars[i], nonSpaceChars[j]] = [nonSpaceChars[j], nonSpaceChars[i]];
                }

                let charIndex = 0;
                return positions
                    .map(p => {
                        if (p.isSpace) return ' ';
                        if (p.isRevealed) return originalChars[p.index];
                        return nonSpaceChars[charIndex++];
                    })
                    .join('');
            } else {
                return originalChars
                    .map((char, i) => {
                        if (char === ' ') return ' ';
                        if (currentRevealed.has(i)) return originalChars[i];
                        return availableChars[Math.floor(Math.random() * availableChars.length)];
                    })
                    .join('');
            }
        };

        if (isHovering) {
            setIsScrambling(true);
            const activeRevealed = new Set<number>();

            interval = setInterval(() => {
                if (sequential) {
                    if (activeRevealed.size < textChars.length) {
                        const nextIndex = getNextIndex(activeRevealed);
                        activeRevealed.add(nextIndex);

                        setRevealedIndices(new Set(activeRevealed));
                        setDisplayText(shuffleText(textChars, activeRevealed));
                    } else {
                        clearInterval(interval);
                        setIsScrambling(false);
                    }
                } else {
                    setDisplayText(shuffleText(textChars, activeRevealed));
                    currentIteration++;
                    if (currentIteration >= maxIterations) {
                        clearInterval(interval);
                        setIsScrambling(false);
                        setDisplayText(text);
                    }
                }
            }, speed);
        } else {
            setDisplayText(text);
            setRevealedIndices(new Set());
            setIsScrambling(false);
        }

        return () => {
            if (interval) clearInterval(interval);
        };
    }, [isHovering, text, speed, maxIterations, sequential, revealDirection, characters, useOriginalCharsOnly]);

    useEffect(() => {
        if (animateOn !== 'view' && animateOn !== 'both') return;

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !hasAnimated) {
                    setIsHovering(true);
                    setHasAnimated(true);
                }
            });
        };

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        const currentRef = containerRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [animateOn, hasAnimated]);

    const hoverProps =
        animateOn === 'hover' || animateOn === 'both'
            ? {
                onMouseEnter: () => setIsHovering(true),
                onMouseLeave: () => setIsHovering(false)
            }
            : {};

    return (
        <motion.span className={parentClassName} ref={containerRef} style={styles.wrapper} {...hoverProps} {...props}>
            <span style={styles.srOnly}>{displayText}</span>

            <span aria-hidden="true">
                {displayText.split('').map((char, index) => {
                    const isRevealedOrDone = revealedIndices.has(index) || !isScrambling || !isHovering;

                    return (
                        <span key={index} className={isRevealedOrDone ? className : encryptedClassName}>
                            {char}
                        </span>
                    );
                })}
            </span>
        </motion.span>
    );
}
