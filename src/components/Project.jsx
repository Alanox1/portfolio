import { Stack, Image, Button, Text, Link } from "@chakra-ui/react"
export default function Project ({title,src,github,deploy,parrafo1,parrafo2,backgroundColor}){
   
    return (
        <Stack backgroundColor={backgroundColor}  direction={{base : "column", md : "row"}}
        >
            <Stack  width={{base : "100%", md : "50%"}}  padding="30px">
                <Text as="h3"
                        fontSize="40px"
                >{title}</Text>
                <Text as="p"
                      fontSize="18px"
                      padding="20px 0px"
                >{parrafo1}</Text>
                <Text as="p"
                       fontSize="18px"
                       padding="20px 0px"
                >{parrafo2}</Text>
                <Stack direction={{base : "column", md : "row"}} justifyContent="center">

                    <Link href={deploy} target="_blank" width="50%" >
                        <Button width="100%" colorScheme="none"    border="1px solid black" margin = "0px auto">See deploy</Button>
                    </Link>
                    <Link href={github} target="_blank" width="50%">
                        <Button backgroundColor="#none" colorScheme="none" width="100%" border="1px solid black"  margin="0px auto">See github</Button>
                    </Link>
                </Stack>
               
            </Stack>
            <Stack width={{base : "100%", md : "50%"}}>
                <Image objectFit="cover" height="100%" src={src} />
            </Stack>
        </Stack>
    )
}