import useStore from '@/hooks/useStore';

import NextImage from 'next/legacy/image';
import { Box, Flex, Text, Heading } from '@chakra-ui/react';
import Link from '@/components/Link';
import PreviewDialog from '@/containers/Calendar/fragments/PreviewDialog';

import { CalendarProps } from '@/config/types';

export default function Calendar(calendar: CalendarProps) {
  const { previewDialogStore } = useStore();

  return (
    <>
      <Box maxW="container.lg" mx="auto" px={6}>
        <Flex my={12} flexDirection="column" alignItems="center" gap={1}>
          <NextImage src="/assets/images/ramen.png" width={128} height={128} />
          <Heading mt={8} fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            띵! 조리가 완료됐어요
          </Heading>
          <Text
            mt={2}
            fontSize={{ base: 'lg', md: 'xl' }}
            lineHeight="normal"
            textDecoration="underline"
            sx={{ textUnderlinePosition: 'under' }}
          >
            {calendar.description}
          </Text>
        </Flex>
        <Flex my={12} flexDirection="column" alignItems="center" gap={12}>
          <Flex flexDirection={{ base: 'column', md: 'row' }} gap={3}>
            <Text as="button" px={12} variant="buttonRadiusMd" outline="none" onClick={previewDialogStore.click}>
              미리보기
            </Text>
            <Link href={`https://api.calguksu.com/calendars/${calendar.name}/subscribe`} target="_blank">
              <Text px={12} variant="buttonRadiusMd">
                구독하기
              </Text>
            </Link>
          </Flex>
        </Flex>
        <Text mt={12} fontSize="xs" textAlign="center">
          캘린더를 구독하면 칼국수닷컴의 <Link href="">서비스 약관</Link>과 <Link href="">마케팅 광고 수신</Link>에
          동의하는 것으로 간주됩니다.
        </Text>
      </Box>
      {calendar.name && <PreviewDialog name={calendar.name} />}
    </>
  );
}
