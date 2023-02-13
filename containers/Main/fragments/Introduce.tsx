import NextImage from 'next/legacy/image';
import { Grid, Flex, Box, Text, Heading } from '@chakra-ui/react';
import useStore from '@/hooks/useStore';

export default function Introduce() {
  const { selectDialogStore } = useStore();

  return (
    <Grid
      templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
      maxW="container.lg"
      h="100%"
      mx="auto"
      px={6}
      pt={{ base: 6, md: 0 }}
      gap={{ base: 8, md: 0 }}
    >
      <Flex flexDirection="column" justifyContent="center" gap="8px">
        <Flex flexDirection="column" ml="-2px" gap="2px">
          <Heading display="inline-block" fontWeight="normal">
            매번 홈페이지에
          </Heading>
          <Heading>접속하는건 귀찮으니까요</Heading>
        </Flex>
        <Text fontSize="1.1rem">칼국수닷컴에서 원하는 캘린더를 구독해보세요!</Text>
        <Box as="button" layerStyle="button" onClick={selectDialogStore.show}>
          시작하기
        </Box>
      </Flex>
      <Flex pos="relative" w="100%" minH={80} alignItems="center" justifyContent="center">
        <NextImage
          src="/assets/images/laptop-boy.png"
          layout="fill"
          objectFit="contain"
          priority={true}
          alt="Laptop Boy Image"
          draggable={false}
          style={{ userSelect: 'none', pointerEvents: 'none' }}
        />
      </Flex>
    </Grid>
  );
}
