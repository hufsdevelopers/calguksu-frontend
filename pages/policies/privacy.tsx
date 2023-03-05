import { NextSeo } from 'next-seo';

import Layout from '@/components/Layout';
import Link from '@/components/Link';
import { Flex, Text, Heading, UnorderedList, ListItem } from '@chakra-ui/react';

export default function PrivacyPage() {
  return (
    <>
      <NextSeo title="개인정보 처리방침" />
      <Layout>
        <Flex maxW="container.lg" mx="auto" px={6} py={8} flexDirection="column" gap={2}>
          <Heading as="h1">CALGUKSU 개인정보 처리방침</Heading>
          <Heading as="h2" fontSize="xl" mt={8}>
            1. 개인정보의 처리 목적
          </Heading>
          <Flex flexDirection="column" gap={1}>
            <Text>
              CALGUKSU(calguksu.com)서비스는 훕스디벨로퍼스(hufsdevelopers,&nbsp;
              <Link href="https://hufsdevelopers.org" target="_blank" isExternal>
                https://hufsdevelopers.org
              </Link>
              ) 이하 &quot;훕스디벨로퍼스&quot;에서 운영하는 서비스입니다. 우리는 다음의 목적을 위하여 개인정보를
              처리하고 있으며, 다음의 목적 이외의 용도로는 이용하지 않습니다.
            </Text>
            <UnorderedList ml={8}>
              <ListItem>고객의 캘린더 구독 의사 확인, 구독 자격 유지 및 관리</ListItem>
            </UnorderedList>
          </Flex>
          <Heading as="h2" fontSize="xl" mt={4}>
            2. 개인정보의 처리 및 보유 기간
          </Heading>
          <Text>
            ① ‘훕스디벨로퍼스’는 정보주체로부터 개인정보를 수집할 때 동의 받은 개인정보 보유․이용기간 또는 법령에 따른
            개인정보 보유․이용기간 내에서 개인정보를 처리․보유합니다.
          </Text>
          <Flex flexDirection="column" gap={1}>
            <Text>② 구체적인 개인정보 처리 및 보유 기간은 다음과 같습니다.</Text>
            <UnorderedList ml={8}>
              <ListItem>
                고객의 캘린더 구독 : 고객이 캘린더를 구독하고 있는 상태가 유지되는 경우, 1년간 마지막 갱신일로부터 추가
                갱신이 없는 경우 고객이 캘린더를 구독하지 않는 상태로 보고 지체없이 파기함.
              </ListItem>
              <ListItem>
                고객 가입 및 관리 : 서비스 이용계약 또는 회원가입 해지시 후 1개월 후까지 단, 이메일 주소 및 기기 고유
                식별자는 제재 회원의 경우 제재 기간이 종료되는 시점까지
              </ListItem>
            </UnorderedList>
          </Flex>
          <Heading as="h2" fontSize="xl" mt={4}>
            3. 정보주체의 열람 등의 권리 행사
          </Heading>
          <Text>
            정보주체와 법정대리인의 권리·의무 및 그 행사방법 이용자는 개인정보주체로써 다음과 같은 권리를 행사할 수
            있습니다.
          </Text>
          <Flex flexDirection="column" gap={1}>
            <Text>
              ① 정보주체는 ‘훕스디벨로퍼스’에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.
            </Text>
            <UnorderedList ml={8}>
              <ListItem>개인정보 열람 요구</ListItem>
              <ListItem>오류 등이 있을 경우 정정 요구</ListItem>
              <ListItem>삭제 요구</ListItem>
              <ListItem>처리 정지 요구</ListItem>
            </UnorderedList>
          </Flex>
          <Text>
            ② 정보주체는 개인정보처리책임자에게 전화 또는 이메일 등의 방법으로 연락하여 수정, 삭제할 수 있으며, 프로필
            수정 페이지 하단의 회원 탈퇴를 눌러 개인정보 처리정리를 요구할 수 있습니다.
          </Text>
          <Heading as="h2" fontSize="xl" mt={4}>
            4. 처리하는 개인정보의 항목
          </Heading>
          <Flex flexDirection="column" gap={1}>
            <Text>① ‘훕스디벨로퍼스’는 "칼국수" 서비스에서 다음의 개인정보 항목을 처리하고 있습니다.</Text>
            <UnorderedList ml={8}>
              <ListItem>"칼국수" 서비스 내 캘린더 구독 정보 - 필수항목 : 이메일</ListItem>
            </UnorderedList>
          </Flex>
          <Heading as="h2" fontSize="xl" mt={4}>
            5. 개인정보의 파기
          </Heading>
          <UnorderedList ml={8}>
            <ListItem>사용자가 1년간 구독한 캘린더를 갱신하지 않는 경우 개인정보 지체 없이 파기</ListItem>
          </UnorderedList>
          <Heading as="h2" fontSize="xl" mt={4}>
            6. 개인정보 보호책임자 선임 현황
          </Heading>
          <Flex flexDirection="column" gap={1}>
            <Text>
              ① ‘훕스디벨로퍼스’는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의
              불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
            </Text>
            <UnorderedList ml={8}>
              <ListItem>
                개인정보 보호책임자 성명 : 김경록 직책 : 관리자 직급 : 관리자 연락처 : 010-4684-1248,&nbsp;
                <Link href="mailto:support@hufsdevelopers.org" isExternal>
                  support@hufsdevelopers.org
                </Link>
                <br />※ 개인정보 보호 담당부서로 연결됩니다.
              </ListItem>
              <ListItem>
                개인정보 보호 담당부서 부서명 : 훕스디벨로퍼스 개인정보 관리팀
                <br />
                담당자 : 김경록 연락처 : 010-4684-1248,&nbsp;
                <Link href="mailto:support@hufsdevelopers.org" isExternal>
                  support@hufsdevelopers.org
                </Link>
              </ListItem>
            </UnorderedList>
          </Flex>
          <Text>
            ② 정보주체께서는 ‘훕스디벨로퍼스’의 서비스(또는 사업)을 이용하시면서 발생한 모든 개인정보 보호 관련 문의,
            불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자 및 담당부서로 문의하실 수 있습니다.
            ‘훕스디벨로퍼스’는 정보주체의 문의에 대해 지체 없이 답변 및 처리해드릴 것입니다.
          </Text>
        </Flex>
      </Layout>
    </>
  );
}
