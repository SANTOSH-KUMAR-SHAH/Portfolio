"use client";

import { motion, Variants } from "framer-motion";
import React, {
    ElementType,
    ReactNode,
    useEffect,
    useState,
} from "react";
import { cn } from "@/lib/utils";

export interface TypingTextProps {
    children: ReactNode;
    as?: ElementType;
    className?: string;
    delay?: number;
    duration?: number;
    fontSize?: string;
    fontWeight?: string;
    color?: string;
    letterSpacing?: string;
    align?: "left" | "center" | "right";
    loop?: boolean;
}

export const TypingText = ({
    children,
    as: Component = "div",
    className = "",
    delay = 0,
    duration = 2,
    fontSize = "text-4xl",
    fontWeight = "font-bold",
    color = "text-white",
    letterSpacing = "tracking-wide",
    align = "left",
}: TypingTextProps) => {
    const [textContent, setTextContent] = useState<string>("");

    useEffect(() => {
        const extractText = (node: ReactNode): string => {
            if (typeof node === "string" || typeof node === "number") {
                return node.toString();
            }
            if (Array.isArray(node)) {
                return node.map(extractText).join("");
            }
            if (
                React.isValidElement(node) &&
                typeof node.props.children !== "undefined"
            ) {
                return extractText(node.props.children);
            }
            return "";
        };

        setTextContent(extractText(children));
    }, [children]);

    const characters = React.useMemo(() => {
        // Use Intl.Segmenter to correctly split complex characters (e.g., Devanagari matras, Emojis)
        if (typeof Intl !== 'undefined' && (Intl as any).Segmenter) {
            const segmenter = new (Intl as any).Segmenter(undefined, { granularity: "grapheme" });
            return Array.from(segmenter.segment(textContent)).map((s: any) =>
                s.segment === " " ? "\u00A0" : s.segment
            );
        }
        return textContent.split("").map((char) => (char === " " ? "\u00A0" : char));
    }, [textContent]);

    const characterVariants: Variants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: (i: number) => ({
            opacity: 1,
            scale: 1,
            transition: {
                delay: delay + i * (duration / characters.length),
                duration: 0.3,
                ease: "easeInOut",
            },
        }),
    };

    return (
        <Component
            className={cn(
                "inline-flex flex-wrap",
                className,
                fontSize,
                fontWeight,
                color,
                letterSpacing,
                align === "center"
                    ? "justify-center text-center"
                    : align === "right"
                        ? "justify-end text-right"
                        : "justify-start text-left"
            )}
        >
            <motion.span
                className="inline-block"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                aria-label={textContent}
                role="text"
            >
                {characters.map((char, index) => (
                    <motion.span
                        key={`${char}-${index}`}
                        className="inline-block"
                        variants={characterVariants}
                        custom={index}
                    >
                        {char}
                    </motion.span>
                ))}
            </motion.span>
        </Component>
    );
};
