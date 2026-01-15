

export function Footer() {
    return (
        <footer className="py-8 text-center text-sm text-gray-500 dark:text-gray-400 font-mono">
            <div className="mb-2">
                Designed & Built by <span className="text-primary">Santosh Kumar Shah</span>
            </div>
            <div className="text-xs opacity-75">
                &copy; {new Date().getFullYear()} • Local Time: {new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Kathmandu' })} (Nepal)
            </div>
        </footer>
    );
}
