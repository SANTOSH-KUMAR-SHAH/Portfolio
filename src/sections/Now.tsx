import { SectionWrapper } from '../components/SectionWrapper';
import { portfolioData } from '../data/portfolio';
import { BookOpen, Music, Gamepad2, Globe, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export function Now() {
    const { now } = portfolioData;

    return (
        <SectionWrapper id="now" className="relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] -z-10" />

            <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-6 relative">
                <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-1 h-12 bg-accent/50 rounded-full blur-sm" />
                <h2 className="font-display text-5xl md:text-6xl font-bold tracking-tighter">
                    <span className="text-gray-600 mr-4">05.</span>Status<span className="text-accent">_</span>Live
                </h2>
                <div className="flex items-center gap-3 px-6 py-2.5 rounded-2xl bg-accent/5 border border-accent/20 text-accent text-[11px] font-mono tracking-widest uppercase">
                    <div className="w-2 h-2 rounded-full bg-accent animate-ping" />
                    NODE_ACTIVE: NEPAL_EST_94
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Primary Focus Card */}
                <motion.div
                    whileHover={{ y: -5 }}
                    className="lg:col-span-2 relative group p-1 rounded-2xl bg-gradient-to-br from-accent/50 via-transparent to-primary/50"
                >
                    <div className="h-full bg-black/80 backdrop-blur-xl rounded-2xl p-10 flex flex-col justify-between border border-white/5 relative overflow-hidden">
                        {/* Decorative grid */}
                        <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:20px_20px] opacity-50" />

                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-8 text-accent">
                                <Zap className="w-8 h-8 fill-accent/20" />
                                <span className="font-mono text-sm tracking-[0.4em] uppercase opacity-70">Current Objective</span>
                            </div>
                            <h3 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
                                {now.currentFocus}
                            </h3>
                            <div className="flex items-center gap-4 text-gray-500 font-mono text-sm">
                                <Globe className="w-4 h-4" />
                                <span>UTC+5:45</span>
                                <span className="w-1 h-1 rounded-full bg-gray-700" />
                                <span>LAT_27.7N_LON_85.3E</span>
                            </div>
                        </div>

                        {/* Progress bar simulation */}
                        <div className="mt-12 h-1 w-full bg-white/5 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: '65%' }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                                className="h-full bg-gradient-to-r from-accent to-primary"
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Vertical Stats Column */}
                <div className="space-y-6">
                    {/* Media Cards */}
                    {[
                        { icon: BookOpen, label: 'Absorbing', value: now.reading, color: 'text-secondary', bg: 'bg-secondary/10' },
                        { icon: Gamepad2, label: 'Engaged', value: now.playing, color: 'text-primary', bg: 'bg-primary/10' },
                        { icon: Music, label: 'Streaming', value: now.listening, color: 'text-pink-500', bg: 'bg-pink-500/10' },
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ scale: 1.02, x: 10 }}
                            className="glass-card p-6 rounded-xl border border-white/5 flex items-center gap-6 group cursor-default"
                        >
                            <div className={`p-4 rounded-lg ${item.bg} ${item.color} group-hover:scale-110 transition-transform`}>
                                <item.icon className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] mb-1 font-mono">{item.label}</p>
                                <p className="font-bold text-gray-200">{item.value}</p>
                            </div>
                        </motion.div>
                    ))}

                    {/* Fun Footer Stats */}
                    <div className="pt-4 flex justify-between items-center opacity-30 font-mono text-[10px] uppercase tracking-widest px-2">
                        <span>Sync_v2.0.4</span>
                        <span>01/2026</span>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
