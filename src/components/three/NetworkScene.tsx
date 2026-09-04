import { Canvas, useFrame } from "@react-three/fiber";
import { useReducedMotion } from "framer-motion";
import { useMemo, useRef, type ReactNode } from "react";
import * as THREE from "three";

const RADIUS = 2.15;
const NODE_COUNT = 160;

function fibonacciSphere(count: number, radius: number): THREE.Vector3[] {
  const points: THREE.Vector3[] = [];
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2;
    const r = Math.sqrt(Math.max(0, 1 - y * y));
    const theta = golden * i;
    points.push(
      new THREE.Vector3(
        Math.cos(theta) * r,
        y,
        Math.sin(theta) * r
      ).multiplyScalar(radius)
    );
  }
  return points;
}

/* ------------------------------------------------------------------ */
/*  Holographic primitive — faint solid faces + glowing edges          */
/* ------------------------------------------------------------------ */

interface HoloProps {
  geometry: THREE.BufferGeometry;
  color: string;
  faceOpacity?: number;
  edgeOpacity?: number;
}

function Holo({ geometry, color, faceOpacity = 0.06, edgeOpacity = 0.6 }: HoloProps) {
  const edges = useMemo(() => new THREE.EdgesGeometry(geometry), [geometry]);
  return (
    <group>
      <mesh geometry={geometry}>
        <meshBasicMaterial
          color={color}
          transparent
          opacity={faceOpacity}
          depthWrite={false}
        />
      </mesh>
      <lineSegments geometry={edges}>
        <lineBasicMaterial
          color={color}
          transparent
          opacity={edgeOpacity}
          toneMapped={false}
        />
      </lineSegments>
    </group>
  );
}

/* ------------------------------------------------------------------ */
/*  Banking 3D models (procedural — no external assets)                */
/* ------------------------------------------------------------------ */

/** A classical columned bank building. */
function BankBuilding({ color }: { color: string }) {
  const geo = useMemo(
    () => ({
      base: new THREE.BoxGeometry(2.1, 0.22, 1),
      plinth: new THREE.BoxGeometry(1.8, 0.16, 0.84),
      body: new THREE.BoxGeometry(1.42, 0.9, 0.58),
      column: new THREE.CylinderGeometry(0.082, 0.082, 0.9, 12),
      architrave: new THREE.BoxGeometry(1.98, 0.2, 0.96),
      roof: new THREE.BoxGeometry(2.2, 0.12, 1.06),
    }),
    []
  );
  const columnX = [-0.74, -0.37, 0, 0.37, 0.74];

  return (
    <group>
      <group position={[0, -0.74, 0]}>
        <Holo geometry={geo.base} color={color} />
      </group>
      <group position={[0, -0.6, 0]}>
        <Holo geometry={geo.plinth} color={color} />
      </group>
      <group position={[0, -0.06, -0.04]}>
        <Holo geometry={geo.body} color={color} faceOpacity={0.05} />
      </group>
      {columnX.map((x, i) => (
        <group key={i} position={[x, -0.07, 0.31]}>
          <Holo geometry={geo.column} color={color} />
        </group>
      ))}
      <group position={[0, 0.49, 0]}>
        <Holo geometry={geo.architrave} color={color} />
      </group>
      <group position={[0, 0.62, 0]}>
        <Holo geometry={geo.roof} color={color} />
      </group>
    </group>
  );
}

/** A stack of coins. */
function CoinStack({ color }: { color: string }) {
  const coin = useMemo(
    () => new THREE.CylinderGeometry(0.62, 0.62, 0.17, 30),
    []
  );
  const ys = [-0.34, -0.13, 0.08, 0.29];

  return (
    <group>
      {ys.map((y, i) => (
        <group key={i} position={[0, y, 0]} rotation={[0, i * 0.5, 0]}>
          <Holo
            geometry={coin}
            color={color}
            faceOpacity={0.1}
            edgeOpacity={0.78}
          />
        </group>
      ))}
    </group>
  );
}

/** A payment card with a chip and magnetic stripe. */
function CreditCard({ color }: { color: string }) {
  const geo = useMemo(
    () => ({
      body: new THREE.BoxGeometry(1.7, 1.06, 0.05),
      chip: new THREE.BoxGeometry(0.28, 0.22, 0.05),
      stripe: new THREE.BoxGeometry(1.7, 0.18, 0.05),
    }),
    []
  );

  return (
    <group>
      <Holo geometry={geo.body} color={color} faceOpacity={0.09} />
      <group position={[-0.5, 0.16, 0.03]}>
        <Holo geometry={geo.chip} color="#f3c45e" edgeOpacity={0.85} />
      </group>
      <group position={[0, 0.32, -0.03]}>
        <Holo geometry={geo.stripe} color={color} />
      </group>
    </group>
  );
}

/** A security shield. */
function Shield({ color }: { color: string }) {
  const geo = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, 1.05);
    shape.lineTo(-0.78, 0.66);
    shape.lineTo(-0.78, -0.16);
    shape.lineTo(0, -1.05);
    shape.lineTo(0.78, -0.16);
    shape.lineTo(0.78, 0.66);
    shape.closePath();
    const extruded = new THREE.ExtrudeGeometry(shape, {
      depth: 0.2,
      bevelEnabled: false,
    });
    extruded.translate(0, 0, -0.1);
    return extruded;
  }, []);

  return <Holo geometry={geo} color={color} faceOpacity={0.09} edgeOpacity={0.7} />;
}

/* ------------------------------------------------------------------ */
/*  Network globe                                                      */
/* ------------------------------------------------------------------ */

interface PacketProps {
  curve: THREE.QuadraticBezierCurve3;
  speed: number;
  offset: number;
  color: string;
  paused: boolean;
}

function Packet({ curve, speed, offset, color, paused }: PacketProps) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!ref.current || paused) return;
    const t = (clock.getElapsedTime() * speed + offset) % 1;
    curve.getPoint(t, ref.current.position);
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.05, 12, 12]} />
      <meshBasicMaterial color={color} toneMapped={false} />
    </mesh>
  );
}

function NetworkGlobe({ paused }: { paused: boolean }) {
  const group = useRef<THREE.Group>(null);
  const nodes = useMemo(() => fibonacciSphere(NODE_COUNT, RADIUS), []);

  const pointsGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(nodes.length * 3);
    nodes.forEach((node, i) => {
      positions[i * 3] = node.x;
      positions[i * 3 + 1] = node.y;
      positions[i * 3 + 2] = node.z;
    });
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geometry;
  }, [nodes]);

  const linesGeometry = useMemo(() => {
    const segments: number[] = [];
    nodes.forEach((node, i) => {
      const neighbours = nodes
        .map((other, j) => ({ j, dist: node.distanceTo(other) }))
        .filter((entry) => entry.j !== i)
        .sort((a, b) => a.dist - b.dist)
        .slice(0, 2);
      neighbours.forEach(({ j }) => {
        const other = nodes[j];
        segments.push(node.x, node.y, node.z, other.x, other.y, other.z);
      });
    });
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(new Float32Array(segments), 3)
    );
    return geometry;
  }, [nodes]);

  const curves = useMemo(() => {
    const list: THREE.QuadraticBezierCurve3[] = [];
    for (let i = 0; i < 9; i++) {
      const a = nodes[(i * 53) % nodes.length];
      const b = nodes[(i * 97 + 17) % nodes.length];
      const mid = a
        .clone()
        .add(b)
        .multiplyScalar(0.5)
        .normalize()
        .multiplyScalar(RADIUS * 1.5);
      list.push(new THREE.QuadraticBezierCurve3(a.clone(), mid, b.clone()));
    }
    return list;
  }, [nodes]);

  useFrame((_, delta) => {
    if (!group.current || paused) return;
    group.current.rotation.y += delta * 0.05;
    group.current.rotation.x = Math.sin(performance.now() * 0.00007) * 0.16;
  });

  return (
    <group ref={group}>
      <mesh>
        <sphereGeometry args={[RADIUS * 0.92, 48, 48]} />
        <meshBasicMaterial color="#11151d" />
      </mesh>
      <lineSegments geometry={linesGeometry}>
        <lineBasicMaterial color="#8a7442" transparent opacity={0.24} />
      </lineSegments>
      <points geometry={pointsGeometry}>
        <pointsMaterial
          color="#d4a94e"
          size={0.05}
          sizeAttenuation
          transparent
          opacity={0.95}
        />
      </points>
      {curves.map((curve, i) => (
        <Packet
          key={i}
          curve={curve}
          speed={0.1 + (i % 4) * 0.04}
          offset={i / curves.length}
          color={i % 3 === 0 ? "#f3c45e" : "#e8cc8f"}
          paused={paused}
        />
      ))}
    </group>
  );
}

/* ------------------------------------------------------------------ */
/*  Floating wrapper + scene composition                               */
/* ------------------------------------------------------------------ */

interface FloatingObjectProps {
  position: [number, number, number];
  scale: number;
  tilt?: [number, number];
  rotationSpeed?: number;
  floatSpeed?: number;
  floatRange?: number;
  seed: number;
  paused: boolean;
  children: ReactNode;
}

function FloatingObject({
  position,
  scale,
  tilt = [0, 0],
  rotationSpeed = 0.2,
  floatSpeed = 0.5,
  floatRange = 0.32,
  seed,
  paused,
  children,
}: FloatingObjectProps) {
  const ref = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!ref.current || paused) return;
    const t = clock.getElapsedTime();
    ref.current.position.y = position[1] + Math.sin(t * floatSpeed + seed) * floatRange;
    ref.current.rotation.set(tilt[0], t * rotationSpeed + seed, tilt[1]);
  });

  return (
    <group
      ref={ref}
      position={position}
      scale={scale}
      rotation={[tilt[0], seed, tilt[1]]}
    >
      {children}
    </group>
  );
}

/** Decorative 3D banking-network background for the hero section. */
export default function NetworkScene() {
  const reduced = useReducedMotion();
  const paused = reduced === true;

  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 42 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      frameloop={paused ? "demand" : "always"}
    >
      <group position={[0.2, 0.1, 0]}>
        <NetworkGlobe paused={paused} />
      </group>

      <FloatingObject
        position={[-3.5, -1.25, 0.2]}
        scale={0.58}
        tilt={[0.08, -0.05]}
        rotationSpeed={0.16}
        floatSpeed={0.46}
        seed={0.5}
        paused={paused}
      >
        <BankBuilding color="#a08a55" />
      </FloatingObject>

      <FloatingObject
        position={[-3.55, 1.8, -0.6]}
        scale={0.46}
        tilt={[0.22, 0.12]}
        rotationSpeed={0.32}
        floatSpeed={0.6}
        seed={2.2}
        paused={paused}
      >
        <CoinStack color="#f3c45e" />
      </FloatingObject>

      <FloatingObject
        position={[-1.05, 2.4, -1.7]}
        scale={0.5}
        tilt={[0.34, -0.18]}
        rotationSpeed={0.34}
        floatSpeed={0.52}
        seed={3.5}
        paused={paused}
      >
        <CreditCard color="#9aa3b2" />
      </FloatingObject>

      <FloatingObject
        position={[0.5, -2.2, -1]}
        scale={0.5}
        tilt={[0.2, 0.1]}
        rotationSpeed={0.26}
        floatSpeed={0.5}
        seed={4.8}
        paused={paused}
      >
        <Shield color="#a08a55" />
      </FloatingObject>
    </Canvas>
  );
}
