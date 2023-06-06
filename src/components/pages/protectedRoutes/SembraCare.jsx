import React from 'react';
import {HStack,Select,SimpleGrid,Card,CardBody,Text} from "@chakra-ui/react";

export default function SembraCare() {
  return (
    <Card>
      <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(400px, 1fr))'>
        <Text>SembraCare Dashboard</Text>
        <HStack>
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
  );
}
