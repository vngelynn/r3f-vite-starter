import React from "react"
import { useGraph } from "@react-three/fiber"
import { useGLTF } from "@react-three/drei"
import { SkeletonUtils } from "three-stdlib"

export function Office(props) {
  const { scene } = useGLTF("models/office.glb")
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  return (
    <group
      {...props}
      dispose={null}
      position={[0.5, -1, -1]}
      scale={1.3}
      rotation={[0.1, 0, 0]}
    >
      <primitive object={nodes.b__ROOT__} />
      <primitive object={nodes.b__ROOT___1} />
      <primitive object={nodes.computerDesktop_rig} />
      <primitive object={nodes.computerDesktop_rig_1} />
      <primitive object={nodes.b__ROOT___2} />
      <primitive object={nodes.b__ROOT___3} />
      <primitive object={nodes.b__ROOT___4} />
      <primitive object={nodes.b__ROOT___5} />
      <primitive object={nodes.b__ROOT___6} />
      <primitive object={nodes.b__ROOT___7} />
      <primitive object={nodes.b__ROOT___8} />
      <primitive object={nodes.b__ROOT___9} />
      <mesh
        geometry={nodes.s4studio_mesh_0002.geometry}
        material={materials["DIFFUSE.003"]}
      />
      <mesh
        geometry={nodes.s4studio_mesh_0002_1.geometry}
        material={materials.DIFFUSE}
      />
      <mesh
        geometry={nodes.s4studio_mesh_0002_2.geometry}
        material={materials["DIFFUSE.001"]}
      />
      <mesh
        geometry={nodes.s4studio_mesh_0002_3.geometry}
        material={materials["DIFFUSE.002"]}
      />
      <mesh
        geometry={nodes.s4studio_mesh_0002_4.geometry}
        material={materials["DIFFUSE.004"]}
      />
      <mesh
        geometry={nodes.s4studio_mesh_0002_5.geometry}
        material={materials["DIFFUSE.005"]}
      />
      <mesh
        geometry={nodes.s4studio_mesh_0002_6.geometry}
        material={materials["DIFFUSE.007"]}
      />
      <mesh
        geometry={nodes.s4studio_mesh_0002_7.geometry}
        material={materials["DIFFUSE.008"]}
      />
      <mesh
        geometry={nodes.s4studio_mesh_0002_8.geometry}
        material={materials["DIFFUSE.009"]}
      />
      <mesh
        geometry={nodes.s4studio_mesh_0002_9.geometry}
        material={materials["DIFFUSE.010"]}
      />
      <mesh
        geometry={nodes.s4studio_mesh_0002_10.geometry}
        material={materials["DIFFUSE.011"]}
      />
      <mesh
        geometry={nodes.s4studio_mesh_0002_11.geometry}
        material={materials["DIFFUSE.012"]}
      />
      <mesh
        geometry={nodes.s4studio_mesh_0002_12.geometry}
        material={materials["DIFFUSE.013"]}
      />
      <mesh
        geometry={nodes.s4studio_mesh_0002_13.geometry}
        material={materials["DIFFUSE.014"]}
      />
      <mesh
        geometry={nodes.s4studio_mesh_0002_14.geometry}
        material={materials["DIFFUSE.015"]}
      />
      <mesh
        geometry={nodes.s4studio_mesh_0002_15.geometry}
        material={materials["DIFFUSE.016"]}
      />
      <mesh
        geometry={nodes.s4studio_mesh_0002_16.geometry}
        material={materials["DIFFUSE.017"]}
      />
      <mesh
        geometry={nodes.s4studio_mesh_0002_17.geometry}
        material={materials["DIFFUSE.018"]}
      />
      <mesh
        geometry={nodes.s4studio_mesh_0002_18.geometry}
        material={materials["DIFFUSE.019"]}
      />
      <mesh
        geometry={nodes.s4studio_mesh_0002_19.geometry}
        material={materials["DIFFUSE.020"]}
      />
      <mesh
        geometry={nodes.s4studio_mesh_0002_20.geometry}
        material={materials["DIFFUSE.006"]}
      />
      <mesh
        geometry={nodes.s4studio_mesh_0002_21.geometry}
        material={materials["DIFFUSE.024"]}
      />
      <mesh
        geometry={nodes.s4studio_mesh_0002_22.geometry}
        material={materials["DIFFUSE.026"]}
      />
    </group>
  )
}

useGLTF.preload("models/office.glb")
