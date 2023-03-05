import { useState, useRef } from 'react';
import axios from 'axios';

import useStore from '@/hooks/useStore';
import { observer } from 'mobx-react';

import {
  Box,
  Text,
  Heading,
  AlertDialog,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  Textarea,
  useToast,
  Input,
} from '@chakra-ui/react';

export default observer(function FeedbackDialog() {
  const [email, setEmail] = useState('');
  const [valid, setValid] = useState(false);
  const [value, setValue] = useState('');
  const cancelRef = useRef<HTMLButtonElement>(null);

  const { dialogStore } = useStore();

  const toast = useToast();

  function isEmail(value: string) {
    const regexp = new RegExp(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
    return regexp.test(value);
  }

  function sendFeedback() {
    axios
      .post('https://api.calguksu.com/feedback', { replyEmail: email, content: value })
      .then(function (response) {
        toast({
          title: response.data.result,
          status: 'success',
          isClosable: false,
        });
      })
      .catch(function (error) {
        toast({
          title: `잠시 후 다시 시도해주세요`,
          status: 'error',
          isClosable: false,
        });
      });
    setEmail('');
    setValue('');
    setValid(false);
    dialogStore.feedbackClose();
  }

  return (
    <AlertDialog
      isOpen={dialogStore.feedback}
      leastDestructiveRef={cancelRef}
      onClose={() => {
        dialogStore.feedbackClose();
        setValid(false);
      }}
      isCentered
    >
      <AlertDialogOverlay>
        <AlertDialogContent layerStyle="selectDialog" maxW="xl" p={8} mx={6} borderRadius="18px">
          <AlertDialogCloseButton borderRadius="full" />
          <Heading fontSize="32px">제보 / 문의</Heading>
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
            <Textarea
              mt="24px"
              verticalAlign="top"
              minHeight={32}
              resize="none"
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
              }}
              placeholder="자유롭게 적어주세요! 이메일로 답장해드릴게요 :)"
              _focus={{ outline: 'none', border: '1px solid #F4E04B', shadow: 'none' }}
            />
            {value.replace(/\s/g, '').length > 0 && isEmail(email) ? (
              <Text
                as="button"
                w="100%"
                mt="26px"
                variant="buttonRadiusMdYellow"
                fontSize="20px"
                outline="none"
                onClick={() => sendFeedback()}
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
          </Box>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
});
