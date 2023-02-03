import { Flex, Box, Heading, Text, Button } from '@chakra-ui/react';
import Link from '@/components/Link';

export default function Header() {
  return (
    <Box as="header" position="fixed" w="100%">
      <Box
        display="flex"
        mx="auto"
        px={6}
        maxW="container.lg"
        h={20}
        alignItems="center"
        justifyContent="space-between"
      >
        <Link href="/" variant="branding">
          <Flex alignItems="end" userSelect="none" draggable="false">
            <Heading as="h1" variant="branding" fontFamily="branding" fontWeight="extrabold" fontSize="1.3rem">
              CALGUKSU
            </Heading>
          </Flex>
        </Link>
      </Box>
    </Box>
  );
}
