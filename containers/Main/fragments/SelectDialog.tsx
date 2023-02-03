import { useState, useEffect, useRef } from 'react';

import useStore from '@/hooks/useStore';
import axios from 'axios';
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

import { CalendarType } from '@/config/types';

export default observer(function SelectDialog() {
  const [calendars, setCalendars] = useState<CalendarType[]>(Array());
  const [selectValue, setSelectValue] = useState<String | null>(null);
  const { dialogStore } = useStore();
  const cancelRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    axios
      .get<CalendarType[]>('/api/calendars')
      .then(({ data }) => {
        setCalendars(data);
        setSelectValue(data[0].name);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <AlertDialog isOpen={dialogStore.isClicked} leastDestructiveRef={cancelRef} onClose={dialogStore.click} isCentered>
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
          >
            {calendars.length > 0 &&
              calendars.map((calendar) => (
                <option key={calendar.calendarId} value={calendar.name}>
                  {calendar.title}
                </option>
              ))}
          </Select>
          {selectValue ? (
            <Link href={`/calendar/${selectValue}`}>
              <Text variant="dialogButton" onClick={dialogStore.click}>
                구독하기
              </Text>
            </Link>
          ) : (
            <Text
              variant="dialogButton"
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
              새로고침 후 다시 시도해주세요
            </Text>
          )}
          <Text mt={6} textAlign="center" fontSize="sm">
            원하는 캘린더가 없으신가요? <Link href="">여기</Link>를 눌러 제보해주세요!
          </Text>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
});
