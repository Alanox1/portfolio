import {Stack} from "@chakra-ui/react"


import "./botones.css"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
import { useRef } from "react"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
function App() {
 const ref = useRef(null)
  return (
    <Stack>    
      <Hero />
      <Skills  />
      <Projects />  
      <Contact />
    </Stack>
  )
}

export default App
