import { Grid, Flex, Box, Divider, Text } from '@chakra-ui/react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

export default function Calendar() {
  return (
    <Box as="section">
      <Divider />
      <Flex py={2} alignItems="center" justifyContent="space-between">
        <Text as="span" variant="calendarNormal">
          <BsArrowLeft />
          DEC 2022
        </Text>
        <Text as="span" variant="calendarCurrent">
          JAN 2023
        </Text>
        <Text as="span" variant="calendarNormal" display="flex" alignItems="center" gap={2} cursor="pointer">
          FEB 2023
          <BsArrowRight />
        </Text>
      </Flex>
      <Divider />
      <Grid templateColumns="repeat(7, 1fr)" my={3} gap={3}>
        <Text variant="calendarDay" color="red.500">
          SUN
        </Text>
        <Text variant="calendarDay">MON</Text>
        <Text variant="calendarDay">TUE</Text>
        <Text variant="calendarDay">WEN</Text>
        <Text variant="calendarDay">THU</Text>
        <Text variant="calendarDay">FRI</Text>
        <Text variant="calendarDay" color="blue.500">
          SAT
        </Text>
      </Grid>
      <Grid
        templateColumns="repeat(7, 1fr)"
        my={12}
        gap={3}
        sx={{ hr: { borderColor: 'dark.700', borderWidth: '1px' } }}
      >
        <Box>
          <Divider />
          <Text fontSize="2rem" fontFamily="branding" color="dark.900">
            01
          </Text>
        </Box>
        <Box>
          <Divider />
        </Box>
        <Box>
          <Divider />
        </Box>
        <Box>
          <Divider />
        </Box>
        <Box>
          <Divider />
        </Box>
        <Box>
          <Divider />
        </Box>
        <Box>
          <Divider />
        </Box>
      </Grid>
    </Box>
  );
}
