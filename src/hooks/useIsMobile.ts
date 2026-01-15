import { useState, useEffect } from 'react';

export function useIsMobile() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            // Check for mobile width (standard tablet/mobile breakpoint)
            // and capable pointer type to distinguish touch devices
            const isMobileWidth = window.matchMedia('(max-width: 768px)').matches;
            setIsMobile(isMobileWidth);
        };

        // Initial check
        checkMobile();

        // Listen for resize
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return isMobile;
}
