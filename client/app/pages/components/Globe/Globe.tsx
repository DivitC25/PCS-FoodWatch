// @ts-nocheck

import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import styles from "./Globe.module.css";

const Sphere = (className: string) => {
  const [screenWidth, setScreenWidth] = useState(window.outerWidth);

  const resizeScreen = () => {
    setScreenWidth(window.outerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeScreen);

    return () => {
      window.removeEventListener("resize", resizeScreen);
    };
  }, []);

  const base = new THREE.TextureLoader().load("/world-map.png");
  const ref = useRef();
  useFrame(() => (ref.current.rotation.y = ref.current.rotation.y += 0.007));
  return (
    <mesh visible castShadow ref={ref} className={className}>
      <directionalLight intensity={1} />
      <sphereGeometry attach="geometry" args={[3, 30, 30]} />
      <meshBasicMaterial map={base} color="white" />
    </mesh>
  );
};
export default function Globe() {
  return (
    <Canvas className={styles.canvas}>
      <ambientLight />
      <Sphere className={styles.sphere} />
    </Canvas>
  );
}
