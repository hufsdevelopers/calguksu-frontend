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
        fontWeight: 'bold',
        '.chakra-ui-dark &': {
          color: 'white',
        },
      },
      variants: {
        branding: {
          fontSize: '2xl',
          fontWeight: 'black',
        },
      },
    },
    Text: {
      baseStyle: {
        color: 'dark.600',
        fontFamily: 'body',
        lineHeight: '1.75',
        transition: 'all 0.3s ease-in-out',
        '.chakra-ui-dark &': {
          color: 'white',
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
        dialogButton: {
          display: 'flex',
          h: '10',
          mt: '4',
          color: 'dark.800',
          fontWeight: 'bold',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 'md',
          bgColor: 'dark.300',
          transition: 'all 0.2s ease-in-out',
          _hover: { bgColor: 'dark.400' },
          '.chakra-ui-dark &': {
            bgColor: 'whiteAlpha.200',
            _hover: {
              bgColor: 'whiteAlpha.300',
            },
          },
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
          color: 'dark.700',
          textDecoration: 'none',
        },
        '.chakra-ui-dark &': {
          color: 'whiteAlpha.800',
          _hover: {
            color: 'whiteAlpha.600',
          },
        },
      },
      variants: {
        branding: {
          opacity: 1,
          _hover: {
            opacity: 0.7,
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
  layerStyles: {
    button: {
      width: 'fit-content',
      mt: '8',
      py: '3',
      px: '12',
      fontSize: '1.1rem',
      fontWeight: 'bold',
      borderRadius: 'full',
      transition: 'all 0.15s ease-in-out',
      bgColor: 'dark.300',
      _hover: {
        bgColor: 'dark.400',
      },
      '.chakra-ui-dark &': {
        bgColor: 'whiteAlpha.200',
        _hover: {
          bgColor: 'whiteAlpha.300',
        },
      },
    },
    selectDialog: {
      bgColor: 'white',
      '.chakra-ui-dark &': {
        bgColor: 'dark.800',
      },
    },
  },
  styles: {
    global: {
      html: {
        height: '100%',
      },
      body: {
        height: '100%',
        margin: '0',
        padding: '0',
        fontSmooth: 'antialiased',
        bg: 'white',
      },
      header: {
        zIndex: 'docked',
        bg: 'white',
        '.chakra-ui-dark &': {
          bg: 'dark.900',
        },
      },
      '.chakra-ui-dark': {
        bg: 'dark.900',
      },
      '*::selection': {
        bg: 'blackAlpha.200',
        '.chakra-ui-dark &': {
          bg: 'whiteAlpha.300',
        },
      },
      '#__next': {
        height: '100%',
      },
      'input:focus, select:focus, option:focus, textarea:focus, button:focus': {
        outline: 'none',
      },
    },
  },
  shadows: { outline: '0 0 0 2px var(--chakra-colors-blackAlpha-500)' },
});

export default customTheme;
