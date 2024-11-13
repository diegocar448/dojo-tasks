import { Flex, Box, Heading, Text, Button, Spacer, HStack } from '@chakra-ui/react'
import React from 'react'

export default function Navbar() {
  return (

    <Flex as="nav" p="10px" alignItems="center">
      <Heading as="h1">Di Tasks</Heading>
      <Spacer />           
    </Flex>
  )
}