import { Canvas } from "@react-three/fiber"
import { Experience } from "./components/Experience"
import { Scroll, ScrollControls } from "@react-three/drei"
import { NavLinks } from "./components/NavLinks.jsx"
import { ScrollManager } from "./components/ScrollManager.jsx"
import { useState, useEffect } from "react"
import { Menu } from "./components/Menu.jsx"
import { MotionConfig } from "framer-motion"
import { framerMotionConfig } from "./framerConfig.js"
import { Cursor } from "./components/Cursor.jsx"

function App() {
  const [section, setSection] = useState(0)
  const [menuOpened, setMenuOpened] = useState(false)

  useEffect(() => {
    setMenuOpened(false)
  }, [section])

  return (
    <>
      {" "}
      <MotionConfig
        transition={{
          ...framerMotionConfig,
        }}
      >
        <Canvas shadows camera={{ position: [0, 3, 10], fov: 30 }}>
          <color attach='background' args={["#ececec"]} />
          <ScrollControls pages={4} damping={0.1}>
            <ScrollManager section={section} onSectionChange={setSection} />
            <Scroll>
              <Experience section={section} menuOpened={menuOpened} />
            </Scroll>
            <Scroll html>
              <NavLinks setSection={setSection} />
            </Scroll>
          </ScrollControls>
        </Canvas>
        <Menu
          onSectionChange={setSection}
          menuOpened={menuOpened}
          setMenuOpened={setMenuOpened}
        />
        <Cursor />
      </MotionConfig>
    </>
  )
}

export default App
