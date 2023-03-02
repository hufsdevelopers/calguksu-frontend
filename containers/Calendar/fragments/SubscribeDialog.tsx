import { useState, useRef } from 'react';
import axios from 'axios';
import useStore from '@/hooks/useStore';
import { observer } from 'mobx-react';

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

interface subscribeProps {
  calendarName: string;
}

export default observer(function SubscribeDialog({ calendarName }: subscribeProps) {
  const [email, setEmail] = useState('');

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
      .post('https://api.calguksu.com/subscribe', { email, calendarName })
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
    dialogStore.subscribeClose();
  }

  return (
    <AlertDialog
      isOpen={dialogStore.subscribe}
      leastDestructiveRef={cancelRef}
      onClose={dialogStore.subscribeClose}
      isCentered
    >
      <AlertDialogOverlay>
        <AlertDialogContent layerStyle="selectDialog" maxW="xl" p={8} mx={6}>
          <AlertDialogCloseButton borderRadius="full" />
          <Heading textAlign="center" fontSize="xl">
            배달요청
          </Heading>
          <Box mt={6}>
            <Input
              _focus={{ border: '1px solid #757575', shadow: 'none' }}
              borderWidth="1px"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              isInvalid={!isEmail(email)}
              placeholder="example@calguksu.com"
              type="email"
              value={email}
            />
            {isEmail(email) ? (
              <Text
                as="button"
                w="100%"
                mt={4}
                variant="buttonRadiusMdYellow"
                outline="none"
                onClick={() => sendEmail()}
              >
                🏍️ 이 주소로 배달할게요!
              </Text>
            ) : (
              <Text
                as="button"
                w="100%"
                mt={4}
                variant="buttonRadiusMd"
                outline="none"
                color="dark.500"
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
                🤗 주소를 입력해주세요!
              </Text>
            )}
          </Box>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
});
