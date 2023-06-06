import React from 'react';
import {HStack,Select,SimpleGrid,Card,CardBody,Text} from "@chakra-ui/react";

export default function SembraNet() {
  return (
    <Card>
      <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(400px, 1fr))'>
        <Text>SembraNet Dashboard</Text>
        <HStack>
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