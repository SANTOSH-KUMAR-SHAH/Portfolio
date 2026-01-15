import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolio';
import { ExternalLink, Github } from 'lucide-react';

export function MobileWork() {
    const { featuredProject } = portfolioData;

    return (
        <section className="px-6 py-10 pb-32">
            <div className="flex items-end justify-between mb-8">
                <h2 className="text-3xl font-display font-bold">Work.</h2>
                <span className="text-xs font-mono text-primary/80 bg-primary/10 px-2 py-1 rounded">FEATURED</span>
            </div>

            <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="w-full bg-light/5 border border-light/10 rounded-3xl overflow-hidden"
            >
                {/* Mockup / Image Area */}
                <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative group">
                    <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
                    <span className="text-4xl">👨‍💻</span>
                    {/* If there was a real image, it would go here. Using abstract vibe for now. */}
                </div>

                <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{featuredProject.title}</h3>
                    <p className="text-light/60 text-sm leading-relaxed mb-6">
                        {featuredProject.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                        {featuredProject.tech.map((t, i) => (
                            <span key={i} className="text-[10px] uppercase tracking-wider font-bold text-light/40 border border-light/10 px-2 py-1 rounded">
                                {t}
                            </span>
                        ))}
                    </div>

                    <div className="flex gap-4">
                        <a
                            href={featuredProject.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 bg-light text-dark font-bold text-sm py-3 rounded-xl flex items-center justify-center gap-2 active:scale-95 transition-transform"
                        >
                            View Live <ExternalLink size={14} />
                        </a>
                        <a
                            href={featuredProject.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 bg-white/10 rounded-xl flex items-center justify-center active:scale-95 transition-transform"
                        >
                            <Github size={18} />
                        </a>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
