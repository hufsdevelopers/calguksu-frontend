import NextImage from 'next/image';
import { Grid, Flex, Box, Text, Heading } from '@chakra-ui/react';
import { observer } from 'mobx-react';
import useStore from '@/hooks/useStore';

export default observer(function Introduce() {
  const { dialogStore } = useStore();
  console.log(dialogStore.isClicked);

  return (
    <Box as="section">
      <Grid templateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }} maxW="container.lg" mx="auto" px={6}>
        <Flex
          flexDirection="column"
          pt={{ base: 6, md: 24, lg: 40 }}
          pb={{ base: 0, lg: 40 }}
          justifyContent="center"
          gap="8px"
          zIndex="overlay"
        >
          <Flex flexDirection="column" ml="-2px" gap="2px">
            <Heading display="inline-block" fontWeight="normal">
              일일이 홈페이지에
            </Heading>
            <Heading>접속하는건 귀찮으니까요.</Heading>
          </Flex>
          <Text fontSize="1.1rem">칼국수닷컴에서 원하는 캘린더를 구독해보세요!</Text>
          <Box as="button" layerStyle="button" onClick={dialogStore.click}>
            시작하기
          </Box>
        </Flex>
        <Flex pos="relative" w="100%" minH={80} right="0" alignItems="center" justifyContent="center">
          <NextImage
            src="/assets/images/searching.svg"
            fill
            objectFit="contain"
            alt="Searching Image"
            draggable={false}
            style={{ userSelect: 'none', pointerEvents: 'none' }}
          />
        </Flex>
      </Grid>
    </Box>
  );
});
