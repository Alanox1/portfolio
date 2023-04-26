import { Stack ,OrderedList , ListItem , Text} from "@chakra-ui/react";

function Habilidades({especialidad,habilidadUno,habilidadDos,habilidadTres}) {
    return (
        <Stack as="article">
            <Text   as="h4" 
                    fontSize="40px" 
                    margin={{base : "20px auto", md : "20px 0px"}} 
                    color="#ED8936">
                {especialidad}
            </Text>
            <OrderedList listStyleType="none" 
                         display="flex" 
                         flexDirection="column" 
                         fontSize={{base : "24px",md : "36px"}} 
                         alignItems={{base : "center", md : "start"}} gap="10px"
            >
                    <ListItem>{habilidadUno}</ListItem>
                    <ListItem>{habilidadDos}</ListItem>
                    <ListItem>{habilidadTres}</ListItem>
            </OrderedList>
        </Stack>
        
    );
}

export default Habilidades;