import { NextSeo } from 'next-seo';

import Layout from '@/components/Layout';
import { Box, Text, Heading, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';

export default function AgreementMarketing() {
  return (
    <>
      <NextSeo title="마케팅 수신 동의" />
      <Layout>
        <Box maxW="container.lg" h="100%" mx="auto" px={6} py={8}>
          <Heading>마케팅 수신 동의</Heading>
          <Table variant="simple" colorScheme="whiteAlpha" mt={8}>
            <Thead>
              <Tr>
                <Th px={3} color="dark.800" borderColor="dark.300" sx={{ '.chakra-ui-dark &': { color: 'dark.200' } }}>
                  목적
                </Th>
                <Th px={3} color="dark.800" borderColor="dark.300" sx={{ '.chakra-ui-dark &': { color: 'dark.200' } }}>
                  항목
                </Th>
                <Th px={3} color="dark.800" borderColor="dark.300" sx={{ '.chakra-ui-dark &': { color: 'dark.200' } }}>
                  보유기간
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td w="60%" px={3} borderColor="dark.300" wordBreak="keep-all">
                  "훕스디벨로퍼스"가 "CALGUKSU" 사용자를 대상으로 제공하는 이용자 맞춤형 서비스 및 상품 추천, 각종 경품
                  행사, 이벤트 등의 광고성 정보 제공(이메일, 서신우편, SMS, 카카오톡 등)
                </Td>
                <Td w="20%" minW="32px" px={3} borderColor="dark.300" wordBreak="keep-all">
                  이메일주소
                </Td>
                <Td w="20%" minW="52px" px={3} borderColor="dark.300" wordBreak="keep-all">
                  회원 탈퇴 후 30일 또는 동의 철회 시까지
                </Td>
              </Tr>
            </Tbody>
          </Table>
          <Text mt={8}>
            본 마케팅 정보 수신에 대한 동의를 거부하실 수 있으며, 이 경우 회원가입은 가능하나 일부 서비스 이용 및 각종
            광고, 할인, 이벤트 및 이용자 맞춤형 상품 추천 등의 서비스 제공이 제한될 수 있습니다.
          </Text>
        </Box>
      </Layout>
    </>
  );
}
