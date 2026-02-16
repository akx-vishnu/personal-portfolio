import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, ContactShadows, Environment } from '@react-three/drei';
import * as THREE from 'three';

const Laptop = () => {
    const group = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        // Hover animation
        group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, Math.cos(t / 2) / 10 + 0.25, 0.1);
        group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, Math.sin(t / 4) / 10, 0.1);
        group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, Math.sin(t / 4) / 20, 0.1);
        group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, (-5 + Math.sin(t)) / 5, 0.1);
    });

    return (
        <group ref={group} dispose={null} rotation={[0.4, 0, 0]}>
            <Float floatIntensity={2} rotationIntensity={0.5}>
                {/* Base */}
                <mesh position={[0, -0.6, 0]}>
                    <boxGeometry args={[3.2, 0.2, 2.2]} />
                    <meshStandardMaterial color="#2d2d2d" roughness={0.3} metalness={0.8} />
                </mesh>

                {/* Screen Frame */}
                <group position={[0, 0.5, -1.05]} rotation={[-0.25, 0, 0]}>
                    <mesh>
                        <boxGeometry args={[3.2, 2.2, 0.1]} />
                        <meshStandardMaterial color="#2d2d2d" roughness={0.3} metalness={0.8} />
                    </mesh>

                    {/* Screen Display - Glowing Screen */}
                    <mesh position={[0, 0, 0.06]}>
                        <planeGeometry args={[3, 2]} />
                        <meshStandardMaterial color="black" emissive="#00f3ff" emissiveIntensity={0.5} roughness={0.2} />
                    </mesh>

                    {/* Microsoft Logo on Back */}
                    <group position={[0, 0, -0.06]} rotation={[0, Math.PI, 0]}>
                        <mesh position={[-0.11, 0.11, 0]}>
                            <planeGeometry args={[0.2, 0.2]} />
                            <meshBasicMaterial color="#f25022" />
                        </mesh>
                        <mesh position={[0.11, 0.11, 0]}>
                            <planeGeometry args={[0.2, 0.2]} />
                            <meshBasicMaterial color="#7fba00" />
                        </mesh>
                        <mesh position={[-0.11, -0.11, 0]}>
                            <planeGeometry args={[0.2, 0.2]} />
                            <meshBasicMaterial color="#00a4ef" />
                        </mesh>
                        <mesh position={[0.11, -0.11, 0]}>
                            <planeGeometry args={[0.2, 0.2]} />
                            <meshBasicMaterial color="#ffb900" />
                        </mesh>
                    </group>
                </group>

                {/* Keyboard Area - Simplified as a dark patch */}
                <mesh position={[0, -0.49, 0.3]} rotation={[-Math.PI / 2, 0, 0]}>
                    <planeGeometry args={[2.8, 1.2]} />
                    <meshStandardMaterial color="#1a1a1a" roughness={0.8} />
                </mesh>

                {/* Touchpad */}
                <mesh position={[0, -0.49, 0.8]} rotation={[-Math.PI / 2, 0, 0]}>
                    <planeGeometry args={[1, 0.6]} />
                    <meshStandardMaterial color="#222" roughness={0.5} />
                </mesh>
            </Float>
        </group>
    );
};

const TechCanvas = () => {
    return (
        <div className="w-full h-[400px] md:h-full cursor-grab active:cursor-grabbing">
            <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1.5} />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#bc13fe" />

                <Suspense fallback={null}>
                    <Laptop />
                    <Environment preset="city" />
                    <ContactShadows position={[0, -2, 0]} opacity={0.5} scale={10} blur={2.5} far={4} />
                    <OrbitControls enableZoom={false} enablePan={false} />
                </Suspense>
            </Canvas>
        </div>
    );
};

export default TechCanvas;
