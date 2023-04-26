import { Stack, Text } from "@chakra-ui/react"
import Habilidades from "../components/Habilidades"
 function Skills () {

    return (
        <Stack id="skills" padding="200px 0px">
          <Text textAlign="center" fontSize={{base : "30px", sm :"52px"}} as="h2">Algunos conocimientos que tengo son:</Text>
          <Stack direction={{base : "column", sm : "row"}}
               justifyContent={{base : "space-between", sm : "space-around"}}>
          
            <Habilidades especialidad="Lenguajes"
                         habilidadUno="JavaScript ES(2020)"
                         habilidadDos="HTML"
                         habilidadTres="CSS"
            />         
            <Habilidades especialidad="Frameworks"
                         habilidadUno="REACT JS"
                         habilidadDos="CHAKRA UI"
                         habilidadTres="REACT ROUTER DOM"
            />
          </Stack>
        </Stack>
    )
}

export default Skills