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
      <Box as="main" maxW="container.lg" mx="auto" px={6} paddingTop={28}>
        {children}
      </Box>
    </>
  );
}
