import Navbar from "@/components/Navbar";
import { Provider } from "@/components/ui/provider";
import { Box, Grid, GridItem, HStack, Text, Button } from "@chakra-ui/react";
import { Html, Head, Main, NextScript } from "next/document";


export default function Document() {
  return (
    <Html suppressHydrationWarning>
      <Head />
      <body className="antialiased">  
        <Provider>
          <Grid templateColumns="repeat(6. 1fr)" bg="gray.50">          
            <HStack justifyContent="flex-end" alignItems="center" bg="black">
              <Box bg="gray.200" color="black" p="10px">M</Box>
              <Text>diego@dreams.dev</Text>
              <Button bg="purple" color="white">Logout</Button>
            </HStack> 
            <Main />
            <NextScript />            
          </Grid>
        </Provider>
      </body>
    </Html>
  );
}
