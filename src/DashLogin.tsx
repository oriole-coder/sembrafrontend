import { Stack } from "@chakra-ui/react";
  import "./App.css";
import LoginHeader from './LoginHeader'
import Login from './Login'
  
  
  const DashLogin = () => {
    return (
      <Stack>
      <LoginHeader />
      <Login />
      </Stack>
    
    
  )}
  
  export default DashLogin