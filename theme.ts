import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
  config: {
    initialColorMode: 'system',
    useSystemColorMode: true,
  },
  fonts: {
    branding:
      'Satoshi, -apple-system, BlinkMacSystemFont, Apple SD Gothic Neo, Pretendard, Roboto, Noto Sans KR, Segoe UI, Malgun Gothic, sans-serif',
    heading:
      '-apple-system, BlinkMacSystemFont, Apple SD Gothic Neo, Pretendard, Roboto, Noto Sans KR, Segoe UI, Malgun Gothic, sans-serif',
    body: '-apple-system, BlinkMacSystemFont, Apple SD Gothic Neo, Pretendard, Roboto, Noto Sans KR, Segoe UI, Malgun Gothic, sans-serif',
  },
  colors: {
    dark: {
      50: '#FAFAFA',
      100: '#F5F5F5',
      200: '#EEEEEE',
      300: '#E0E0E0',
      400: '#BDBDBD',
      500: '#9E9E9E',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
    },
  },
  components: {
    Heading: {
      baseStyle: {
        color: 'dark.900',
        fontSize: '2xl',
        fontWeight: 'black',
      },
    },
    Text: {
      baseStyle: {
        color: 'dark.600',
        fontFamily: 'body',
        lineHeight: '1.75',
        transition: 'all 0.3s ease-in-out',
        '.chakra-ui-dark &': {
          color: 'dark.200',
        },
      },
      variants: {
        calendarNormal: {
          display: 'flex',
          color: 'dark.500',
          fontFamily: 'branding',
          alignItems: 'center',
          cursor: 'pointer',
          gap: 2,
          userSelect: 'none',
        },
        calendarCurrent: {
          color: 'dark.900',
          fontFamily: 'branding',
          fontWeight: 500,
          userSelect: 'none',
        },
        calendarDay: {
          fontSize: '0.85rem',
          userSelect: 'none',
        },
      },
    },
    Link: {
      baseStyle: {
        color: 'dark.800',
        fontFamily: 'body',
        textDecoration: 'none',
        transition: 'all 0.15s ease-in-out',
        _hover: {
          textDecoration: 'none',
        },
        '.chakra-ui-dark &': {
          color: 'whiteAlpha.800',
        },
      },
      variants: {
        branding: {
          opacity: 1,
          _hover: {
            opacity: 0.7,
          },
        },
        button: {
          display: 'flex',
          h: '10',
          minW: '10',
          px: '5',
          fontSize: 'md',
          fontWeight: 'semibold',
          lineHeight: '1.2',
          verticalAlign: 'middle',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '2xl',
          bg: 'dark.200',
          _hover: {
            bg: 'dark.300',
          },
        },
      },
    },
    Divider: {
      baseStyle: {
        borderColor: 'dark.300',
      },
    },
  },
  layerStyles: {},
  styles: {
    global: {
      body: {
        bg: 'white',
      },
      '.chakra-ui-dark': {
        bg: 'dark.900',
      },
      '*::selection': {
        background: 'blackAlpha.200',
        '.chakra-ui-dark &': {
          background: 'whiteAlpha.300',
        },
      },
    },
  },
  shadows: { outline: '0 0 0 2px var(--chakra-colors-blackAlpha-500)' },
});

export default customTheme;
