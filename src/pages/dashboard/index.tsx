import { Heading, Text, Container, Box } from "@chakra-ui/react"

export default function index(){

    const boxStyles = {
        p: "10px",        
        bg: "purple.400",
        color: "white",
        m: "10px",
        textAlign: "center",
        filter: 'blur(2px)',
        _hover: {
            color: 'black',
            bg: 'blue.200'
        }
    }

    return (
        <Container as="section" maxWidth="4x1" py="20px">
            <Heading my="30px" p="10px">
                Chakra UI Components                   
            </Heading>
            <Text marginLeft="30px">
                Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
            </Text>
            <Text ml="30px" color="blue.500" fontWeight="bold">
                Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
            </Text>

            <Box my="30px" p="20px" bg="orange">
                <Text>
                    This is Box
                </Text>
            </Box>
           
            <Box {...boxStyles}>
                <Text>Hey people</Text>
            </Box>
        </Container>
    );
}