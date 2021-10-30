import React from 'react'
import { SimpleGrid,Container,Heading  } from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"

import AirbnbExample from './Port-card'
const breakpoints = createBreakpoints({
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
})
const Portfolio = () => {
    return (
        <Container maxW={'100%'} pt={10} id="aa">
            <Heading align={'center'} pb={10} fontSize={52} as={'h3'}>Portfolio</Heading>
      <SimpleGrid columns={[1, null, 4]} spacing={1} pl={{ base: "3px", md: "20px", lg: "55px" }}>
        <AirbnbExample title={'Good Choice'} tags={'Lead Developer'} link={"http://goodchoice.ge/"} ph={"http://goodchoice.ge/wp-content/uploads/2020/10/15-1-scaled.jpg"}/>
        <AirbnbExample title={'Georgian Liberty'} tags={'Co-founder'} link={"https://www.georgianliberty.support/"} ph={"https://www.georgianliberty.support/wp-content/uploads/2021/09/Untitled-1111-1.png"}/>
        <AirbnbExample title={'Cd Concierge'} tags={'Lead Developer'} link={"https://new.cdconcierge.com/"} ph={"https://new.cdconcierge.com/wp-content/uploads/2021/05/CD-Concierge-Logo-PNG-small.png"}/>
        <AirbnbExample title={'Dasa'} tags={'Lead Developer'} link={"https://dasa.ge/"} ph={"https://dasa.ge/wp-content/uploads/2021/02/dasa_png-1-768x640.png"}/>
        </SimpleGrid>
        </Container>
    )
}

export default Portfolio
