import {
  Box,
  chakra,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
  Heading
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { FaInstagram,FaMedium, FaGithub, FaPhone } from 'react-icons/fa';

const SocialButton = ({
  children,
  label,
  href,
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export default function LargeWithNewsletter() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
          spacing={8}>
          <Stack spacing={6}>
            <Box>
              Nick Sirbiladze
            </Box>
            <Text fontSize={'sm'}>
              © 2020 Nick Sirbiladze. All rights reserved
            </Text>
            <Stack direction={'row'} spacing={6}>
              <SocialButton label={'Github'} href={'https://github.com/Nicolooo'}>
                <FaGithub />
              </SocialButton>
              <SocialButton label={'Email'} href={'mailto:nicolosirbiladze@gmail.com'}>
                <FaPhone />
              </SocialButton>
              <SocialButton label={'Instagram'} href={'https://www.instagram.com/nikushasirbiladze_/'}>
                <FaInstagram />
              </SocialButton>
              <SocialButton label={'Medium'} href={'https://dustinmsk.medium.com/'}>
                <FaMedium/>
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            <Link href={'#pric'}>Pricing</Link>
            <Link href={'https://dustinmsk.medium.com/'}>Medium</Link>
            <Link href={'/posts'}>Blog</Link>
            <Link href={'#aa'}>Portfolio</Link>
            <Link href={'mailto:nicolosirbiladze@gmail.com'}>Email</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Support</ListHeader>
            <Link href={'https://www.instagram.com/nikushasirbiladze_/'}>Help Center</Link>
            <Link href={'#'}>Terms of Service</Link>
            <Link href={'#'}>Legal</Link>
            <Link href={'#'}>Privacy Policy</Link>
            <Link href={'https://www.instagram.com/nikushasirbiladze_/'}>Status</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Stay up to date</ListHeader>
            <Stack direction={'row'}>
              <Heading>Active</Heading>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}