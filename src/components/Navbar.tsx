import { Flex, Box, Heading, Text, Button, Spacer, HStack } from '@chakra-ui/react'
import React from 'react'

export default function Navbar() {
  return (

    <Flex as="nav" p="10px" alignItems="center">
      <Heading as="h1">Di Tasks</Heading>
      <Spacer />

      <HStack spacing="20px">
        <Box bg="gray.200" color="black" p="10px">M</Box>
        <Text>diego@dreams.dev</Text>
        <Button bg="purple" color="white">Logout</Button>
      </HStack>      
    </Flex>
  )
}