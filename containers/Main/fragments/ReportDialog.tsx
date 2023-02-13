import { useRef } from 'react';
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

export default observer(function ReportDialog() {
  const { reportDialogStore } = useStore();
  const cancelRef = useRef<HTMLButtonElement>(null);

  return (
    <AlertDialog
      isOpen={reportDialogStore.isClicked}
      leastDestructiveRef={cancelRef}
      onClose={reportDialogStore.close}
      isCentered
    >
      <AlertDialogOverlay>
        <AlertDialogContent layerStyle="selectDialog" maxW="xl" p={8} mx={6}>
          <AlertDialogCloseButton borderRadius="full" />
          <Heading textAlign="center" fontSize="xl">
            🫶 제보 / 문의
          </Heading>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
});
