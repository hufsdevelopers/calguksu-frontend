import { useRef } from 'react';
import useAxios from 'axios-hooks';
import useStore from '@/hooks/useStore';
import { observer } from 'mobx-react';
import _ from 'lodash';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
dayjs.locale('ko');

import {
  Box,
  Text,
  Heading,
  AlertDialog,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  Flex,
} from '@chakra-ui/react';

interface PreviewProps {
  name: string;
  title: string;
}

interface EventType {
  calendarName: string;
  start: string;
  end: string;
  allDay: boolean;
  description: string;
}

export default observer(function PreviewDialog({ name, title }: PreviewProps) {
  const [{ data, loading, error }] = useAxios<EventType[]>(`https://api.calguksu.com/events?calendarName=${name}`);

  const { previewDialogStore } = useStore();
  const cancelRef = useRef<HTMLButtonElement>(null);

  function event2element(event: EventType) {
    const start = dayjs(event.start.replace('[Etc/UTC]', ''));
    const end = dayjs(event.end.replace('[Etc/UTC]', ''));

    return (
      <Box>
        <Box display="flex" my={4} py={2} px={3} boxShadow="base" borderRadius="md" flexDirection="column" gap={1}>
          <Heading fontSize="md">{event.description}</Heading>
          {event.allDay ? (
            <Text fontSize="sm">All Day</Text>
          ) : (
            <Text fontSize="xs">
              {start.format('YY.MM.DD')} ~ {end.format('YY.MM.DD')}
            </Text>
          )}
        </Box>
      </Box>
    );
  }

  return (
    <AlertDialog
      isOpen={previewDialogStore.isClicked}
      leastDestructiveRef={cancelRef}
      onClose={previewDialogStore.close}
      isCentered
    >
      <AlertDialogOverlay>
        <AlertDialogContent layerStyle="selectDialog" maxW="xl" p={8} mx={6}>
          <AlertDialogCloseButton borderRadius="full" />
          <Heading textAlign="center" fontSize="xl">
            📆 {title} 일정
          </Heading>
          <Box mt={6}>
            {error ? (
              <Text textAlign="center" opacity="0.5">
                🤯 오류가 발생했어요.
              </Text>
            ) : loading ? (
              <Text textAlign="center" opacity="0.5">
                ⌛ 캘린더 가져오는 중 ...
              </Text>
            ) : (
              <>
                {_.map(_.take(data, 4), (item) => event2element(item))}
                <Flex flexDirection="column" gap={1}>
                  {data && data.length > 4 && <Text textAlign="center">. . .</Text>}
                  <Text textAlign="center">총 {data?.length}개의 일정이 등록되어 있어요.</Text>
                </Flex>
              </>
            )}
          </Box>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
});
