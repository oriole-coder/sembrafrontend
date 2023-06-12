import { HStack, Select, SimpleGrid, Card, CardBody, Text } from "@chakra-ui/react";
  import Header from '../../common/Header'
  import NavBar from '../../common/NavBar'
  
  function SembraTime() {
    return (  



        <Card>
         <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(400px, 1fr))'>
         <Header />
        <Text align='right'>Logout</Text>
         <Text>SembraTime Dashboard</Text>
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
                    bg='purple'
                     borderColor='black'
                   color='white'
                       placeholder='Reset User Password'
                    />
    
        <Select
        padding='1'
          bg='purple'
          borderColor='black'
          color='white'
          placeholder='Search Shift'
        />
        <Select
        padding='1'
          bg='purple'
          borderColor='black'
          color='white'
          placeholder='Reset Active Shift'
        />
        <Select
        padding='1'
          bg='purple'
          borderColor='black'
          color='white'
          placeholder='Reset Canceled Shift'
        />
        <Select
        padding='1'
          bg='purple'
          borderColor='black'
          color='white'
          placeholder='Change Check-In Time'
        />
        <Select
        padding='1'
          bg='purple'
          borderColor='black'
          color='white'
          placeholder='Change Check-In Location'
        />
            </CardBody>
    
          </Card>
          </HStack>
        </SimpleGrid>
        </Card>

    );
    }

export default SembraTime;