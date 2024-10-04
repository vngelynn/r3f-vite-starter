import {
  ContactShadows,
  OrbitControls,
  Environment,
  Sky,
} from "@react-three/drei"
import { Avatar } from "./Avatar"
import { BunnyBoy } from "./BunnyBoy"
import { ComputerDesk } from "./ComputerDesk"
import { ComputerDeskLarger } from "./ComputerDeskLarger"
ComputerDeskLarger
import { useControls } from "leva"

export const Experience = () => {
  const { animation } = useControls({
    animation: {
      value: "Typing",
      options: ["Typing", "Falling", "Standing"],
    },
  })

  return (
    <>
      <OrbitControls />
      <Sky />
      <Environment preset='sunset' />
      <group position-y={-1}>
        <ContactShadows
          opacity={0.42}
          scale={10}
          blur={1}
          far={10}
          resolution={256}
          color='#000000'
        />
        <Avatar
          animation={animation}
          position={[0.88, 0.076, -0.802]} // Match the chair's position
          rotation={[-Math.PI / 2, Math.PI / 2, 1.643]}
          scale={1.6}
        />

        {/* <ambientLight intensity={2} /> */}

        {/* <ComputerDesk scale={0.7} /> */}
        <ComputerDeskLarger scale={1} />

        {animation === "Typing" && (
          <mesh scale={[0.8, 0.5, 0.8]} position-y={0.25}>
            <boxGeometry />
            <meshStandardMaterial color='white' />
          </mesh>
        )}

        <mesh scale={5} rotation-x={-Math.PI * 0.5} position-y={-0.001}>
          <planeGeometry />
          <meshStandardMaterial color='white' />
        </mesh>
      </group>
    </>
  )
}
