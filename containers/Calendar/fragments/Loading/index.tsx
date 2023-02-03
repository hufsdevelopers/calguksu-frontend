import { Box } from '@chakra-ui/react';
import ProgressBar from '@/containers/Calendar/fragments/Loading/ProgressBar';

export default function Loading() {
  return (
    <Box as="section" h="100%">
      <ProgressBar />
    </Box>
  );
}
