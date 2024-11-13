import Navbar from "@/components/Navbar";
import { Box, Flex, SimpleGrid } from "@chakra-ui/react";


export default function index(){
    
    return (        
        <Flex>
            <Box
                bg="purple.400"
                minHeight="100vh"
                w="200px"
                p="10px"
                borderRight="1px solid gray"
            >
                <Navbar />
            </Box>
            <Box flex="1">
                <SimpleGrid gap={10} padding={10} minChildWidth="250px">
                    <Box bg="white" h="200px" border="1px solid"></Box>
                    <Box bg="white" h="200px" border="1px solid"></Box>
                    <Box bg="white" h="200px" border="1px solid"></Box>
                    <Box bg="white" h="200px" border="1px solid"></Box>
                    
                    <Box bg="white" h="200px" border="1px solid"></Box>
                    <Box bg="white" h="200px" border="1px solid"></Box>
                    <Box bg="white" h="200px" border="1px solid"></Box>
                    <Box bg="white" h="200px" border="1px solid"></Box>
                </SimpleGrid>
            </Box>
      </Flex>
    );
}