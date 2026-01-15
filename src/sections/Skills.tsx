import { SectionWrapper } from '../components/SectionWrapper';
import { portfolioData } from '../data/portfolio';
import { IconCloud } from '@/components/ui/interactive-icon-cloud';
import { InteractiveGradient } from '@/components/ui/interactive-gradient';

const slugs = [
    "typescript",
    "javascript",
    "react",
    "html5",
    "css3",
    "nodedotjs",
    "nextdotjs",
    "git",
    "github",
    "visualstudiocode",
    "figma",
    "tailwindcss",
    "vite",
    "framer",
    "shadcnui",
    "vercel",
    "linux",
    "postman",
    "npm",
    "mongodb"
];

export function Skills() {
    return (
        <SectionWrapper id="skills">
            <h2 className="font-display text-4xl font-bold mb-16 flex items-center gap-4">
                <span className="text-secondary">03.</span> Tech Arsenal
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Skill Lists */}
                <div className="space-y-8 order-2 lg:order-1">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Core */}
                        <InteractiveGradient
                            color="#3b82f6"
                            glowColor="rgba(59, 130, 246, 0.2)"
                            className="bg-transparent border-none"
                            borderRadius="1.5rem"
                        >
                            <div className="w-full text-left p-6">
                                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                    Core Stack
                                </h3>
                                <ul className="space-y-2">
                                    {portfolioData.skills.core.map(skill => (
                                        <li key={skill} className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                                            <span className="text-primary font-bold">▹</span>
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </InteractiveGradient>

                        {/* Comfortable */}
                        <InteractiveGradient
                            color="#d946ef"
                            glowColor="rgba(217, 70, 239, 0.2)"
                            className="bg-transparent border-none"
                            borderRadius="1.5rem"
                        >
                            <div className="w-full text-left p-6">
                                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-secondary" />
                                    Comfortable
                                </h3>
                                <ul className="space-y-2">
                                    {portfolioData.skills.comfortable.map(skill => (
                                        <li key={skill} className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                                            <span className="text-secondary font-bold">▹</span>
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </InteractiveGradient>

                        {/* Exploring */}
                        <InteractiveGradient
                            color="#06b6d4"
                            glowColor="rgba(6, 182, 212, 0.2)"
                            className="bg-transparent border-none md:col-span-2"
                            borderRadius="1.5rem"
                        >
                            <div className="w-full text-left p-6">
                                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-accent" />
                                    Future Ops
                                </h3>
                                <div className="flex flex-wrap gap-x-8 gap-y-2">
                                    {portfolioData.skills.exploring.map(skill => (
                                        <li key={skill} className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300 list-none">
                                            <span className="text-accent font-bold">▹</span>
                                            {skill}
                                        </li>
                                    ))}
                                </div>
                            </div>
                        </InteractiveGradient>
                    </div>
                </div>


                {/* Icon Cloud */}
                <div className="relative flex size-full items-center justify-center overflow-hidden order-1 lg:order-2">
                    <div className="absolute inset-0 bg-secondary/5 rounded-full blur-3xl -z-10" />
                    <IconCloud iconSlugs={slugs} />
                </div>
            </div>
        </SectionWrapper>
    );
}
