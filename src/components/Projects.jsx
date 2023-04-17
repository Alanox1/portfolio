import Project from "./Project";
import { Stack } from "@chakra-ui/react";
export default function Projects (){
    return (
    <Stack id="projects">
        <Stack maxWidth="1280px"
        margin="0px auto"
        width="80%" 
        gap="40px">
           
                <Project    title="e-commerce" 
                            src={"./src/assets/e-commerce.jpg"} 
                            github={"https://github.com/Alanox1/e-commerce-react"} 
                            deploy={"https://e-commerce-react-blue.vercel.app/"}
                            parrafo1="Este es un e-commerce con un carrito de compras, donde se puede borrar un producto en particular, otro botón para vaciar el carrito y finalmente otro para comprar los productos."
                            parrafo2 = "Esta hecho con React , wouter y react context."
                            backgroundColor=" #785ce9"
                />
                <Project    title="Coffee Page" 
                            src={"./src/assets/coffee-page.jpg"} 
                            github={"https://github.com/Alanox1/pagina-de-cafe"} 
                            deploy={"https://pagina-de-cafe.vercel.app/"}
                            parrafo1="Esta es una pagina web diseñanda para vender café."
                            parrafo2 = "Esta hecha con React y Styled-components."
                            backgroundColor="black"
                />
                <Project    title="Lista de usuarios" 
                            src={"./src/assets/lista-de-usuarios.jpg"} 
                            github={"https://github.com/Alanox1/Lista-de-usuarios"} 
                            deploy={"https://lista-de-usuarios-theta.vercel.app/"}
                            parrafo1="Este es un crud de React, donde se puede agregar, editar y borrar un usuario. Además se puede ordenar en forma ascendente y descendente de forma alfabética."
                            parrafo2 = "Esta hecho con React y ChakraUI."
                            backgroundColor="brown"
                />
               
                <Project    title="Adviency Goncy" 
                            src={"./src/assets/adviency.jpg"} 
                            github={"https://github.com/Alanox1/adviency-goncy"} 
                            deploy={"https://adviency-goncy.vercel.app/"}
                            parrafo1="Este es el challenge de Goncy, se llama adviency. 
                            Se trata de una lista de regalos de Navidad que cuenta con un formulario para agregar regalos a la lista, otros dos formularios para editar y copiar respectivamente cada regalo, además de otras pequeñas funcionalidades."
                            parrafo2 = "Esta hecha con React y ChakraUI."
                            backgroundColor="gray"               
                />
                <Project    title="Mercado Libre Challenge" 
                            src={"./src/assets/mercado-libre-challenge.jpg"} 
                            github={"https://github.com/Alanox1/clon-mercado_libre"} 
                            deploy={"https://clon-mercado-libre.vercel.app/"}
                            parrafo1="Acá habia que clonar la página de detalle de un producto de mercado libre"
                            parrafo2 = "Esta hecha con React , ChakraUI y Sweetalert2."
                            backgroundColor="#CCC147"
                />
           
        </Stack>
        </Stack>
    )
}