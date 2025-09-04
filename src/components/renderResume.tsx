import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";

function ResumeModel() {
  const gltf = useGLTF("/resume.glb");
  return (
    <primitive
      object={gltf.scene}
      scale={[3, 3, 3]}
      rotation={[Math.PI / 2, 0, 0]}
    />
  );
}

export default function RenderModel() {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <Suspense fallback={null}>
          <ResumeModel />
        </Suspense>

        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={false}
          target={[0, 0, 0]}
        />
      </Canvas>
    </div>
  );
}
