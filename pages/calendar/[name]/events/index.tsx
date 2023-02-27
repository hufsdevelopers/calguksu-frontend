import Layout from '@/components/Layout';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { CgTime } from 'react-icons/cg';

export default function EventsPage() {
  return (
    <Layout>
      <Box maxW="container.lg" mx="auto" px={6}>
        <Flex mt={4} p={5} boxShadow="xs" borderRadius="md" flexDirection="column" gap={4}>
          <Flex gap={3}>
            <Box position="relative" w="3px" bgColor="#00A8FF" />
            <Flex flexDirection="column" gap={0.5}>
              <Text color="#00A8FF" fontSize="sm">
                Today
              </Text>
              <Heading fontSize="lg">2023년 전기 졸업사정 회의</Heading>
            </Flex>
          </Flex>
          <Text display="flex" fontSize="xs" alignItems="center" gap={0.5} lineHeight="0">
            <CgTime size={14} />
            Time - 2023.02.13
          </Text>
        </Flex>
      </Box>
    </Layout>
  );
}
