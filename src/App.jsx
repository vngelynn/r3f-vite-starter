import { Canvas } from "@react-three/fiber"
import { Experience } from "./components/Experience"

function App() {
  return (
    <>
      <Canvas shadows camera={{ position: [0, 2, 5], fov: 30 }}>
        <color attach='background' args={["#ececec"]} />
        <Experience />
      </Canvas>
      <h1 className='text-3xl font-bold underline'>Hello world!</h1>
    </>
  )
}

export default App
