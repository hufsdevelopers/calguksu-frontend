import { Flex, Box, Image } from '@chakra-ui/react';
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
            <Image
              src="/assets/ic_logo.png"
              width="180px"
              height="auto"
              alt="Logo"
              sx={{
                filter: 'none',
                '.chakra-ui-dark &': {
                  filter: 'invert(99%) sepia(58%) saturate(2%) hue-rotate(267deg) brightness(115%) contrast(100%)',
                },
              }}
            />
          </Flex>
        </Link>
      </Box>
    </Box>
  );
}
