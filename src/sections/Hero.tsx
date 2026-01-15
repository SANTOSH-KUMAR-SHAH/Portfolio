import { portfolioData } from '../data/portfolio';
import { ChevronDown } from 'lucide-react';
import { SparklesCore } from '@/components/ui/sparkles';
import { MagnetizeButton } from '@/components/ui/magnetize-button';
import SplashCursor from '@/components/ui/splash-cursor';
import TextType from '@/components/ui/text-type';

const heroTaglines = [
    "I turn coffee into code... and bugs into 'features' ☕🐛",
    "Building the future, one Stack Overflow answer at a time 🚀",
    "I speak fluent JavaScript and sarcasm 💬",
    "Making pixels dance since dial-up was cool 💃",
    "Professional overthinker, amateur bug creator 🧠",
    "Ctrl+Z is my spirit animal 🦄"
];

export function Hero() {

    return (
        <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center py-20">
            {/* Background Gradient/Blob fallback if desired, or just clean background */}
            <div className="absolute inset-0 w-full h-full overflow-hidden -z-10">
                <SplashCursor />
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[100px] animate-blob" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-secondary/20 blur-[100px] animate-blob animation-delay-2000" />
                <div className="absolute top-[40%] left-[40%] w-[40%] h-[40%] rounded-full bg-accent/20 blur-[100px] animate-blob animation-delay-4000" />
            </div>

            <div className="text-center px-4 max-w-4xl mx-auto relative z-10">
                <div className="flex justify-center mb-4">
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm hover:border-primary/50 transition-colors duration-300">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        <span className="font-medium tracking-wide text-sm md:text-base bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                            Hi, I am
                        </span>
                    </div>
                </div>

                <div className="relative flex flex-col items-center justify-center animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
                    <h1 className="font-display text-5xl md:text-8xl font-bold text-center relative z-20">
                        {portfolioData.personal.name}
                    </h1>
                    <div className="w-full max-w-full h-24 md:h-40 relative">
                        {/* Gradients */}
                        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />



                        {/* Sparkles */}
                        <div className="absolute inset-0 w-full h-full [mask-image:radial-gradient(350px_200px_at_top,white,transparent)]">
                            <SparklesCore
                                background="transparent"
                                minSize={0.4}
                                maxSize={1}
                                particleDensity={400}
                                className="w-full h-full"
                                particleColor="#FFFFFF"
                            />
                        </div>

                    </div>
                </div>

                {/* Dynamic Rotating Taglines */}
                <div className="mb-12 animate-fade-in opacity-0" style={{ animationDelay: '0.5s' }}>
                    <TextType
                        text={heroTaglines}
                        as="h2"
                        className="text-xl md:text-2xl font-medium text-gray-400 min-h-[3rem]"
                        typingSpeed={40}
                        deletingSpeed={20}
                        pauseDuration={3000}
                        cursorCharacter="_"
                        cursorClassName="text-primary"
                        loop={true}
                    />
                </div>



                <div className="flex justify-center animate-fade-in opacity-0" style={{ animationDelay: '2s' }}>

                    <MagnetizeButton
                        onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
                        particleCount={16}
                        className="scale-110"
                    >
                        Explore My Work
                    </MagnetizeButton>
                </div>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer z-50">
                <a href="#about" aria-label="Scroll down">
                    <ChevronDown className="w-8 h-8 text-gray-400 hover:text-primary transition-colors" />
                </a>
            </div>
        </section>
    );
}
