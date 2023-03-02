import { useState, useRef } from 'react';
import useAxios from 'axios-hooks';

import useStore from '@/hooks/useStore';
import { observer } from 'mobx-react';

import {
  Flex,
  Text,
  Heading,
  AlertDialog,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  Select,
} from '@chakra-ui/react';
import Link from '@/components/Link';

import { CalendarListType, CalendarResultType } from '@/config/types';

export default observer(function SelectDialog() {
  const [{ data, loading, error }] = useAxios<CalendarListType>('https://api.calguksu.com/calendars');

  const [calendars, setCalendars] = useState<CalendarResultType[]>([]);
  const [selectValue, setSelectValue] = useState<String | null>(null);
  const cancelRef = useRef<HTMLButtonElement>(null);

  const { dialogStore } = useStore();

  if (!loading && !error && data?.successful && calendars.length == 0) {
    setCalendars(data.result);
    setSelectValue(data?.result[0].name);
  }

  function showReportDialog() {
    dialogStore.selectClose();
    dialogStore.reportShow();
  }

  return (
    <AlertDialog
      isOpen={dialogStore.select}
      leastDestructiveRef={cancelRef}
      onClose={dialogStore.selectClose}
      isCentered
    >
      <AlertDialogOverlay>
        <AlertDialogContent layerStyle="selectDialog" maxW="xl" p={8} mx={6}>
          <AlertDialogCloseButton borderRadius="full" />
          <Heading textAlign="center" fontSize="xl">
            👋 📅 🔥
          </Heading>
          <Heading mt={3} textAlign="center" fontSize="xl">
            캘린더를 선택해볼까요?
          </Heading>
          <Select
            mt={6}
            _focus={{ border: '1px solid #757575', shadow: 'none' }}
            onChange={(e) => {
              setSelectValue(e.target.value);
            }}
            sx={{ option: { '.chakra-ui-dark &': { bg: 'dark.700' } } }}
          >
            {calendars.length > 0 &&
              calendars.map((calendar) => (
                <option key={calendar.calendarId} value={calendar.name}>
                  {calendar.title}
                </option>
              ))}
          </Select>
          {error ? (
            <Text
              mt={4}
              variant="buttonRadiusMd"
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
              🤯 오류가 발생했어요
            </Text>
          ) : loading ? (
            <Text
              mt={4}
              variant="buttonRadiusMd"
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
              ⌛ 캘린더 가져오는 중 ...
            </Text>
          ) : (
            <Link href={`/calendar/${selectValue}`}>
              <Text mt={4} variant="buttonRadiusMdYellow" onClick={dialogStore.selectClose}>
                🧑‍🍳 이 캘린더를 조리할게요!
              </Text>
            </Link>
          )}
          <Flex alignItems="center" justifyContent="center">
            <Text as="span" display="block" mt={6} fontSize="sm" textAlign="center" wordBreak="keep-all">
              원하는 캘린더가 없으신가요?&nbsp;
              <Text variant="opacity" display="inline-block" onClick={showReportDialog}>
                <u>여기</u>
              </Text>
              를 눌러 제보해주세요!
            </Text>
          </Flex>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
});
