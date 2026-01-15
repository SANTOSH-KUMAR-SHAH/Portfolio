import { useEffect } from 'react';

export function useTheme() {
    useEffect(() => {
        // Always set dark mode
        const root = window.document.documentElement;
        root.classList.add('dark');
    }, []);

    return { theme: 'dark' as const };
}
