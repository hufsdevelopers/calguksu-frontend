import Image from 'next/legacy/image';
import Link from '@/components/Link';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';

export default function Error() {
  return (
    <Box maxW="container.lg" h="100%" mx="auto" px={6}>
      <Box position="relative" h="65%" mt={3}>
        <Image
          src="/assets/image_error_boy.png"
          layout="fill"
          objectFit="contain"
          priority={true}
          alt="Laptop Boy Image"
          draggable={false}
          style={{ userSelect: 'none', pointerEvents: 'none' }}
        />
      </Box>
      <Flex mt={4} flexDirection="column" gap={2} alignItems="center">
        <Heading fontSize="3xl" textAlign="center">
          그럴리가 없는데... 😥
        </Heading>
        <Text>다시 시도해주시고, 문제가 지속될 시 신고해주세요!</Text>
        <Link href="/" display="block" mt={6}>
          <Text as="button" px={12} variant="buttonRadiusMd" outline="none">
            돌아가기
          </Text>
        </Link>
      </Flex>
    </Box>
  );
}
