import {
  Float,
  MeshDistortMaterial,
  MeshWobbleMaterial,
  Sky,
  ContactShadows,
  Environment,
} from "@react-three/drei"
import { Avatar } from "./Avatar"
import { ComputerDeskLarger } from "./ComputerDeskLarger"
ComputerDeskLarger
import { animate, useMotionValue } from "framer-motion"
import { motion } from "framer-motion-3d"
import { useFrame, useThree } from "@react-three/fiber"
import { framerMotionConfig } from "../framerConfig"
import { useState, useEffect, useRef } from "react"
import * as THREE from "three"
import { useScroll } from "@react-three/drei"

export const Experience = (props) => {
  const { menuOpened } = props
  const { viewport } = useThree()
  const data = useScroll()

  const [section, setSection] = useState(0)

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

  const characterContainerAboutRef = useRef()

  const [characterAnimation, setCharacterAnimation] = useState("Typing")
  useEffect(() => {
    setCharacterAnimation("Falling")
    setTimeout(() => {
      setCharacterAnimation(section === 0 ? "Typing" : "Standing")
    }, 600)
  }, [section])
  useFrame((state) => {
    let currSection = Math.floor(data.scroll.current * data.pages)

    if (currSection > 3) {
      currSection = 3
    }

    if (currSection !== section) {
      setSection(currSection)
    }
    state.camera.position.x = cameraPositionX.get()
    state.camera.lookAt(cameraLookAtX.get(), 0, 0)

    const position = new THREE.Vector3()
    characterContainerAboutRef.current.getWorldPosition(position)
    // console.log([position.x, position.y, position.z])

    const quaternion = new THREE.Quaternion()
    characterContainerAboutRef.current.getWorldQuaternion(quaternion)
    const euler = new THREE.Euler()
    euler.setFromQuaternion(quaternion, "XYZ")
    console.log([euler.x, euler.y, euler.z])
  })

  console.log("section: ", section)

  return (
    <>
      <motion.group
        position={[0.88, 0.076, -0.802]}
        rotation={[0.07220367320510354, 1.5707963118937354, 0]}
        animate={"" + section}
        transition={{
          duration: 0.6,
        }}
        variants={{
          0: {
            scaleX: 0.9,
            scaleY: 0.9,
            scaleZ: 0.9,
          },
          1: {
            y: -viewport.height + 0.5,
            x: 0,
            z: 7,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
          },
          2: {
            x: -2,
            y: -viewport.height * 2 + 0.5,
            z: 0,
            rotateX: 0,
            rotateY: Math.PI / 2,
            rotateZ: 0,
          },
          3: {
            y: -viewport.height * 3 + 1,
            x: 0.3,
            z: 8.5,
            rotateX: 0,
            rotateY: -Math.PI / 4,
            rotateZ: 0,
          },
        }}
      >
        {" "}
        <Avatar animation={characterAnimation} />
      </motion.group>

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

        <ComputerDeskLarger scale={1} section={section} />

        <group
          ref={characterContainerAboutRef}
          name='avatarPosition'
          position={[0.88, 0.076, -0.802]} // Match the chair's position
          rotation={[-Math.PI / 2, Math.PI / 2, 1.643]}
          scale={1.6}
        ></group>

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
