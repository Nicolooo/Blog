import {
  Button,
  FormControl,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { EmailIcon} from '@chakra-ui/icons'
export default function ForgotPasswordForm() {
  return (
    <Flex
      minH={'10vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack
        spacing={4}
        w={'full'}
        maxW={'md'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={12}>
        <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
          Wanna make Something?
        </Heading>
        <Text
          fontSize={{ base: 'sm', sm: 'md' }}
          color={useColorModeValue('gray.800', 'gray.400')}>
          Contact Me via email and lets have a meeting
        </Text>
        <a href="mailto:nicolosirbiladze@gmail.com">   
        <Stack spacing={6}>
           <Button leftIcon={<EmailIcon />} colorScheme="teal" variant="solid">
                Mail
            </Button>
        </Stack>
        </a>
      </Stack>
    </Flex>
  );
}