'use client';

import { Canvas, extend, useFrame, useThree } from '@react-three/fiber';
import { useAspect, useTexture } from '@react-three/drei';
import { useMemo, useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
import { Mesh } from 'three';

const TEXTUREMAP = { src: 'https://i.postimg.cc/XYwvXN8D/img-4.png' };
const DEPTHMAP = { src: 'https://i.postimg.cc/2SHKQh2q/raw-4.webp' };

extend(THREE as any);

const WIDTH = 300;
const HEIGHT = 300;

const Scene = () => {
  const [rawMap, depthMap] = useTexture([TEXTUREMAP.src, DEPTHMAP.src]);
  const meshRef = useRef<Mesh>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (rawMap && depthMap) {
      setVisible(true);
    }
  }, [rawMap, depthMap]);

  const material = useMemo(() => {
    if (!rawMap || !depthMap) return null;
    
    return new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uPointer: { value: new THREE.Vector2(0, 0) },
        uProgress: { value: 0 },
        uTexture: { value: rawMap },
        uDepthMap: { value: depthMap },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform vec2 uPointer;
        uniform float uProgress;
        uniform sampler2D uTexture;
        uniform sampler2D uDepthMap;
        varying vec2 vUv;
        
        float random(vec2 st) {
          return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
        }
        
        float noise(vec2 st) {
          vec2 i = floor(st);
          vec2 f = fract(st);
          float a = random(i);
          float b = random(i + vec2(1.0, 0.0));
          float c = random(i + vec2(0.0, 1.0));
          float d = random(i + vec2(1.0, 1.0));
          vec2 u = f * f * (3.0 - 2.0 * f);
          return mix(a, b, u.x) + (c - a)* u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
        }
        
        void main() {
          vec2 uv = vUv;
          float depth = texture2D(uDepthMap, uv).r;
          
          // Parallax effect
          vec2 offset = uPointer * depth * 0.01;
          vec2 parallaxUv = uv + offset;
          
          // Get base texture
          vec4 texColor = texture2D(uTexture, parallaxUv);
          
          // Scanning effect
          float scanLine = sin(uv.y * 100.0 + uTime * 5.0) * 0.04;
          float scan = smoothstep(0.0, 0.1, abs(uv.y - uProgress));
          vec3 scanColor = vec3(1.0, 0.2, 0.2) * (1.0 - scan) * 0.3;
          
          // Grid effect
          float aspect = 300.0 / 300.0;
          vec2 gridUv = vec2(uv.x * aspect, uv.y);
          vec2 tiling = vec2(60.0);
          vec2 tiledUv = mod(gridUv * tiling, 2.0) - 1.0;
          float gridNoise = noise(gridUv * tiling * 0.5);
          float dist = length(tiledUv);
          float dot = smoothstep(0.5, 0.49, dist) * gridNoise;
          
          // Flow effect based on depth and progress
          float flow = 1.0 - smoothstep(0.0, 0.02, abs(depth - uProgress));
          vec3 flowColor = vec3(10.0, 0.0, 0.0) * dot * flow * 0.1;
          
          // Combine effects
          vec3 finalColor = texColor.rgb + scanColor + flowColor + vec3(scanLine);
          
          // Add some atmospheric glow
          float glow = 1.0 - length(uv - 0.5) * 0.8;
          finalColor += vec3(0.1, 0.0, 0.2) * glow * 0.3;
          
          gl_FragColor = vec4(finalColor, mix(0.0, 1.0, visible ? 1.0 : 0.0));
        }
      `,
      transparent: true,
    });
  }, [rawMap, depthMap, visible]);

  const [w, h] = useAspect(WIDTH, HEIGHT);

  useFrame(({ clock, pointer }) => {
    if (material && material.uniforms) {
      material.uniforms.uTime.value = clock.getElapsedTime();
      material.uniforms.uProgress.value = (Math.sin(clock.getElapsedTime() * 0.5) * 0.5 + 0.5);
      material.uniforms.uPointer.value = pointer;
    }
    
    if (meshRef.current && material) {
      material.opacity = THREE.MathUtils.lerp(
        material.opacity || 0,
        visible ? 0.8 : 0,
        0.05
      );
    }
  });

  if (!material) return null;

  const scaleFactor = 0.6;
  return (
    <mesh ref={meshRef} scale={[w * scaleFactor, h * scaleFactor, 1]} material={material}>
      <planeGeometry />
    </mesh>
  );
};

interface FuturisticHeroProps {
  children?: React.ReactNode;
  className?: string;
}

export const FuturisticHero: React.FC<FuturisticHeroProps> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <div className={`relative w-full min-h-screen overflow-hidden ${className}`}>
      {/* Animated Canvas Background */}
      <div className="absolute inset-0 z-0">
        <Canvas
          camera={{ position: [0, 0, 1] }}
          gl={{ 
            antialias: true, 
            alpha: true,
            powerPreference: "high-performance" 
          }}
        >
          <Scene />
        </Canvas>
      </div>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 z-10 bg-black/40" />
      
      {/* Content overlay */}
      <div className="relative z-20 w-full">
        {children}
      </div>
      
      {/* Additional atmospheric effects */}
      <div className="absolute inset-0 z-15 pointer-events-none">
        {/* Corner gradients */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-radial from-red-500/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-radial from-blue-500/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-transparent via-transparent to-black/30" />
      </div>
    </div>
  );
};

export default FuturisticHero;
