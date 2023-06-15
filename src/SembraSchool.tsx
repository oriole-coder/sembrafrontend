import { Alert, AlertIcon, InputGroup, InputLeftAddon, Center, Button, Stack, Divider, Input, Box, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, HStack, Select, SimpleGrid, Card, CardBody, Text } from "@chakra-ui/react";
import "./App.css";
import Header from './Header'
import NavBar from './NavBar'



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
          <NavBar />
        <Accordion allowToggle>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          Check User Permissions
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      <Stack>
      <HStack><p>Username:</p>
    
    <Input placeholder='sss10137' />
    </HStack>
    <HStack>
    <p>Permissions:</p>
    <Select placeholder='Select option'>
  <option value='Caregiver'>Option 1</option>
  <option value='Admin'>Option 2</option>
  <option value='Owner'>Option 3</option>
</Select>
    </HStack>
    
    </Stack>
    <Stack spacing={3}>
  <Alert status='error'>
    <AlertIcon />
    There was an error processing your request
  </Alert>

  <Alert status='success'>
    <AlertIcon />
    Success - sss100137
  </Alert>

</Stack>
    
    <Button colorScheme='blue'>Search</Button>

    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          Possible Duplicate Box
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          Check User Group
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
</Accordion>
</HStack>
      </SimpleGrid>
    </Card>
  );
}

export default SembraSchool;
