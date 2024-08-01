import { Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { Stars } from './Stars';
import { OrbitControls } from '@react-three/drei';
import FinancialShapes from './shapes/FinancialShapes';

const CanvasContainer = () => {
    const location = useLocation();

    // Only render the canvas if not on the homepage
    if (location.pathname === '/') {
        return null;
    }

    return (
        <div className="canvas-container">
        <Canvas className="canvas-background">
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} />
            <Suspense fallback={null}>
                <Stars />
                <FinancialShapes />
                <OrbitControls />
            </Suspense>
        </Canvas>
        </div>
    );
};

export default CanvasContainer;
