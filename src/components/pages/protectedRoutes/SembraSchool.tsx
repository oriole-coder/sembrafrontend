import { HStack, Select, SimpleGrid, Card, CardBody, Text } from "@chakra-ui/react";
import Header from '../../common/Header'
import NavBar from '../../common/NavBar'



function SembraSchool() {
  return (
  
    <Card>
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(400px, 1fr))"
      >
        <Header />
        <Text align="right">Logout</Text>
        <Text>SembraSchool Dashboard</Text>
        <HStack>
          <Card>
            <CardBody>
              <NavBar />
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <Select
                padding="1"
                bg="blue"
                borderColor="white"
                color="white"
                placeholder="Check User Permissions"
              />

              <Select
                padding="1"
                bg="blue"
                borderColor="white"
                color="white"
                placeholder="Change User Permissions"
              />
              <Select
                padding="1"
                bg="blue"
                borderColor="white"
                color="white"
                placeholder="Change User Group"
              />
            </CardBody>
          </Card>
        </HStack>
      </SimpleGrid>
    </Card>
  );
}

export default SembraSchool;
