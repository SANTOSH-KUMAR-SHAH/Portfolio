import { SectionWrapper } from '../components/SectionWrapper';
import { portfolioData } from '../data/portfolio';
import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SparklesCore } from '@/components/ui/sparkles';
import { Lightning } from '@/components/ui/hero-odyssey';
import { Quote, Cpu, Palette, Brackets, Binary, ShieldCheck, Zap } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import DecryptedText from '@/components/ui/decrypted-text';
import PixelTransition from '@/components/ui/pixel-transition';

export function About() {
    const [revealAge, setRevealAge] = useState(false);
    const birthYear = 2003;
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;

    const philosophyRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: philosophyRef,
        offset: ["start end", "end start"]
    });
    const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);
    const rotate = useTransform(scrollYProgress, [0, 1], [-3, 3]);

    return (
        <SectionWrapper id="about" className="overflow-hidden">
            <div className="max-w-6xl mx-auto space-y-32">
                {/* Intro Section - Pixel Poetry Redesign */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    {/* Visual Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-5 relative group"
                    >
                        {/* High-tech Border/Glow */}
                        <div className="absolute -inset-4 bg-gradient-to-tr from-primary/30 via-secondary/20 to-accent/30 rounded-[2rem] blur-2xl group-hover:opacity-100 transition-opacity opacity-0 duration-700"></div>

                        <div className="relative aspect-[4/5] bg-gray-900 rounded-3xl border border-white/5 overflow-hidden shadow-2xl group h-full">
                            <PixelTransition
                                firstContent={
                                    <img
                                        src="/assets/profile.png"
                                        alt="Santosh Kumar Shah"
                                        className="w-full h-full object-cover"
                                    />
                                }
                                secondContent={
                                    <div className="w-full h-full bg-black flex flex-col justify-between p-10 border-r-8 border-primary relative overflow-hidden">
                                        {/* Background Watermark */}
                                        <div className="absolute top-0 right-0 font-display text-[12vw] font-black text-white/[0.03] select-none pointer-events-none leading-none -rotate-12 translate-x-12 translate-y-12 text-right">
                                            SHAH
                                        </div>

                                        <div className="relative z-10 flex flex-col gap-2">
                                            <span className="font-serif italic text-primary/80 text-sm tracking-widest uppercase">The Vision</span>
                                            <h5 className="font-display text-5xl md:text-6xl font-black text-white leading-[0.8] tracking-tighter text-left">
                                                THE<br />
                                                <span className="text-primary italic">CHAOS</span><br />
                                                IS SILENT.
                                            </h5>
                                        </div>

                                        <div className="relative z-10 flex flex-col items-end gap-6 text-right w-full">
                                            <div className="w-12 h-1 bg-white" />
                                            <div className="space-y-1 w-full">
                                                <DecryptedText
                                                    text="Pixels are just points until they breathe."
                                                    animateOn="view"
                                                    speed={30}
                                                    className="text-white text-sm font-light italic leading-tight"
                                                    encryptedClassName="text-primary/40"
                                                />
                                                <div className="font-mono text-[8px] text-gray-500 uppercase tracking-widest mt-2 space-y-1">
                                                    <p>&gt; Reality is a variable.</p>
                                                    <p>&gt; Logic is the brush.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="absolute left-4 bottom-10 [writing-mode:vertical-lr] rotate-180 font-mono text-[9px] text-primary/40 tracking-[0.8em] uppercase">
                                            Est. 2003 • Digital Architect
                                        </div>
                                    </div>
                                }
                                gridSize={12}
                                pixelColor="#3b82f6"
                                animationStepDuration={0.4}
                                className="w-full h-full"
                                aspectRatio="125%"
                            />

                            {/* Technical Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 pointer-events-none" />
                            <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:20px_20px] opacity-30 pointer-events-none" />

                            {/* Corner Accents */}
                            <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-primary opacity-50 pointer-events-none" />
                            <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-secondary opacity-50 pointer-events-none" />

                            {/* Overlay Glass Label */}
                            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[80%] glass-card p-6 rounded-2xl border border-white/10 backdrop-blur-2xl text-center group-hover:bg-white/10 transition-colors pointer-events-none">
                                <Palette className="w-5 h-5 text-accent mx-auto mb-2" />
                                <h4 className="text-white font-bold tracking-tight">Pixel Poetry</h4>
                                <p className="text-[10px] text-gray-400 font-mono uppercase tracking-[0.3em] mt-1">Design_DNA</p>
                            </div>
                        </div>


                        {/* Floating elements */}
                        <div className="absolute -top-8 -right-8 w-16 h-16 bg-primary/20 rounded-full blur-xl animate-pulse" />
                        <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-secondary/10 rounded-full blur-2xl" />
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-7 space-y-10"
                    >
                        <header>
                            <span className="text-primary font-serif italic text-lg tracking-wide mb-4 block">About Me</span>
                            <ScrollReveal
                                size="2xl"
                                textClassName="tracking-tighter !font-bold"
                                containerClassName="!my-0"
                            >
                                The Mastermind
                            </ScrollReveal>
                        </header>

                        <div className="space-y-8">
                            <div className="relative p-8 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm overflow-hidden group hover:border-primary/30 transition-colors duration-500">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:rotate-12 transition-transform">
                                    <Cpu className="w-12 h-12 text-primary" />
                                </div>
                                <ScrollReveal
                                    size="md"
                                    textClassName="!font-light"
                                    containerClassName="!my-0"
                                >
                                    I am a Design-Centric Engineer who views code as the invisible ink that brings imagination to the screen.
                                </ScrollReveal>
                            </div>

                            <ScrollReveal
                                size="sm"
                                variant="muted"
                                textClassName="!font-normal pl-4 border-l-2 border-white/10"
                                containerClassName="!my-0"
                            >
                                {`Based in Kathmandu, Nepal, I build interfaces that bridge the gap between pure mathematics and raw human emotion. If it doesn't feel right, it isn't finished.`}
                            </ScrollReveal>

                            <div className="flex flex-wrap gap-3">
                                {portfolioData.funFacts.map((fact, i) => (
                                    <ScrollReveal
                                        key={i}
                                        size="sm"
                                        textClassName="!font-mono !text-[11px]"
                                        containerClassName="!my-0 inline-block"
                                        staggerDelay={0.02}
                                    >
                                        <div className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-accent/50 transition-all cursor-default">
                                            <div className="w-1 h-1 bg-accent rounded-full animate-pulse" />
                                            {fact}
                                        </div>
                                    </ScrollReveal>
                                ))}
                            </div>

                            <div
                                className="group relative inline-flex items-center gap-4 px-8 py-4 bg-white/[0.03] border border-white/10 rounded-2xl cursor-pointer hover:bg-white/[0.07] transition-all overflow-hidden"
                                onClick={() => setRevealAge(!revealAge)}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
                                <span className="text-2xl group-hover:scale-110 transition-transform">🧬</span>
                                {revealAge ? (
                                    <ScrollReveal
                                        size="sm"
                                        textClassName="!font-mono !text-accent relative z-10 !m-0"
                                        containerClassName="!my-0"
                                        staggerDelay={0.03}
                                    >
                                        {`CORE_AGE: ${age}_CYCLES`}
                                    </ScrollReveal>
                                ) : (
                                    <ScrollReveal
                                        size="sm"
                                        textClassName="!font-mono !text-xs !text-gray-500 uppercase tracking-widest relative z-10 group-hover:!text-gray-300 !m-0"
                                        containerClassName="!my-0"
                                        staggerDelay={0.03}
                                    >
                                        Decrypt Bio Stats
                                    </ScrollReveal>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Anugacchatu Pravaham Section */}
                <div className="relative py-20" ref={philosophyRef}>
                    {/* Ambient Sparkles for this subsection */}
                    <div className="absolute inset-0 w-full h-full pointer-events-none opacity-50 mix-blend-screen">
                        <SparklesCore
                            id="about-philosophy-sparkles"
                            background="transparent"
                            minSize={0.6}
                            maxSize={1.4}
                            particleDensity={50}
                            className="w-full h-full"
                            particleColor="#FFFFFF"
                        />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* The Mantra Side */}
                        <motion.div
                            style={{ y, rotate }}
                            className="relative"
                        >
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/20 via-transparent to-secondary/20 rounded-full blur-[80px]" />

                            <div className="relative glass-card p-12 rounded-[3rem] border border-white/10 overflow-hidden group bg-black/40 backdrop-blur-md">
                                <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay" />

                                <motion.h2
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 1 }}
                                    className="font-display text-5xl md:text-7xl font-bold text-center bg-gradient-to-br from-white via-gray-200 to-gray-500 bg-clip-text text-transparent mb-6 relative z-10"
                                >
                                    {portfolioData.personal.mantra}
                                </motion.h2>

                                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8" />

                                <div className="text-center space-y-2">
                                    <p className="font-serif italic text-2xl text-gray-300">Anugacchatu Pravaham</p>
                                    <DecryptedText
                                        text="Go with the flow"
                                        animateOn="view"
                                        speed={50}
                                        className="font-mono text-sm uppercase tracking-[0.5em] text-primary"
                                        encryptedClassName="text-gray-600"
                                    />
                                </div>
                            </div>
                        </motion.div>

                        {/* The Content Side */}
                        <div className="space-y-10 relative z-10">
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <span className="text-accent font-serif italic text-lg tracking-wide mb-4 block">
                                    My Philosophy
                                </span>
                                <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                                    Chaos is just <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                                        undeveloped magic.
                                    </span>
                                </h3>

                                <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
                                    <p>
                                        I used to think coding was about command and control. I was wrong. It’s about <span className="text-white italic">rhythm and flow</span>. When you stop fighting the syntax and start listening to the logic, the chaos suddenly aligns into something beautiful.
                                    </p>
                                    <p>
                                        <span className="text-primary font-bold">I treat bugs like plot twists.</span> They aren't failures; they're clues. My philosophy is simple: don't build walls, build rivers. Flexible code survives; rigid code shatters. I write software that breathes.
                                    </p>
                                </div>
                            </motion.div>

                            <div className="flex gap-4">
                                {[
                                    "Liquid_Logic",
                                    "Code_Poetry",
                                    "Bug_Whisperer"
                                ].map((tag, i) => (
                                    <motion.div
                                        key={tag}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 + (i * 0.1) }}
                                        className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs font-mono text-gray-300 hover:border-primary/50 hover:text-white transition-colors cursor-crosshair"
                                    >
                                        {tag}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Philosophy Section with Lightning Effect */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative rounded-3xl overflow-hidden border border-white/10 bg-black min-h-[500px] flex items-center justify-center p-8 group"
                >
                    {/* Background Lightning Effect */}
                    <div className="absolute inset-0 opacity-40 group-hover:opacity-100 transition-opacity duration-1000">
                        <Lightning
                            hue={280}
                            intensity={0.4}
                            speed={1.5}
                            size={1}
                        />
                    </div>

                    {/* Shadow Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black z-10" />

                    {/* Content */}
                    <div className="relative z-20 max-w-4xl text-center space-y-12">
                        <div className="flex flex-col items-center">
                            <Quote className="w-12 h-12 text-primary/30 mb-6" />
                            <DecryptedText
                                text="Code Philosophy"
                                animateOn="view"
                                revealDirection="center"
                                className="font-display text-4xl md:text-6xl font-black text-white tracking-widest uppercase"
                                encryptedClassName="text-primary opacity-50"
                                speed={40}
                            />
                            <div className="w-full max-w-[300px] h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mt-6" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                            {portfolioData.philosophy.map((phi, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ scale: 1.02, rotateY: 5, rotateX: -5 }}
                                    className="relative p-8 rounded-3xl bg-black/60 backdrop-blur-3xl border border-white/5 shadow-2xl overflow-hidden group"
                                    style={{ transformStyle: 'preserve-3d' }}
                                >
                                    {/* Scanline Effect */}
                                    <div className="absolute inset-0 bg-scanline pointer-events-none opacity-10" />

                                    <div className="flex flex-col gap-6 relative z-10">
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                                                <span className="font-serif italic text-sm text-gray-400">Principle {i + 1}</span>
                                            </div>
                                            {[Brackets, Binary, ShieldCheck, Zap][i % 4] && React.createElement([Brackets, Binary, ShieldCheck, Zap][i % 4], {
                                                className: "w-4 h-4 text-primary opacity-20 group-hover:opacity-100 transition-opacity"
                                            })}
                                        </div>

                                        <DecryptedText
                                            text={phi}
                                            animateOn="both"
                                            className="text-white text-xl md:text-2xl font-medium leading-tight"
                                            encryptedClassName="text-primary italic opacity-60"
                                            sequential={true}
                                            revealDirection="start"
                                            speed={30}
                                        />

                                        <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                                            <span className="font-serif text-xs text-gray-500 italic">Essential</span>
                                            <div className="flex gap-1">
                                                <div className="w-8 h-1 bg-primary/20 rounded-full overflow-hidden">
                                                    <motion.div
                                                        animate={{ x: ["-100%", "100%"] }}
                                                        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                                                        className="w-full h-full bg-primary"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Ambient Glow */}
                                    <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-primary/5 rounded-full blur-[60px] group-hover:bg-primary/10 transition-colors" />
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Decorative Elements */}

                    <div className="absolute bottom-8 right-8 font-mono text-[10px] text-gray-600 tracking-[0.5em] uppercase vertical-text">Creative_Output</div>
                </motion.div>
            </div >
        </SectionWrapper >
    );
}
