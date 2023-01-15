import { Flex, Box, Heading, Text, Button } from '@chakra-ui/react';
import Link from '@/components/Link';

export default function Header() {
  return (
    <Box as="nav" position="fixed" w="100%">
      <Box
        display="flex"
        mx="auto"
        px={6}
        maxW="container.lg"
        h={28}
        alignItems="center"
        justifyContent="space-between"
      >
        <Link variant="branding" href="/">
          <Flex alignItems="end" userSelect="none" draggable="false">
            <Heading as="h1" mb="-1px" fontFamily="branding" fontWeight="extrabold" fontSize="1.3rem">
              Calendar&nbsp;
            </Heading>
            <Text fontFamily="branding" fontSize="0.8rem">
              by hufsdevelopers.
            </Text>
          </Flex>
        </Link>
        <Link href="webcal://ririnto.asuscomm.com:8082/home.ics" variant="button">
          구독하기
        </Link>
      </Box>
    </Box>
  );
}
