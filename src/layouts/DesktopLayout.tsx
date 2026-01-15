import { motion } from 'framer-motion';
import { NavBar } from '../components/NavBar';
import { SocialDock } from '../components/SocialDock';
import { Footer } from '../components/Footer';
import { Hero } from '../sections/Hero';
import { About } from '../sections/About';
import { FeaturedWork } from '../sections/FeaturedWork';
import { Skills } from '../sections/Skills';
import { Contact } from '../sections/Contact';
import { Education } from '../sections/Education';
import { Now } from '../sections/Now';
import { Poetry } from '../sections/Poetry';

export function DesktopLayout() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="min-h-screen w-full overflow-x-hidden selection:bg-primary/30 selection:text-white"
        >
            <NavBar />
            <SocialDock />

            <main className="flex flex-col items-center w-full">
                <Hero />
                <About />
                <FeaturedWork />
                <Skills />
                <Education />
                <Now />
                <Poetry />
                <Contact />
            </main>

            <Footer />
        </motion.div>
    );
}
