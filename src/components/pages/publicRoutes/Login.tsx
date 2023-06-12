import { Input, Stack, Button } from "@chakra-ui/react";
  
  function Login() {
    return (

<Stack  spacing={3}>
  
  <Input variant='flushed' placeholder='Username' />
  <Input variant='unstyled' placeholder='Password' />
  <Button colorScheme='teal' variant='outline'>
    Sign In
  </Button>
</Stack>

    );
    }

export default Login;