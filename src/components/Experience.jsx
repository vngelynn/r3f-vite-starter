import {
  Float,
  MeshDistortMaterial,
  MeshWobbleMaterial,
  Sky,
  ContactShadows,
  OrbitControls,
  Environment,
} from "@react-three/drei"
import { Avatar } from "./Avatar"
import { BunnyBoy } from "./BunnyBoy"
import { ComputerDesk } from "./ComputerDesk"
import { ComputerDeskLarger } from "./ComputerDeskLarger"
ComputerDeskLarger
import { useControls } from "leva"
import { animate, useMotionValue } from "framer-motion"
import { motion } from "framer-motion-3d"
import { useFrame, useThree } from "@react-three/fiber"
import { framerMotionConfig } from "../framerConfig"
import { useEffect } from "react"

export const Experience = (props) => {
  const { section, menuOpened } = props
  const { viewport } = useThree()

  const cameraPositionX = useMotionValue()
  const cameraLookAtX = useMotionValue()

  useEffect(() => {
    animate(cameraPositionX, menuOpened ? -5 : 0, {
      ...framerMotionConfig,
    })
    animate(cameraLookAtX, menuOpened ? 5 : 0, {
      ...framerMotionConfig,
    })
  }, [menuOpened])

  useFrame((state) => {
    state.camera.position.x = cameraPositionX.get()
    state.camera.lookAt(cameraLookAtX.get(), 0, 0)
  })

  // const { animation } = useControls({
  //   animation: {
  //     value: "Typing",
  //     options: ["Typing", "Falling", "Standing"],
  //   },
  // })

  console.log("section: ", section)

  return (
    <>
      {/* <OrbitControls /> */}
      <Sky />
      <Environment preset='sunset' />
      <motion.group
        position-y={-1}
        animate={{
          y: section === 0 ? 0 : -1,
        }}
      >
        <ContactShadows
          opacity={0.42}
          scale={10}
          blur={1}
          far={10}
          resolution={256}
          color='#000000'
        />
        <Avatar
          animation={section === 1 ? "Standing" : "Typing"}
          position={[0.88, 0.076, -0.802]} // Match the chair's position
          rotation={[-Math.PI / 2, Math.PI / 2, 1.643]}
          scale={1.6}
        />

        {/* <ambientLight intensity={2} /> */}

        {/* <ComputerDesk scale={0.7} /> */}
        <ComputerDeskLarger scale={1} section={section} />

        {/* {animation === "Typing" && (
          <mesh scale={[0.8, 0.5, 0.8]} position-y={0.25}>
            <boxGeometry />
            <meshStandardMaterial color='white' />
          </mesh>
        )} */}

        <mesh scale={5} rotation-x={-Math.PI * 0.5} position-y={-0.001}>
          <planeGeometry />
          <meshStandardMaterial color='white' />
        </mesh>
      </motion.group>

      {/* SKILLS */}
      <motion.group
        position={[0, -1.5, -10]}
        animate={{
          z: section === 1 ? 0 : -10,
          y: section === 1 ? -viewport.height : -1.5,
        }}
      >
        <directionalLight position={[-5, 3, 5]} intensity={0.4} />
        {/* <Avatar
          animation={section === 0 ? "Falling" : "Standing"}
          position={[0.88, 0.076, -0.802]} // Match the chair's position
          rotation={[-Math.PI / 2, Math.PI / 2, 1.643]}
          scale={1.6}
        /> */}
        <Float>
          <mesh position={[1, -3, -15]} scale={[2, 2, 2]}>
            <sphereGeometry />
            <MeshDistortMaterial
              opacity={0.8}
              transparent
              distort={0.4}
              speed={4}
              color={"red"}
            />
          </mesh>
        </Float>
        <Float>
          <mesh scale={[3, 3, 3]} position={[3, 1, -18]}>
            <sphereGeometry />
            <MeshDistortMaterial
              opacity={0.8}
              transparent
              distort={1}
              speed={5}
              color='yellow'
            />
          </mesh>
        </Float>
        <Float>
          <mesh scale={[1.4, 1.4, 1.4]} position={[-3, -1, -11]}>
            <boxGeometry />
            <MeshWobbleMaterial
              opacity={0.8}
              transparent
              factor={1}
              speed={5}
              color={"blue"}
            />
          </mesh>
        </Float>
      </motion.group>
    </>
  )
}
