import { useRef } from 'react';
import { observer } from 'mobx-react';
import useStore from '@/hooks/useStore';

import { Text, AlertDialog, AlertDialogContent, AlertDialogOverlay } from '@chakra-ui/react';
import Link from '@/components/Link';

export default observer(function SelectDialog() {
  const { dialogStore } = useStore();
  const cancelRef = useRef<HTMLButtonElement>(null);

  return (
    <AlertDialog
      motionPreset="slideInBottom"
      isOpen={dialogStore.isClicked}
      leastDestructiveRef={cancelRef}
      onClose={dialogStore.click}
      isCentered
    >
      <AlertDialogOverlay>
        <AlertDialogContent layerStyle="selectDialog" maxW="xl" mx={6}>
          <Text>Content</Text>
          <Link href=""></Link>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
});
