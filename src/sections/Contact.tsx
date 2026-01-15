import { SectionWrapper } from '../components/SectionWrapper';
import { portfolioData } from '../data/portfolio';
import { Mail, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { MagnetizeButton } from '@/components/ui/magnetize-button';
import { Vortex } from '@/components/ui/vortex';




export function Contact() {
    const [emailCopied, setEmailCopied] = useState(false);

    const [showEmail, setShowEmail] = useState(false);

    const copyEmail = () => {
        navigator.clipboard.writeText(portfolioData.personal.email);
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 2000);
    };

    return (
        <SectionWrapper id="contact" className="pb-20 relative overflow-hidden min-h-screen">
            {/* Vortex Background Layer */}
            <Vortex
                backgroundColor="transparent"
                baseHue={270}
                rangeY={300}
                particleCount={600}
                containerClassName="absolute inset-0 w-full h-full -z-10"
                className=""
            />

            {/* Content Layer */}
            <div className="relative z-10 px-4">

                <h2 className="font-display text-4xl font-bold mb-12 text-center">
                    <span className="text-accent">04.</span> Get In Touch
                </h2>

                <div className="max-w-2xl mx-auto text-center mb-12">
                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 backdrop-blur-sm bg-white/30 dark:bg-black/30 p-4 rounded-xl">
                        Whether you have a question, a project idea, or just want to say hi, my inbox is always open.
                    </p>

                    {!showEmail ? (
                        <MagnetizeButton
                            onClick={() => setShowEmail(true)}
                            className="bg-white/50 dark:bg-black/50 border-primary text-primary hover:text-white"
                        >
                            Say Hello
                        </MagnetizeButton>
                    ) : (
                        <div className="flex items-center justify-center gap-4 animate-fade-in">
                            <div className="flex items-center gap-3 glass p-4 rounded-lg">
                                <Mail className="w-5 h-5 text-gray-400" />
                                <span className="font-mono text-sm md:text-base">{portfolioData.personal.email}</span>
                            </div>
                            <button
                                onClick={copyEmail}
                                className="p-4 glass rounded-lg hover:bg-white/20 transition-colors"
                                title="Copy to clipboard"
                            >
                                {emailCopied ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5 text-gray-400" />}
                            </button>
                        </div>
                    )}
                </div>

                <form
                    action="https://formspree.io/f/YOUR_FORM_ID"
                    method="POST"
                    className="max-w-lg mx-auto space-y-6 glass-card p-8 rounded-2xl relative"
                >
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium ml-1">Name</label>
                        <input
                            type="text"
                            name="name"
                            required
                            className="w-full bg-white/50 dark:bg-black/50 border border-gray-300 dark:border-gray-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                            placeholder="John Doe"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium ml-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            required
                            className="w-full bg-white/50 dark:bg-black/50 border border-gray-300 dark:border-gray-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                            placeholder="john@example.com"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium ml-1">Message</label>
                        <textarea
                            name="message"
                            rows={4}
                            required
                            className="w-full bg-white/50 dark:bg-black/50 border border-gray-300 dark:border-gray-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                            placeholder="Let's build something awesome..."
                        />
                    </div>

                    <div className="flex justify-center">
                        <MagnetizeButton
                            type="submit"
                            className="w-full bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-bold border-none"
                            particleCount={20}
                        >
                            Send Message
                        </MagnetizeButton>
                    </div>
                </form>
            </div>
        </SectionWrapper>
    );
}
