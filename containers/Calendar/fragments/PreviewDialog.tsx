import { useState, useRef } from 'react';
import useAxios from 'axios-hooks';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
dayjs.locale('ko');

import useStore from '@/hooks/useStore';
import { observer } from 'mobx-react';

import {
  Text,
  Heading,
  AlertDialog,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
} from '@chakra-ui/react';
import Link from '@/components/Link';

interface PreviewProps {
  name: string;
}

export default observer(function PreviewDialog({ name }: PreviewProps) {
  const time = dayjs();
  const [year, setYear] = useState(time.get('year'));
  const [month, setMonth] = useState(time.get('month'));

  const [{ data, loading, error }] = useAxios(
    `https://api.calguksu.com/events?calendarName=${name}&year=${year}&month=${month}`,
  );

  const { previewDialogStore } = useStore();
  const cancelRef = useRef<HTMLButtonElement>(null);

  return (
    <AlertDialog
      isOpen={previewDialogStore.isClicked}
      leastDestructiveRef={cancelRef}
      onClose={previewDialogStore.click}
      isCentered
    >
      <AlertDialogOverlay>
        <AlertDialogContent layerStyle="selectDialog" maxW="xl" p={8} mx={6}>
          <AlertDialogCloseButton borderRadius="full" />
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
});
