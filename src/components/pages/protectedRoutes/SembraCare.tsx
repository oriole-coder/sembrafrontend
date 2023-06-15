import { HStack, Select, SimpleGrid, Card, CardBody, Text } from "@chakra-ui/react";
  import Header from '../../common/Header'
import NavBar from '../../common/NavBar'


  function SembraCare() {
    return (

     <Card>
    <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(400px, 1fr))'>
    <Header />
    <Text align='right'>Logout</Text>
    <Text>SembraCare Dashboard</Text>
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
      bg='orange'
      borderColor='black'
      color='white'
      placeholder='Badge Alterations'
    />

    <Select
    padding='1'
      bg='orange'
      borderColor='black'
      color='white'
      placeholder='Address Latitude/Longitude'
    />

        </CardBody>

      </Card>
      </HStack>
    </SimpleGrid>
    </Card>

    );}
    export default SembraCare;