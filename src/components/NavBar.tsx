import GooeyNav from './ui/gooey-nav';

export function NavBar() {
    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Work', href: '#work' },
        { name: 'Skills', href: '#skills' },
        { name: 'Education', href: '#education' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className="fixed top-0 w-full z-50 px-6 py-4 bg-black/40 backdrop-blur-sm border-b border-white/5">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <a href="#" className="font-display font-bold text-2xl tracking-tighter hover:text-primary transition-colors text-white">
                    S<span className="text-primary">.</span>
                </a>

                <div className="hidden md:block">
                    <GooeyNav items={navLinks} />
                </div>
            </div>
        </nav>
    );
}
