import { useRef, useState } from "react";
import emailjs from "@emailjs/browser"
import { Image, Stack, Text } from "@chakra-ui/react";
import "./contact.css"
export default function Contact (){
    const form = useRef();
    const [mensajeEnviado,setMensajeEnviado] = useState(false)
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm(import.meta.env.VITE_SERVIDE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, import.meta.env.VITE_PUBLIC_ID)
        .then((result) => {
            
            setMensajeEnviado(true)
            e.target.reset()
            setTimeout(() => {
                setMensajeEnviado(false)
            }, 3000);
            // console.log(result.text);

        }, (error) => {
            console.log(error.text);
        });
    };
    return (
       <Stack id="contact" padding="80px 0px">

            <Stack maxWidth="1280px"
            margin="0px auto"
            width="80%"
           >
           
                <Text color="white" 
                        fontWeight="bold"
                        fontSize="30px"
                        textAlign="center"
                        padding="50px">Contáctame!</Text>
                <Stack  direction="column" 
                        justifyContent="center" 
                        alignItems="center"
                >
                    <Stack paddingBottom="50px">
                        <Image  margin="0px auto" 
                                width="60%"  
                                src="https://joaquinmontes.vercel.app/_next/image?url=%2Fhello.svg&w=1920&q=75"
                    />
                </Stack>
                <form ref={form} onSubmit={sendEmail} style={{display : "flex",flexDirection:"column"}}>
                    <div className="field">
                        <label >Name</label>
                        <input type="text" name="user_name" />
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="email" name="user_email" />
                    </div>
                    <div className="field">
                        <label >Message</label>
                        <textarea name="message" />
                    </div>
                    
                    <input type="submit" value="Send"/>
                    {mensajeEnviado 
                    ?<p>Los datos han sido enviados</p>
                    :""
                    }
                    
                </form>
            </Stack>
</Stack> 
</Stack>
    )
}