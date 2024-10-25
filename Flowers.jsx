/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 public/models/flowers.glb 
*/

import React from "react"
import { useGLTF } from "@react-three/drei"

export function Flowers(props) {
  const { nodes, materials } = useGLTF("models/flowers.glb")
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.mesh_0.geometry} material={nodes.mesh_0.material} />
    </group>
  )
}

useGLTF.preload("models/flowers.glb")
