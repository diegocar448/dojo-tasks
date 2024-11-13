import Navbar from "@/components/Navbar";
import { Provider } from "@/components/ui/provider";
import { Html, Head, Main, NextScript } from "next/document";


export default function Document() {
  return (
    <Html suppressHydrationWarning>
      <Head />
      <Provider>
      <body className="antialiased">        
        <Navbar />
        <Main />
        <NextScript />        
      </body>
      </Provider>
    </Html>
  );
}
