import {Stack} from "@chakra-ui/react"
import "./botones.css"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
function App() {
 
  return (
    <Stack>    
      <Hero />
      <Skills  />
      <Projects />  
      <Contact />
      <Footer />
    </Stack>
  )
}

export default App
