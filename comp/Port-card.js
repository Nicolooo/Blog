import { Box,Button } from "@chakra-ui/react"
import { Image } from "@chakra-ui/image"
import { Badge, Center, Heading } from "@chakra-ui/layout"
import { StarIcon } from "@chakra-ui/icons"
export default function AirbnbExample({title,tags,link,ph}) {
  const property = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  }

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" pb={10}>
      <Center>
        <Image src={ph} alt={property.imageAlt} maxHeight={200} maxW={400}/>
      </Center>
      <Box p="6">
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
         <Heading>{title}</Heading>
        </Box>

        <Box>
        
          <Box as="span" color="gray.600" fontSize="sm">
        Role: {tags}  
          </Box>
        </Box>

        <Box display="flex" mt="2" alignItems="center">
          <a href={link}>
          <Button colorScheme="teal" variant="outline">
              Visit Website
          </Button>
          </a>
        </Box>
      </Box>
    </Box>
  )
}