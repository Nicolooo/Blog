import '../styles/globals.css'
import { ChakraProvider } from "@chakra-ui/react"
import Footer from '../comp/Footer'
import Navbar from '../comp/Navbar'
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  )
}
export default MyApp