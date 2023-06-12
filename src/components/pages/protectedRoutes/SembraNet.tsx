// SembraNet


import { HStack,Select, SimpleGrid,Card, CardBody, Text } from "@chakra-ui/react";
  import NavBar from '../../common/NavBar'
  import Header from '../../common/Header'
  
  function SembraNet() {
    return (



     <Card>
<SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(400px, 1fr))'>
<Header />
<Text align='right'>Logout</Text>
<Text>SembraNet Dashboard</Text>
<HStack>
  <Card>
    <CardBody>
      <NavBar />
    </CardBody>
  </Card>
  <Card>
    
    <CardBody>
      
    <Select
    padding='1'
  bg='red'
  borderColor='red'
  color='white'
  placeholder='Search Assessment Status'
/>

<Select
padding='1'
  bg='red'
  borderColor='red'
  color='white'
  placeholder='Re-Sync Submitted Assessment'
/>
<Select
padding='1'
  bg='red'
  borderColor='red'
  color='white'
  placeholder='Search RN Assignments'
/>
    </CardBody>
    
  </Card>
  </HStack>
</SimpleGrid>
</Card> 


    );
    }

export default SembraNet;