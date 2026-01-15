import { SectionWrapper } from '../components/SectionWrapper';
import { portfolioData } from '../data/portfolio';
import { ExternalLink, Github, Terminal, Layers, Zap } from 'lucide-react';
import { CodeImage } from '@/components/ui/code-image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TiltCard } from '@/components/ui/tilt-card';
import { useRef } from 'react';
import GSAPScrollReveal from '@/components/ui/gsap-scroll-reveal';

export function FeaturedWork() {
    const { featuredProject } = portfolioData;
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return (
        <SectionWrapper id="work" className="relative py-32 overflow-hidden">
            <div ref={containerRef} className="max-w-7xl mx-auto px-4 relative">
                {/* Immersive Background Text */}
                <motion.div
                    style={{ y: backgroundY }}
                    className="absolute -top-20 -left-20 text-[15vw] font-black text-white/[0.02] select-none pointer-events-none whitespace-nowrap leading-none hidden md:block"
                >
                    {featuredProject.title.toUpperCase()}
                </motion.div>

                <div className="flex flex-col gap-16 relative">
                    {/* Section Header */}
                    <div className="relative flex flex-col md:flex-row md:items-end justify-between gap-8">
                        <div>
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: "100px" }}
                                className="h-1 bg-primary absolute -bottom-4 left-0"
                            />
                            <h2 className="font-display text-4xl md:text-6xl font-bold flex items-center gap-4 text-white">
                                <span className="text-primary/50 font-mono text-xl md:text-2xl">02.</span>
                                The Masterpiece
                            </h2>
                        </div>
                        <div className="max-w-md">
                            <p className="font-serif italic text-primary tracking-wide mb-2">The Concept</p>
                            <p className="text-gray-400 text-sm italic font-light leading-relaxed">
                                "I have built dozens of systems, but this is the crown jewel. A convergence of clinical logic and raw aesthetic instinct."
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        {/* 3D Visual - 8 cols */}
                        <div className="lg:col-span-12 xl:col-span-8 relative group">
                            <TiltCard>
                                <div className="relative p-2 rounded-[2rem] bg-gradient-to-tr from-white/10 via-transparent to-white/5 backdrop-blur-3xl border border-white/10 shadow-[20px_20px_60px_-15px_rgba(0,0,0,0.7)] hover:shadow-primary/10 transition-shadow duration-700">
                                    <div className="overflow-hidden rounded-[1.5rem]">
                                        <CodeImage
                                            src="/assets/project-viswa.png"
                                            alt={featuredProject.title}
                                            className="!aspect-[16/9] !rounded-none border-none group-hover:scale-105 transition-transform duration-1000"
                                        />
                                    </div>

                                    <div className="absolute top-8 left-8 flex items-center gap-3 bg-black/80 backdrop-blur-xl px-5 py-2.5 rounded-full border border-white/10 z-20 shadow-2xl">
                                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(var(--primary-rgb),0.8)]" />
                                        <GSAPScrollReveal
                                            baseOpacity={0}
                                            enableBlur={true}
                                            blurStrength={15}
                                            baseRotation={0}
                                            splitBy="chars"
                                            stagger={0.05}
                                            textClassName="text-[11px] font-mono text-white tracking-[0.25em] uppercase font-bold"
                                        >
                                            ESTABLISHED_REALITY_V1.0
                                        </GSAPScrollReveal>
                                    </div>

                                    <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-primary rounded-tl-3xl pointer-events-none opacity-40" />
                                    <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-2 border-r-2 border-secondary rounded-br-3xl pointer-events-none opacity-40" />
                                </div>
                            </TiltCard>

                            {/* Floating Stats - Enhanced */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                className="absolute -right-4 -bottom-12 hidden xl:flex flex-col gap-6 z-30"
                            >
                                <div className="glass-card p-6 rounded-[2rem] border border-white/10 bg-black/60 backdrop-blur-3xl shadow-2xl space-y-3 min-w-[160px] relative overflow-hidden group/stat">
                                    <div className="absolute inset-0 bg-primary/5 -translate-x-full group-hover/stat:translate-x-0 transition-transform duration-500" />
                                    <div className="flex items-center gap-3 relative">
                                        <Zap className="w-5 h-5 text-primary" />
                                        <span className="text-[10px] font-mono text-primary uppercase tracking-widest">Efficiency</span>
                                    </div>
                                    <div className="text-3xl font-black text-white relative">99.9%</div>
                                    <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden relative">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "99.9%" }}
                                            transition={{ duration: 1.5, ease: "easeOut" }}
                                            className="h-full bg-primary"
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Details - 4 cols */}
                        <div className="lg:col-span-12 xl:col-span-4 flex flex-col gap-10">
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <span className="h-px w-8 bg-primary/40" />
                                    <span className="font-serif text-primary text-xs italic font-bold">Project Overview</span>
                                </div>
                                <h3 className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-none">
                                    {featuredProject.title.split(' ').map((word, i) => (
                                        <span key={i} className="block last:text-primary/90">
                                            {word}
                                        </span>
                                    ))}
                                </h3>
                            </div>

                            <div className="relative rounded-3xl bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 p-8 group overflow-hidden">
                                <div className="absolute -top-6 -right-6 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <Terminal className="w-32 h-32 text-primary rotate-12" />
                                </div>
                                <p className="text-xl text-gray-300 font-light leading-relaxed relative z-10 italic">
                                    {featuredProject.description}
                                </p>
                            </div>

                            <div className="space-y-6">
                                <p className="font-serif text-xs text-gray-500 italic px-1">Key Features</p>
                                <div className="grid grid-cols-1 gap-4">
                                    {featuredProject.highlights.map((h, i) => (
                                        <motion.div
                                            key={h}
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: i * 0.15 }}
                                            className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-primary/30 hover:bg-white/[0.04] transition-all group/item"
                                        >
                                            <div className="mt-1 p-2 rounded-lg bg-primary/10 border border-primary/20 group-hover/item:scale-110 transition-transform">
                                                <Layers className="w-4 h-4 text-primary" />
                                            </div>
                                            <span className="text-sm text-gray-400 group-hover/item:text-white transition-colors py-1">{h}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2 mt-4">
                                {featuredProject.tech.map(t => (
                                    <span key={t} className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[10px] font-mono text-gray-400 uppercase tracking-widest hover:border-primary/50 transition-colors">
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4 pt-4">
                                <motion.a
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    href={featuredProject.repo}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex-1 py-4 flex items-center justify-center gap-2 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all relative overflow-hidden group"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                                    <Github className="w-5 h-5 text-white" />
                                    <span className="font-bold text-sm text-white">Source</span>
                                </motion.a>
                                <motion.a
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    href={featuredProject.demo}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex-1 py-4 flex items-center justify-center gap-2 bg-primary text-black rounded-xl hover:bg-primary/80 transition-all font-bold text-sm shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)]"
                                >
                                    <ExternalLink className="w-5 h-5" />
                                    Launch
                                </motion.a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Background blobs */}
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/10 rounded-full blur-[120px] -z-10" />
            <div className="absolute top-1/3 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[150px] -z-10" />
        </SectionWrapper>
    );
}

