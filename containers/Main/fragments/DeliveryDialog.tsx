import { useState, useRef } from 'react';
import axios from 'axios';
import useStore from '@/hooks/useStore';
import { observer } from 'mobx-react';

import Link from '@/components/Link';
import {
  Box,
  Text,
  Heading,
  Input,
  AlertDialog,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  useToast,
} from '@chakra-ui/react';

export default observer(function DeliveryDialog() {
  const [email, setEmail] = useState('');
  const [valid, setValid] = useState(false);

  const { dialogStore } = useStore();
  const cancelRef = useRef<HTMLButtonElement>(null);

  const toast = useToast();

  function isEmail(value: string) {
    const regexp = new RegExp(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
    return regexp.test(value);
  }

  function sendEmail() {
    axios
      .post('https://api.calguksu.com/subscribe', { email, calendarName: 'hufsofficial' })
      .then(function (response) {
        toast({
          title: `메일을 확인해주세요!`,
          status: 'success',
          isClosable: false,
        });
      })
      .catch(function (error) {
        toast({
          title: `${error.response.data.result}`,
          status: 'error',
          isClosable: false,
        });
      });
    setEmail('');
    setValid(false);
    dialogStore.deliveryClose();
  }

  return (
    <AlertDialog
      isOpen={dialogStore.delivery}
      leastDestructiveRef={cancelRef}
      onClose={() => {
        dialogStore.deliveryClose();
        setValid(false);
      }}
      isCentered
    >
      <AlertDialogOverlay>
        <AlertDialogContent layerStyle="selectDialog" maxW="xl" p={8} mx={6} borderRadius="18px">
          <AlertDialogCloseButton borderRadius="full" />
          <Heading fontSize="32px">이메일 주소 입력</Heading>
          <Box mt="46px">
            <Input
              h="60px"
              _focus={{ border: '1px solid #F4E04B', shadow: 'none' }}
              borderWidth="1px"
              onChange={(e) => {
                setEmail(e.target.value);
                if (isEmail(email)) setValid(true);
              }}
              isInvalid={valid && !isEmail(email)}
              placeholder="example@calguksu.com"
              type="email"
              value={email}
            />
            {isEmail(email) ? (
              <Text
                as="button"
                w="100%"
                mt="26px"
                variant="buttonRadiusMdYellow"
                outline="none"
                fontSize="20px"
                onClick={() => sendEmail()}
              >
                이 주소로 받을게요
              </Text>
            ) : (
              <Text
                as="button"
                w="100%"
                mt="26px"
                variant="buttonRadiusMd"
                outline="none"
                color="dark.500"
                fontSize="20px"
                _hover={{ bgColor: 'dark.300' }}
                sx={{
                  '.chakra-ui-dark &': {
                    color: 'whiteAlpha.500',
                    bgColor: 'whiteAlpha.200',
                    _hover: {
                      bgColor: 'whiteAlpha.200',
                    },
                  },
                }}
              >
                이 주소로 받을게요
              </Text>
            )}
            <Text mt={4} fontSize="14px" textAlign="center" wordBreak="keep-all">
              캘린더를 구독하면 칼국수닷컴의&nbsp;
              <Link href="/policies/privacy" target="_blank" isExternal>
                개인정보 처리방침
              </Link>
              과&nbsp;
              <Link href="/policies/agreement-marketing" target="_blank" isExternal>
                마케팅 광고 수신
              </Link>
              에 동의하는 것으로 간주됩니다.
            </Text>
          </Box>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
});
