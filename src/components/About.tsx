import { socials } from "@/constants";
import heroImage from "@/assets/hero.jpg";
import ComputerModel from "./ComputerModel";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  PresentationControls,
} from "@react-three/drei";
import { Suspense } from "react";

const About = () => {
  return (
    <section id="home" className="py-12 px-4 relative">
      {/* CV Download Button - appears on hover */}
      <div className="absolute top-4 right-4 opacity-0 hover:opacity-100 transition-opacity duration-300 z-10">
        <a
          href="/path-to-your-cv.pdf"
          download
          className="inline-flex items-center gap-2 bg-accent hover:bg-accent/80 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 shadow-lg hover:shadow-xl"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          Get CV
        </a>
      </div>

      <div className="max-w-7xl mx-auto ">
        <div className="info">
          <img src={heroImage} alt="home" className="heroImage" />
          <div className="status">
            <div className="circle"></div>
            <a
              href="#contact"
              style={{ textDecoration: "none", color: "inherit" }}
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Available
            </a>
          </div>
        </div>

        <h1 className="introduction">
          Hello , I'm Arfaoui Badi a fullstack developer
        </h1>
        <p className="description">
          I am an individual who combines enthusiasm, self-motivation,
          reliability,
          <br /> responsibility, and hard work to achieve exceptional results.
          <br />
          My adaptability, teamwork skills, and ability to thrive under pressure
          <br />
          make me a valuable asset in any professional setting.
        </p>

        {/* 3D Computer Model */}

        <div className="socials">
          {socials.map((social, index) => {
            return (
              <div className="socialIcon" key={index}>
                <a href={social.link} target="_blank" rel="noreferrer">
                  {social.icon}
                </a>
              </div>
            );
          })}
        </div>
        <div
          className="computer-model-container"
          style={{
            width: "100%",
            height: "400px",
            background: "#18181b",
            borderRadius: "12px",
            border: "1px solid #333",
            overflow: "hidden",
          }}
        >
          <Canvas
            camera={{ position: [3, 2, 4], fov: 60 }}
            style={{
              width: "100%",
              height: "100%",
            }}
            performance={{ min: 0.5 }}
            frameloop="demand"
          >
            <Suspense
              fallback={
                <group>
                  <mesh position={[0, 0, 0]}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color="#4a4a4a" />
                  </mesh>
                  <mesh position={[0, 0, 0]}>
                    <sphereGeometry args={[0.5, 16, 16]} />
                    <meshStandardMaterial color="#666666" wireframe />
                  </mesh>
                  <ambientLight intensity={0.4} />
                  <directionalLight position={[2, 2, 5]} intensity={1} />
                </group>
              }
            >
              <Environment preset="city" />
              <ambientLight intensity={0.4} />
              <directionalLight position={[2, 2, 5]} intensity={1} />

              <PresentationControls
                global
                rotation={[0.13, 0.1, 0]}
                polar={[-0.4, 0.2]}
                azimuth={[-1, 0.75]}
                config={{ mass: 2, tension: 400 }}
                snap={{ mass: 4, tension: 400 }}
              >
                <ComputerModel />
              </PresentationControls>

              <OrbitControls
                enableZoom={true}
                enablePan={true}
                enableRotate={true}
                minDistance={3}
                maxDistance={8}
                autoRotate={true}
                autoRotateSpeed={1}
                enableDamping={true}
                dampingFactor={0.05}
                rotateSpeed={0.8}
              />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default About;
