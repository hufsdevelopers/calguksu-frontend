import React from 'react';
import NextLink from 'next/link';
import { Link as ChakraLink, LinkProps } from '@chakra-ui/react';

export default function Link({ href, isExternal, ...restProps }: LinkProps) {
  return <ChakraLink {...(isExternal ? { href } : { as: NextLink, href })} {...restProps} />;
}
