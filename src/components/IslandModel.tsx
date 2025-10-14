"use client";

import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function IslandModel(props: React.JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>(null!);
  const [hovered, setHovered] = useState(false);
  const { scene } = useGLTF("/models/island.glb"); // <— drop your model here

  // gentle bob + rotate, a bit more when hovered
  useFrame((_, dt) => {
    if (!group.current) return;
    group.current.rotation.y += dt * (hovered ? 0.6 : 0.2);
    const t = performance.now() / 1000;
    group.current.position.y = Math.sin(t) * 0.05;
  });

  return (
    <group
      ref={group}
      {...props}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      dispose={null}
      position={[0, -0.5, 0]}
      castShadow
      receiveShadow
    >
      <primitive object={scene} />
    </group>
  );
}

// optional: preloading for faster first render
useGLTF.preload("/public/models/island.glb");
