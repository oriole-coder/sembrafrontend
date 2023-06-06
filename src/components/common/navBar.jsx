import React from 'react';
import { Card, CardBody, Stack, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <Card>
            <CardBody>
                <Stack>
                    <Button colorScheme="purple" size="md">
                        <Link to='/sembratime'>SembraTime</Link>
                    </Button>
                    <Button colorScheme="blue" size="md">
                        <Link to='/sembraschool'>SembraSchool</Link>
                    </Button>
                    <Button colorScheme="red" size="md">
                        <Link to='/sembranet'>SembraNet</Link>
                    </Button>
                    <Button colorScheme="orange" size="md">
                        <Link to='/sembracare'>SembraCare</Link>
                    </Button>
                </Stack>
            </CardBody>
        </Card>
    );
};