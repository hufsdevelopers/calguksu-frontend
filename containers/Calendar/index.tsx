import useStore from '@/hooks/useStore';

import { CalendarDetailType } from '@/config/types';
import NextImage from 'next/legacy/image';
import { Box, Flex, Text, Heading } from '@chakra-ui/react';
import Link from '@/components/Link';
import PreviewDialog from '@/containers/Calendar/fragments/PreviewDialog';

interface PageProps {
  calendar: CalendarDetailType;
}

export default function Calendar({ calendar }: PageProps) {
  const { dialogStore } = useStore();

  return (
    <>
      <Box maxW="container.lg" mx="auto" px={6}>
        <Flex my={12} flexDirection="column" alignItems="center" gap={1}>
          <NextImage src="/assets/ic_ramen.png" width={128} height={128} />
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
            {calendar.result.description}
          </Text>
        </Flex>
        <Flex my={12} flexDirection="column" alignItems="center" gap={12}>
          <Flex flexDirection={{ base: 'column', md: 'row' }} gap={3}>
            <Text as="button" px={12} variant="buttonRadiusMd" outline="none" onClick={dialogStore.previewShow}>
              미리보기
            </Text>
            <Text as="button" px={12} variant="buttonRadiusMdYellow" outline="none" onClick={dialogStore.deliveryShow}>
              배달요청
            </Text>
          </Flex>
        </Flex>
        <Text mt={12} fontSize="xs" textAlign="center" wordBreak="keep-all">
          캘린더를 구독하면 칼국수닷컴의 <Link href="">서비스 약관</Link>과&nbsp;
          <Link href="/policies/agreement-marketing">마케팅 광고 수신</Link>에 동의하는 것으로 간주됩니다.
        </Text>
        <Flex justifyContent="center">
          <Link
            href="https://www.flaticon.com/free-icons/ramen"
            target="_blank"
            isExternal
            title="ramen icons"
            display="inline-block"
            mt={3}
            fontSize="xs"
            textAlign="center"
          >
            Ramen icons created by amonrat rungreangfangsai - Flaticon
          </Link>
        </Flex>
      </Box>
      {calendar.successful && <PreviewDialog calendarName={calendar.result.name} title={calendar.result.title} />}
    </>
  );
}
