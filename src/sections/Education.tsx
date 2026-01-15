import { SectionWrapper } from '../components/SectionWrapper';
import { GraduationCap, Award, Cpu, Zap, Activity, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';
import DecryptedText from '@/components/ui/decrypted-text';
import GradientBlinds from '@/components/ui/gradient-blinds';

export function Education() {
    return (
        <SectionWrapper id="education" className="relative py-32 overflow-hidden bg-black">
            {/* Immersive Background Effect */}
            <div className="absolute inset-0 z-0 opacity-40">
                <GradientBlinds
                    gradientColors={['#00fffc', '#000000', '#00fffc']}
                    blindCount={20}
                    angle={45}
                    noise={0.1}
                    spotlightRadius={0.4}
                    spotlightSoftness={0.8}
                />
            </div>

            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent opacity-20" />
                <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-secondary/20 to-transparent opacity-20" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-4">
                {/* Section Header */}
                <div className="flex flex-col items-center text-center mb-24 relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/5 border border-primary/20 backdrop-blur-xl mb-6 shadow-[0_0_20px_rgba(var(--primary-rgb),0.1)]"
                    >
                        <Cpu className="w-4 h-4 text-primary animate-pulse" />
                        <span className="text-sm font-serif italic text-primary tracking-wider">Education</span>
                    </motion.div>

                    <h2 className="font-display text-5xl md:text-8xl font-black text-white tracking-tighter mb-4 flex flex-col md:flex-row items-center gap-x-6">
                        <span className="opacity-20 font-mono text-3xl md:text-5xl">04.</span>
                        <DecryptedText
                            text="Academic Milestones"
                            animateOn="view"
                            speed={70}
                            className="text-white"
                        />
                    </h2>
                    <p className="max-w-xl text-gray-400 font-serif italic text-sm tracking-wide mt-4">
                        My journey through formal education and self-taught mastery.
                    </p>
                </div>

                <div className="relative group">
                    {/* The "Scanner" Line effect */}
                    <motion.div
                        animate={{ top: ["0%", "100%", "0%"] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent z-20 shadow-[0_0_15px_rgba(var(--primary-rgb),0.5)] opacity-50 pointer-events-none"
                    />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                        {/* Class 11 Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="relative flex flex-col p-8 md:p-12 rounded-[3rem] bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 hover:border-primary/40 transition-all duration-700 group/card overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover/card:opacity-20 transition-opacity">
                                <Terminal className="w-32 h-32 text-primary -rotate-12" />
                            </div>

                            <div className="space-y-8 relative z-10">
                                <div className="flex items-center justify-between">
                                    <span className="px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-serif italic font-bold">Completed</span>
                                    <Zap className="w-5 h-5 text-primary opacity-40" />
                                </div>

                                <div>
                                    <h3 className="text-4xl font-bold text-white mb-2">Grade 11</h3>
                                    <p className="text-primary font-mono text-sm tracking-wider uppercase">Viswa Niketan College</p>
                                </div>

                                <div className="p-6 rounded-2xl bg-black/40 border border-white/5 space-y-4">
                                    <p className="text-gray-400 font-light leading-relaxed italic">
                                        "Phase 1 complete. Survived the Kathmandu commute and actually learned that Management is just solving puzzles with people. System stability: 100%."
                                    </p>
                                    <div className="flex items-center gap-2 text-[10px] font-mono text-primary/60">
                                        <Activity className="w-3 h-3" />
                                        Foundation Year
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Class 12 Card (Current) */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="relative flex flex-col p-8 md:p-12 rounded-[3rem] bg-gradient-to-bl from-primary/10 via-white/[0.03] to-transparent border border-primary/20 hover:border-primary transition-all duration-700 group/card active shadow-[0_0_40px_-15px_rgba(var(--primary-rgb),0.3)] overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(var(--primary-rgb),0.1),transparent)] opacity-50" />

                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover/card:opacity-30 transition-opacity">
                                <Activity className="w-40 h-40 text-primary rotate-12" />
                            </div>

                            <div className="space-y-8 relative z-10">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <span className="relative flex h-3 w-3">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                                        </span>
                                        <span className="px-4 py-1.5 rounded-full bg-primary text-black text-xs font-serif italic font-black">Current Focus</span>
                                    </div>
                                    <Award className="w-6 h-6 text-primary animate-bounce shadow-primary" />
                                </div>

                                <div>
                                    <h3 className="text-5xl font-black text-white mb-2 tracking-tighter">Grade 12</h3>
                                    <p className="text-primary font-serif italic text-sm tracking-wider">Specializing in Management</p>
                                </div>

                                <div className="p-8 rounded-3xl bg-black/60 border border-primary/20 space-y-6 relative overflow-hidden group/mini">
                                    <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
                                    <p className="text-xl text-white font-medium leading-relaxed">
                                        Currently decrypting Grade 12. Management is exciting, but I’m managing my code better than my lunch break. 🚀
                                    </p>

                                    <div className="space-y-2">
                                        <div className="flex justify-between text-[10px] font-mono text-primary uppercase font-bold">
                                            <span>Cognitive Load</span>
                                            <span>92%</span>
                                        </div>
                                        <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: "92%" }}
                                                transition={{ duration: 2, ease: "easeOut" }}
                                                className="h-full bg-primary shadow-[0_0_10px_rgba(var(--primary-rgb),1)]"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3 py-2 px-3 bg-white/5 rounded-lg border border-white/10 w-fit">
                                        <GraduationCap className="w-4 h-4 text-primary" />
                                        <span className="text-[10px] font-mono text-gray-500 uppercase">Viswa Niketan College • Management</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Fun Footer Log */}

                </div>
            </div>
        </SectionWrapper >
    );
}
