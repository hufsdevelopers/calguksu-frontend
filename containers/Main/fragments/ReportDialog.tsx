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
  Textarea,
} from '@chakra-ui/react';

export default observer(function ReportDialog() {
  const [value, setValue] = useState('');
  const cancelRef = useRef<HTMLButtonElement>(null);

  const { dialogStore } = useStore();

  return (
    <AlertDialog
      isOpen={dialogStore.report}
      leastDestructiveRef={cancelRef}
      onClose={dialogStore.reportClose}
      isCentered
    >
      <AlertDialogOverlay>
        <AlertDialogContent layerStyle="selectDialog" maxW="xl" p={8} mx={6}>
          <AlertDialogCloseButton borderRadius="full" />
          <Heading textAlign="center" fontSize="xl">
            🫶 제보 / 문의
          </Heading>
          <Textarea
            mt={6}
            verticalAlign="top"
            minHeight={32}
            resize="none"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            placeholder="자유롭게 적어주세요! "
            _focus={{ outline: 'none', border: '1px solid #757575', shadow: 'none' }}
          />
          <Text as="button" mt={4} variant="buttonRadiusMd">
            📨 보내기
          </Text>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
});
