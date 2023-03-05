import { useRouter } from 'next/router';
import { useRef, useEffect, useState } from 'react';

import { Box, Flex, Text, Heading, Tabs, TabList, TabPanels, Tab, TabPanel, useToast } from '@chakra-ui/react';
import Link from '@/config/components/Link';

interface PageProps {
  userAgent: string;
}

export default function Subscription({ userAgent }: PageProps) {
  const ref = useRef(null);
  const [isWebkit, setIsWebkit] = useState(false);
  const [ct, setCt] = useState('');
  const [cn, setCn] = useState('');

  const router = useRouter();

  useEffect(() => {
    if (router.query.cn && router.query.ct) {
      setCt(router.query.ct.toString());
      setCn(router.query.cn.toString());
    } else {
      router.push('/subscription-invalid');
    }
  }, [router]);

  useEffect(() => {
    import('@lottiefiles/lottie-player');
  });

  const toast = useToast();

  if ((userAgent.includes('iPhone') || userAgent.includes('Macintosh')) && !isWebkit) setIsWebkit(true);

  function copyToClipboard() {
    var textField = document.createElement('textarea');
    textField.innerText = `https://api.calguksu.com/calendars/${cn}/subscribe?token=${ct}`;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();

    toast({
      title: `복사되었습니다!`,
      status: 'success',
      isClosable: false,
    });
  }

  return (
    <>
      {cn !== '' && ct !== '' && (
        <Box maxW="container.lg" mx="auto" px={6}>
          <Flex my={12} flexDirection="column" alignItems="center" gap={1}>
            <Box width="256px" height="256px">
              <lottie-player
                ref={ref}
                autoplay
                mode="normal"
                src="https://assets6.lottiefiles.com/packages/lf20_m00cedtl.json"
              />
            </Box>
            <Heading mt={8} fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              띵! 다 됐어요
            </Heading>
          </Flex>
          <Tabs variant="soft-rounded" align="center" mt={8} defaultIndex={isWebkit ? 0 : 1}>
            <TabList>
              <Tab px={8} mx={1} color="dark.600">
                애플 캘린더
              </Tab>
              <Tab px={8} mx={1} color="dark.600">
                구글 캘린더
              </Tab>
            </TabList>
            <TabPanels mt={3}>
              <TabPanel>
                <Box>
                  <Text textAlign="left">
                    아래의 링크를 클릭하여 나타나는 애플 캘린더에서 구독 캘린더를 추가해주세요.
                  </Text>
                  <Box
                    display="block"
                    as="a"
                    href={`webcal://api.calguksu.com/calendars/${cn}/subscribe?token=${ct}`}
                    target="_blank"
                    layerStyle="button"
                  >
                    구독하기
                  </Box>
                </Box>
              </TabPanel>
              <TabPanel>
                <Box textAlign="left">
                  <Heading fontSize="lg">1. 캘린더 구독 주소 복사</Heading>
                  <Text mt={2}>구글 캘린더에 붙여넣을 구독 주소를 아래의 버튼을 눌러 복사하세요.</Text>
                  <Box
                    as="button"
                    layerStyle="button"
                    onClick={() => {
                      copyToClipboard();
                    }}
                  >
                    복사하기
                  </Box>
                  <Text mt={4} fontSize="xs">
                    복사가 안 된다면{' '}
                    <u>
                      <Text
                        display="inline-block"
                        id="copy"
                      >{`https://api.calguksu.com/calendars/${cn}/subscribe?token=${ct}`}</Text>
                    </u>
                    를 복사하세요
                  </Text>
                  <Text
                    mt={2}
                    color="red.400"
                    sx={{
                      '.chakra-ui-dark &': {
                        color: 'red.400',
                      },
                    }}
                  >
                    위 링크를 다른 사람에게 절대 공유하지 마세요. 개인에게 발급된 고유 링크입니다.
                  </Text>
                  <Heading mt={12} fontSize="lg">
                    2. 구글 캘린더 URL 구독
                  </Heading>
                  <Text mt={2}>
                    <Link href="https://calendar.google.com/" target="_blank" isExternal>
                      <u>여기</u>
                    </Link>
                    를 눌러 구글 캘린더에 접속한 후, 아래의 영상을 따르세요.
                  </Text>
                  <Text
                    mt={2}
                    color="red.400"
                    sx={{
                      '.chakra-ui-dark &': {
                        color: 'red.400',
                      },
                    }}
                  >
                    구글 캘린더 등록은 <u>PC</u>에서만 가능합니다!
                  </Text>
                  <Box mt={8}>
                    <video controls height="180">
                      <source
                        src="https://firebasestorage.googleapis.com/v0/b/calendarguksu.appspot.com/o/calendar-google-guide.mp4?alt=media&token=9a9aa26a-9c29-4fbe-b612-e22fd30b7707"
                        type="video/mp4"
                      />
                    </video>
                  </Box>
                </Box>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      )}
    </>
  );
}
