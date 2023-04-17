import { Button, Stack, Text , Image} from "@chakra-ui/react"
import "../app.css"
import { Link } from "react-scroll"
export default function Hero () {
  
    return (
        
        <Stack 
                className="main"
         >
          
         <Stack maxWidth="1280px"
             margin="0px auto"
             width="80%"
             height="100vh">
          <Stack direction="column"
                alignItems="center"
                justifyContent="space-evenly"
                maxH="100vh"
                height="100vh">
                <Text fontSize="2rem">Hola!😀</Text>
                <Text   padding="50px 0px" 
                        textAlign="center" 
                        fontSize={{base : "25px" , sm : "38px"}}
                >
                    Soy Alan Magliolini, un desarrollador frontend apasionado por la tecnología y el aprendizaje autodidacta.
                </Text>
                <Stack direction= {{base : "column", md : "row"}} 
                        width={{base : "100%", md : "80%"}} 
                        justifyContent="center" 
                        alignItems="center" 
                        margin="0px auto" 
                >
                    <Link style={{width:"80%"}}  to="contact" spy={true} smooth={true} offset={50} duration={500}>
                            <Button className="botones" 
                                    padding="25px"  
                                    width="100%"
                                    colorScheme="orange"
                            >  
                                <span></span><span></span><span></span><span></span> 
                                Contact
                            </Button>
                    </Link> 
                     <Link style={{width:"80%"}} to="projects" spy={true} smooth={true} offset={-50} duration={500}>
                        <Button className="botones" 
                                padding="25px" 
                                width="100%" 
                                colorScheme="orange" 
                                position="relative" 
                        >
                            <span></span><span></span><span></span><span></span> 
                            Projects
                        </Button>
                    </Link>

                </Stack>
                <Link to="skills" spy={true} smooth={true} offset={-50} duration={500}>
                    <Image  _hover={{ bg: "teal.600"}} 
                            cursor="pointer" 
                            width="60px" 
                            src="./src/assets/flecha-abajo.png" 
                    />
                </Link> 
                <button onClick={() => console.log(import.meta.env.VITE_SOME_KEY)}>CLICK ME</button>
          </Stack>
         
         </Stack> 
        </Stack>
    )
}