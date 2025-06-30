import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function ComputerModel() {
  const modelRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/commodore_64__computer_full_pack.glb");

  useFrame(() => {
    if (modelRef.current) {
      // Optional: Add any animations here if needed
    }
  });

  return (
    <group ref={modelRef}>
      <primitive
        object={scene}
        scale={[0.5, 0.5, 0.5]} // Adjust scale as needed
        position={[0, -1, 0]} // Adjust position as needed4ba
      />
    </group>
  );
}

export default ComputerModel;
