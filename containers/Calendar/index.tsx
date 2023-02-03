import { useEffect, useState } from 'react';

import { Box, Text, Heading } from '@chakra-ui/react';
import Loading from '@/containers/Calendar/fragments/Loading';

import { CalendarType } from '@/config/types';

export default function Calendar(calendar: CalendarType) {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    function setLoadTrue() {
      setLoad(true);
    }
    setTimeout(setLoadTrue, 0);
  }, []);

  return (
    <>
      {load ? (
        <Box maxW="container.lg" mx="auto" px={6}>
          <Box as="section" my={12}>
            <Heading textAlign="center">띵! 조리가 완료되었습니다.</Heading>
            <Text mt={2} textAlign="center" fontSize="xl">
              {calendar.description}
            </Text>
            <Text>{calendar.name}</Text>
            <Box as="button">구독하기</Box>
          </Box>
        </Box>
      ) : (
        <Loading />
      )}
    </>
  );
}
