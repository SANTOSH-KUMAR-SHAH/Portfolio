import { SectionWrapper } from '../components/SectionWrapper';
import { motion } from 'framer-motion';
import { SparklesCore } from '@/components/ui/sparkles';
import { FallBeam } from '@/components/ui/fall-beam';
import { Quote } from 'lucide-react';

export function Poetry() {
    const lines = [
        "दैनिक शोषणमा यता सबैले गीत गाइन्छ,",
        "लाचारीको बेला सबैले झुटो कसम खाइन्छ।",
        "सानो स्वरमा भएपनि एउटा क्रान्ति धड्किन्छ,",
        "त्यसैबेला दुःख र पीडाबीच एउटा कवि\u00A0जन्मिन्छ।"
    ];

    return (
        <SectionWrapper id="poetry" className="relative min-h-[60vh] flex items-center justify-center overflow-hidden py-32">
            {/* Deep Atmospheric Background */}
            <div className="absolute inset-0 bg-black">
                <div className="absolute inset-0 bg-gradient-to-tr from-red-950/20 via-black to-indigo-950/20" />

                {/* Starfall Effect */}
                <FallBeam color="#cbd5e1" beamCount={15} className="h-[30vh] opacity-20" />

                {/* Subtle Embers / Dust */}
                <SparklesCore
                    id="poetry-sparkles"
                    background="transparent"
                    minSize={0.4}
                    maxSize={1.2}
                    particleDensity={30}
                    className="w-full h-full opacity-60"
                    particleColor="#ffffff"
                    speed={2}
                />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="mb-12 inline-flex"
                >
                    <Quote className="w-8 h-8 text-primary/30 rotate-180" />
                </motion.div>

                <div className="space-y-6 md:space-y-10">
                    {lines.map((line, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, filter: 'blur(10px)' }}
                            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                            transition={{
                                duration: 1.2,
                                delay: i * 0.3,
                                ease: [0.2, 0.65, 0.3, 0.9]
                            }}
                            className="relative"
                        >
                            <h3 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-200 leading-normal tracking-wide hover:text-white transition-colors duration-500 cursor-default px-4 drop-shadow-lg md:whitespace-nowrap">
                                {line}
                            </h3>
                            {/* Subtle line glow on hover */}
                            <div className="absolute inset-0 bg-primary/20 blur-2xl opacity-0 hover:opacity-100 transition-opacity duration-700 -z-10" />
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="mt-16 flex flex-col items-center gap-4"
                >
                    <div className="h-16 w-[1px] bg-gradient-to-b from-primary/50 to-transparent" />
                    <span className="font-serif italic text-primary/60 text-sm">
                        The Birth of a Poet within Me
                    </span>
                </motion.div>
            </div>

            {/* Ink spill effect (CSS radial gradient fallback or custom) */}
            <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-[-20%] right-[-10%] w-[40%] h-[40%] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

        </SectionWrapper>
    );
}
