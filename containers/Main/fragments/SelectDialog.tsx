import { useState, useRef } from 'react';
import useAxios from 'axios-hooks';

import useStore from '@/hooks/useStore';
import { observer } from 'mobx-react';

import {
  Text,
  Heading,
  AlertDialog,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  Select,
} from '@chakra-ui/react';
import Link from '@/components/Link';

import { CalendarProps } from '@/config/types';

export default observer(function SelectDialog() {
  const [{ data, loading, error }] = useAxios<CalendarProps[]>('https://api.calguksu.com/calendars');

  const [calendars, setCalendars] = useState<CalendarProps[]>([]);
  const [selectValue, setSelectValue] = useState<String | null>(null);
  const { selectDialogStore } = useStore();
  const cancelRef = useRef<HTMLButtonElement>(null);

  if (!loading && !error && data && calendars.length == 0) {
    setCalendars(data);
    setSelectValue(data[0].name);
  }

  return (
    <AlertDialog
      isOpen={selectDialogStore.isClicked}
      leastDestructiveRef={cancelRef}
      onClose={selectDialogStore.click}
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
              🤯 오류가 발생했어요.
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
              <Text mt={4} variant="buttonRadiusMd" onClick={selectDialogStore.click}>
                🧑‍🍳 이 캘린더를 조리할게요!
              </Text>
            </Link>
          )}
          <Text mt={6} textAlign="center" fontSize="sm">
            원하는 캘린더가 없으신가요? <Link href="">여기</Link>를 눌러 제보해주세요!
          </Text>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
});
