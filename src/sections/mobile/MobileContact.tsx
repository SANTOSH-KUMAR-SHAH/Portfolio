import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';

export function MobileContact() {
    return (
        <section className="px-6 py-20 pb-40 flex flex-col items-center text-center">
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                className="w-full max-w-sm"
            >
                <div className="w-20 h-20 bg-gradient-to-tr from-primary to-accent rounded-full mx-auto mb-8 flex items-center justify-center shadow-lg shadow-primary/20">
                    <Mail className="text-white" size={32} />
                </div>

                <h2 className="text-4xl font-display font-bold mb-4">Let's Talk.</h2>
                <p className="text-light/60 mb-12">
                    Have a project in mind? <br />
                    I'm currently open for new opportunities.
                </p>

                <a
                    href={`mailto:${portfolioData.personal.email}`}
                    className="group relative w-full bg-white text-black font-bold text-lg h-16 rounded-full flex items-center justify-between px-2 overflow-hidden"
                >
                    <span className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center transition-transform group-active:scale-90">
                        <Send size={20} />
                    </span>
                    <span className="flex-1 text-center pr-12">Send Message</span>
                </a>

                <div className="mt-12 flex justify-center gap-6">
                    {portfolioData.social.map((social) => {
                        const Icon = social.icon;
                        return (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center text-light/50 hover:text-white hover:bg-white/10 transition-colors"
                            >
                                <Icon size={20} />
                            </a>
                        );
                    })}
                </div>
            </motion.div>
        </section>
    );
}
