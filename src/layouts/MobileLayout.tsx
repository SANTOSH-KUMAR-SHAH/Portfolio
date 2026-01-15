import { motion } from 'framer-motion';
import { MobileHero } from '../sections/mobile/MobileHero';
import { MobileMenu } from '../sections/mobile/MobileMenu';
import { MobileAbout } from '../sections/mobile/MobileAbout';
import { MobileWork } from '../sections/mobile/MobileWork';
import { MobileContact } from '../sections/mobile/MobileContact';

export function MobileLayout() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen w-full bg-dark text-light overflow-x-hidden pb-32"
        >
            {/* Header simplified */}
            <header className="fixed top-0 left-0 right-0 z-40 p-6 flex justify-between items-center mix-blend-difference pointer-events-none">
                <span className="font-display font-bold text-xl text-primary">S.</span>
            </header>

            <main>
                <div id="home">
                    <MobileHero />
                </div>

                <div id="about">
                    <MobileAbout />
                </div>

                <div id="work">
                    <MobileWork />
                </div>

                <div id="contact">
                    <MobileContact />
                </div>
            </main>

            <MobileMenu />
        </motion.div>
    );
}
