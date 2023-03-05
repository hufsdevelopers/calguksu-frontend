import { useState, useRef, ChangeEvent } from 'react';

import useStore from '@/hooks/useStore';
import { observer } from 'mobx-react';

import {
  Box,
  Flex,
  Text,
  Heading,
  AlertDialog,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogOverlay,
} from '@chakra-ui/react';

import { CalendarListType, CalendarResultType } from '@/config/types';

export default observer(function SelectDialog() {
  const [calendars, setCalendars] = useState<CalendarResultType[]>([]);
  const cancelRef = useRef<HTMLButtonElement>(null);

  const { dialogStore } = useStore();

  function showFeedbackDialog() {
    dialogStore.selectClose();
    dialogStore.feedbackShow();
  }

  function showDeliveryDialog() {
    dialogStore.selectClose();
    dialogStore.deliveryShow();
  }

  return (
    <AlertDialog
      isOpen={dialogStore.select}
      leastDestructiveRef={cancelRef}
      onClose={dialogStore.selectClose}
      isCentered
    >
      <AlertDialogOverlay>
        <AlertDialogContent layerStyle="selectDialog" maxW="xl" p="32px" mx={6} borderRadius="18px">
          <AlertDialogCloseButton borderRadius="full" />
          <Heading fontSize="32px">🎯 학교를 골라요</Heading>
          <Flex
            mt="46px"
            py={4}
            borderRadius="8px"
            bgColor="rgba(244, 224, 75, 0.07)"
            borderWidth="1px"
            borderColor="rgba(244, 224, 75, 0.35)"
            alignItems="center"
          >
            <Box ml="22px">
              <Heading as="p" fontSize="20px" color="#403800" sx={{ '.chakra-ui-dark &': { color: '#FEFCED' } }}>
                한국외국어대학교
              </Heading>
              <Text
                color="#BBA610"
                fontSize="14px"
                wordBreak="keep-all"
                sx={{ '.chakra-ui-dark &': { color: '#BBA610' } }}
              >
                아직 한국외국어대학교만 고를 수 있어요.
              </Text>
            </Box>
          </Flex>
          {}
          <Text
            as="button"
            w="100%"
            mt="26px"
            variant="buttonRadiusMdYellow"
            fontSize="20px"
            outline="none"
            onClick={() => showDeliveryDialog()}
          >
            조리할게요
          </Text>
          <Flex alignItems="center" justifyContent="center">
            <Text as="span" display="block" mt={6} fontSize="14px" textAlign="center" wordBreak="keep-all">
              본인이 다니고 있는 학교가 없다면&nbsp;
              <Text variant="opacity" display="inline-block" onClick={showFeedbackDialog}>
                <u>이쪽</u>
              </Text>
              에서 신청하세요
            </Text>
          </Flex>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
});
