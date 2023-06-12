import { Image, Stack, Heading } from "@chakra-ui/react";
  import "./App.css";
  
  
  const LoginHeader = () => {
    return (
      
        <Stack direction='row'>
 
  <Image
    boxSize='150px'
    objectFit='cover'
    src='./sembracarelogo.png'
    alt='SembraCare Logo'
  />
  
    <Heading>

    SembraCare Success Portal
    
    </Heading>
</Stack>  
      
  )}
  
  export default LoginHeader