import { portfolioData } from '../data/portfolio';

export function SocialDock() {
    return (
        <div className="fixed left-6 bottom-0 hidden md:flex flex-col gap-6 items-center z-50">
            <div className="flex flex-col gap-4 mb-4">
                {portfolioData.social.map((item) => (
                    <a
                        key={item.name}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 glass rounded-full hover:-translate-y-1 hover:bg-primary/20 transition-all duration-300 group"
                        aria-label={item.name}
                    >
                        <item.icon className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-primary dark:group-hover:text-primary transition-colors" />
                    </a>
                ))}
            </div>
            <div className="w-[1px] h-24 bg-gray-300 dark:bg-gray-700"></div>
        </div>
    );
}
