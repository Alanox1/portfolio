import { Stack , Icon, Link } from "@chakra-ui/react";
import {AiFillLinkedin,AiFillTwitterCircle,AiFillGithub} from "react-icons/ai"
function Footer() {
    return ( 
        <Stack as="footer"
            
        >
                <Stack direction="row"
                       justifyContent="center"     
                       width="100%"
                       gap="30px"
                >
                    <Link href="https://www.linkedin.com/in/alan-magliolini-598522232/" target="_blank" >
                        <Icon  cursor="pointer" boxSize="45px" as={AiFillLinkedin} />
                    </Link>
                    <Link href="https://github.com/Alanox1" target="_blank">
                        <Icon  cursor="pointer" boxSize="45px" as={AiFillGithub}/>
                    </Link>
                    <Link href="https://twitter.com/BosteroBJ_" target="_blank" >
                        <Icon cursor="pointer" boxSize="45px" as={AiFillTwitterCircle}/>
                    </Link>
                    
                </Stack>
        </Stack>
     );
}

export default Footer;