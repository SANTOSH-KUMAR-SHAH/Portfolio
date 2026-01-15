import { DesktopLayout } from './layouts/DesktopLayout';
import { MobileLayout } from './layouts/MobileLayout';
import { useIsMobile } from './hooks/useIsMobile';

function App() {
    const isMobile = useIsMobile();

    return isMobile ? <MobileLayout /> : <DesktopLayout />;
}

export default App;
