import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Badge
} from '@chakra-ui/react';

export default function Card({cover,title,author,tags,date}) {
  return (
    <Center py={6}>
      <Box
        maxW={'445px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}>
        <Box
          h={'210px'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}>
           <img src={cover} alt="pepo"/>
        </Box>
        <Stack>
          <Text
            color={'green.500'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            letterSpacing={1.1}>
            {tags}
          </Text>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}>
             {title}
          </Heading>
          <Text fontSize="xl" fontWeight="bold">
            Tags: 
            <Badge ml="1" fontSize="0.8em" colorScheme="red">
              {tags}
            </Badge>
          </Text>
        </Stack>
        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
            <Text fontWeight={600}>Nick Sirbiladze</Text>
            <Text color={'gray.500'}>{date}· 6min read</Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}