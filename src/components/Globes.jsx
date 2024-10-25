import { motion } from "framer-motion-3d"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import { Float } from "@react-three/drei"
import { EarthFlowers } from "../../EarthFlowers"
import { Flowers } from "../../Flowers"
import { FlowerEarth } from "../../FlowerEarth"

export const Globes = () => {
  const earthFlowersRef = useRef()
  const flowerEarthRef = useRef()
  const flowersRef = useRef()

  useFrame(() => {
    if (earthFlowersRef.current) {
      earthFlowersRef.current.rotation.x += 0.01
    }
    if (flowerEarthRef.current) {
      flowerEarthRef.current.rotation.z += 0.01
    }
    if (flowersRef.current) {
      flowersRef.current.rotation.y -= 0.01
    }
  })

  return (
    <motion.group position={[1, -1.5, -10]}>
      <directionalLight position={[-5, 3, 5]} intensity={0.4} />
      <Float>
        <mesh
          ref={earthFlowersRef}
          position={[2, -2, -15]}
          scale={[1.4, 1.4, 1.4]}
        >
          <EarthFlowers />
        </mesh>
      </Float>
      <Float>
        <mesh ref={flowerEarthRef} scale={[3, 3, 3]} position={[10, -0.5, -18]}>
          <FlowerEarth />
        </mesh>
      </Float>
      <Float>
        <mesh ref={flowersRef} scale={[2, 2, 2]} position={[-5, 0, -11]}>
          <Flowers />
        </mesh>
      </Float>
    </motion.group>
  )
}
