import { portfolioData } from '../../data/portfolio';
import { Code2, Cpu, Globe } from 'lucide-react';

export function MobileAbout() {
    return (
        <section className="py-10 flex flex-col gap-6">
            <div className="px-6">
                <h2 className="text-3xl font-display font-bold">The Story.</h2>
                <p className="text-light/50 text-sm mt-1">Swipe to explore →</p>
            </div>

            {/* Horizontal Scroll Snap Container */}
            <div className="flex overflow-x-auto snap-x snap-mandatory px-6 gap-4 pb-8 no-scrollbar scroll-smooth">
                {/* Card 1: Intro */}
                <div className="snap-center shrink-0 w-[85vw] h-[400px] bg-white/5 border border-white/10 rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-32 bg-primary/20 blur-[80px] rounded-full pointer-events-none" />

                    <Cpu className="text-primary mb-4" size={32} />

                    <div>
                        <h3 className="text-2xl font-bold mb-2">Frontend Engineer</h3>
                        <p className="text-light/70 leading-relaxed">
                            {portfolioData.personal.tagline}
                        </p>
                    </div>

                    <div className="text-sm font-mono opacity-50">01 / 03</div>
                </div>

                {/* Card 2: Skills */}
                <div className="snap-center shrink-0 w-[85vw] h-[400px] bg-white/5 border border-white/10 rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute bottom-0 left-0 p-32 bg-secondary/20 blur-[80px] rounded-full pointer-events-none" />

                    <Code2 className="text-secondary mb-4" size={32} />

                    <div>
                        <h3 className="text-2xl font-bold mb-4">Stack</h3>
                        <div className="flex flex-wrap gap-2">
                            {portfolioData.skills.core.map((skill, i) => (
                                <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="text-sm font-mono opacity-50">02 / 03</div>
                </div>

                {/* Card 3: Philosophy */}
                <div className="snap-center shrink-0 w-[85vw] h-[400px] bg-gradient-to-br from-primary/20 to-secondary/20 border border-white/10 rounded-3xl p-6 flex flex-col justify-center relative overflow-hidden text-center">
                    <Globe className="mx-auto mb-6 text-white" size={32} />

                    <p className="text-lg font-serif italic text-white/90">
                        "{portfolioData.personal.mantra}"
                    </p>
                    <p className="mt-4 text-xs tracking-widest uppercase opacity-70">Philosophy</p>

                    <div className="absolute bottom-6 right-6 text-sm font-mono opacity-50">03 / 03</div>
                </div>
            </div>
        </section>
    );
}
