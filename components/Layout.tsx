import React from 'react';

import { Box } from '@chakra-ui/react';
import Header from '@/components/Header';

interface LayoutProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
}

export default function Layout({ title, description, children }: LayoutProps) {
  return (
    <>
      <Header />
      <Box as="main" h="100%" py={20}>
        {children}
      </Box>
    </>
  );
}
