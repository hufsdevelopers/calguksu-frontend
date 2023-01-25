import { useRef } from 'react';
import { observer } from 'mobx-react';
import useStore from '@/hooks/useStore';

import {
  Box,
  Text,
  Heading,
  AlertDialog,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  Select,
  SelectField,
} from '@chakra-ui/react';
import Link from '@/components/Link';

export const colourOptions = [
  { value: 'blue', label: 'Blue', color: '#0052CC' },
  { value: 'purple', label: 'Purple', color: '#5243AA' },
  { value: 'red', label: 'Red', color: '#FF5630' },
  { value: 'orange', label: 'Orange', color: '#FF8B00' },
  { value: 'yellow', label: 'Yellow', color: '#FFC400' },
  { value: 'green', label: 'Green', color: '#36B37E' },
];

export default observer(function SelectDialog() {
  const { dialogStore } = useStore();
  const cancelRef = useRef<HTMLButtonElement>(null);

  return (
    <AlertDialog
      isOpen={dialogStore.isClicked}
      leastDestructiveRef={cancelRef}
      onClose={dialogStore.click}
      isCentered
    >
      <AlertDialogOverlay>
        <AlertDialogContent layerStyle='selectDialog' maxW='xl' p={8} mx={6}>
          <AlertDialogCloseButton borderRadius='full' />
          <Heading textAlign='center' fontSize='xl'>👋 📅 🔥</Heading>
          <Heading mt={3} textAlign='center' fontSize='xl'>캘린더를 선택해볼까요?</Heading>
          <Select mt={6} _focus={{ border: '1px solid #757575', shadow: 'none' }}>
            <option value='option1'>Option 1</option>
          </Select>
          <Box as='button' layerStyle='dialogButton'>구독하기</Box>
          <Text mt={6} textAlign='center' fontSize='sm'>원하는 캘린더가 없으신가요? <Link href=''>여기</Link>를 눌러 제보해주세요!</Text>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
});
