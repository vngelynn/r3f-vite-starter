import { Sphere, useScroll } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { gsap } from "gsap"
import { useEffect, useRef } from "react"
import * as THREE from "three"
export const Background = () => {
  const material = useRef()
  const color = useRef({
    color: "#c9c3bc",
  })
  const data = useScroll()

  const tl = useRef()

  useFrame(() => {
    tl.current.progress(data.scroll.current)
    material.current.color = new THREE.Color(color.current.color)
  })

  useEffect(() => {
    tl.current = gsap.timeline()
    tl.current.to(color.current, {
      color: "#5F524C",
    })
    tl.current.to(color.current, {
      color: "#aa9d94",
    })
    tl.current.to(color.current, {
      color: "#c2baaf",
    })
  }, [])

  return (
    <group>
      <Sphere scale={[30, 30, 30]}>
        <meshBasicMaterial
          ref={material}
          side={THREE.BackSide}
          toneMapped={false}
        />
      </Sphere>
    </group>
  )
}
