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
                justifyContent="center"
                maxH="100vh"
                height="100vh">
                <Text fontSize="48px">Hola! 😀</Text>
                <Text   padding="50px 0px" 
                        textAlign="center" 
                        fontSize={{base : "25px" , sm : "38px"}}
                >
                    Soy Alan Magliolini, un desarrollador frontend apasionado por la tecnología y el aprendizaje autodidacta.
                </Text>
                <Text></Text>
                <Stack direction= {{base : "column", md : "row"}} 
                        width={{base : "100%", md : "80%"}} 
                        justifyContent="center" 
                        alignItems="center" 
                        margin="0px auto" 
                        paddingBottom="50px"
                >
                    <Link style={{width:"80%"}}  to="contact" spy={true} smooth={true} offset={50} duration={500}>
                            <Button className="botones" 
                                    padding="30px"  
                                    width="100%"
                                    colorScheme="orange"
                            >  
                                <span></span><span></span><span></span><span></span> 
                                Contact
                            </Button>
                    </Link> 
                     <Link style={{width:"80%"}} to="projects" spy={true} smooth={true} offset={-50} duration={500}>
                        <Button className="botones" 
                                padding="30px" 
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
                    <Image  
                            cursor="pointer" 
                            width="100px" 
                            src="./flecha-abajo.png" 
                    />
                </Link> 
          </Stack>
         
         </Stack> 
        </Stack>
    )
}