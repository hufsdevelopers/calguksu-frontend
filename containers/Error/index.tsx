import Image from 'next/legacy/image';
import Link from '@/components/Link';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';

export default function Error() {
  return (
    <Box maxW="container.lg" h="100%" mx="auto" px={6}>
      <Box position="relative" h="65%" mt={4}>
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
        <Text>
          다시 시도해보시고, 문제가 지속된다면&nbsp;
          <Link href="mailto:support@hufsdevelopers.org" isExternal>
            <u>여기</u>
          </Link>
          로 알려주세요!
        </Text>
        <Link href="/" display="block" mt={6}>
          <Text as="button" px={6} variant="buttonRadiusMd" outline="none">
            ← 돌아가기
          </Text>
        </Link>
      </Flex>
    </Box>
  );
}
