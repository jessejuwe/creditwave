import React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const colors = {
  primary: { dark: '#135d54', default: '#00c795', light: '#c1fff0' },
  secondary: '#007970',
};

const fonts = {
  body: `'Lato', sans-serif`,
  heading: `'Lato', sans-serif`,
};

const theme = extendTheme({ colors, fonts });

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
