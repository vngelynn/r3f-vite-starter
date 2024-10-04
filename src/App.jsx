import { Canvas } from "@react-three/fiber"
import { Experience } from "./components/Experience"
import { Scroll, ScrollControls } from "@react-three/drei"
import { NavLinks } from "./components/NavLinks.jsx"
import { ScrollManager } from "./components/ScrollManager.jsx"
import { useState } from "react"

function App() {
  const [section, setSection] = useState(0)

  return (
    <>
      <Canvas shadows camera={{ position: [0, 2, 5], fov: 30 }}>
        <color attach='background' args={["#ececec"]} />
        <ScrollControls pages={4} damping={0.1}>
          <ScrollManager section={section} onSectionChange={setSection} />
          <Experience />
          <Scroll html>
            <NavLinks />
          </Scroll>
        </ScrollControls>
      </Canvas>
    </>
  )
}

export default App
