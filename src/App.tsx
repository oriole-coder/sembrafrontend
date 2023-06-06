import {
  HStack,
  Select,
  Stack,
  SimpleGrid,
  Card,
  Heading,
  CardBody,
  CardHeader,
  Text,
  Button,
  CardFooter,
} from "@chakra-ui/react";
import "./App.css";

function App() {
  return (
    // ------------------------
    // SembraNet

    /* <Card>
<SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(400px, 1fr))'>
<Heading>Hello User</Heading>
<Text align='right'>Logout</Text>
<Text>SembraNet Dashboard</Text>
<HStack>
  <Card>
  
    <CardBody>
      <Stack>
      <Button colorScheme='purple' size='md'>SembraTime</Button>
      <Button colorScheme='blue' size='md'>SembraSchool</Button>
      <Button colorScheme='red' size='md'>SembraNet</Button>
      <Button colorScheme='orange' size='md'>SembraCare</Button>
      </Stack>
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
</Card> */

    // ---------------------------------------------------
    // Sembra Time
    //  <Card>
    // <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(400px, 1fr))'>
    // <Heading>Hello User</Heading>
    // <Text align='right'>Logout</Text>
    // <Text>SembraTime Dashboard</Text>
    // <HStack>
    //   <Card>

    //     <CardBody>
    //       <Stack>
    //       <Button colorScheme='purple' size='md'>SembraTime</Button>
    //       <Button colorScheme='blue' size='md'>SembraSchool</Button>
    //       <Button colorScheme='red' size='md'>SembraNet</Button>
    //       <Button colorScheme='orange' size='md'>SembraCare</Button>
    //       </Stack>
    //     </CardBody>
    //   </Card>
    //   <Card>

    //     <CardBody>

    //     <Select
    //     padding='1'
    //   bg='purple'
    //   borderColor='black'
    //   color='white'
    //   placeholder='Reset User Password'
    // />

    // <Select
    // padding='1'
    //   bg='purple'
    //   borderColor='black'
    //   color='white'
    //   placeholder='Search Shift'
    // />
    // <Select
    // padding='1'
    //   bg='purple'
    //   borderColor='black'
    //   color='white'
    //   placeholder='Reset Active Shift'
    // />
    // <Select
    // padding='1'
    //   bg='purple'
    //   borderColor='black'
    //   color='white'
    //   placeholder='Reset Canceled Shift'
    // />
    // <Select
    // padding='1'
    //   bg='purple'
    //   borderColor='black'
    //   color='white'
    //   placeholder='Change Check-In Time'
    // />
    // <Select
    // padding='1'
    //   bg='purple'
    //   borderColor='black'
    //   color='white'
    //   placeholder='Change Check-In Location'
    // />
    //     </CardBody>

    //   </Card>
    //   </HStack>
    // </SimpleGrid>
    // </Card>

    // ----------------------
    // SembraCare

    //  <Card>
    // <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(400px, 1fr))'>
    // <Heading>Hello User</Heading>
    // <Text align='right'>Logout</Text>
    // <Text>SembraCare Dashboard</Text>
    // <HStack>
    //   <Card>

    //     <CardBody>
    //       <Stack>
    //       <Button colorScheme='purple' size='md'>SembraTime</Button>
    //       <Button colorScheme='blue' size='md'>SembraSchool</Button>
    //       <Button colorScheme='red' size='md'>SembraNet</Button>
    //       <Button colorScheme='orange' size='md'>SembraCare</Button>
    //       </Stack>
    //     </CardBody>
    //   </Card>
    //   <Card>

    //     <CardBody>

    //     <Select
    //     padding='1'
    //   bg='orange'
    //   borderColor='black'
    //   color='white'
    //   placeholder='Badge Alterations'
    // />

    // <Select
    // padding='1'
    //   bg='orange'
    //   borderColor='black'
    //   color='white'
    //   placeholder='Address Latitude/Longitude'
    // />

    //     </CardBody>

    //   </Card>
    //   </HStack>
    // </SimpleGrid>
    // </Card>

    // ------------------------------
    // SembraSchool

    <Card>
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(400px, 1fr))"
      >
        <Heading>Hello User</Heading>
        <Text align="right">Logout</Text>
        <Text>SembraSchool Dashboard</Text>
        <HStack>
          <Card>
            <CardBody>
              <Stack>
                <Button colorScheme="purple" size="md">
                  SembraTime
                </Button>
                <Button colorScheme="blue" size="md">
                  SembraSchool
                </Button>
                <Button colorScheme="red" size="md">
                  SembraNet
                </Button>
                <Button colorScheme="orange" size="md">
                  SembraCare
                </Button>
              </Stack>
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

export default App;
