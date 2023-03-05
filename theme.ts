import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
  config: {
    initialColorMode: 'system',
    useSystemColorMode: true,
  },
  fonts: {
    heading:
      '-apple-system, BlinkMacSystemFont, Apple SD Gothic Neo, Pretendard, Roboto, Noto Sans KR, Segoe UI, Malgun Gothic, sans-serif',
    body: '-apple-system, BlinkMacSystemFont, Apple SD Gothic Neo, Pretendard, Roboto, Noto Sans KR, Segoe UI, Malgun Gothic, sans-serif',
  },
  colors: {
    primary: {
      normal: '#F4E04B',
      press: '#DDC512',
    },
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
        fontWeight: '600',
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
        buttonRadiusMd: {
          display: 'flex',
          h: '60px',
          color: '#403800',
          fontWeight: 'bold',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '8px',
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
        buttonRadiusMdYellow: {
          display: 'flex',
          h: '60px',
          color: '#403800',
          fontWeight: 'bold',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '8px',
          bgColor: 'primary.normal',
          transition: 'all 0.2s ease-in-out',
          _hover: { bgColor: 'primary.press' },
          '.chakra-ui-dark &': { color: '#403800' },
        },
        opacity: {
          color: 'dark.800',
          cursor: 'pointer',
          transition: 'all 0.15s ease-in-out',
          _hover: {
            opacity: 0.7,
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
        buttonRadiusMdYellow: {
          display: 'flex',
          h: '60px',
          color: '#403800',
          fontWeight: 'bold',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '8px',
          bgColor: 'primary.normal',
          transition: 'all 0.2s ease-in-out',
          _hover: { bgColor: 'primary.press' },
          '.chakra-ui-dark &': { color: '#403800' },
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
      color: '#403800',
      fontSize: '1.1rem',
      fontWeight: 'bold',
      outline: 'none',
      borderRadius: 'full',
      transition: 'all 0.15s ease-in-out',
      bgColor: 'primary.normal',
      _hover: {
        bgColor: 'primary.press',
      },
      '.chakra-ui-dark &': {
        color: '#403800',
      },
    },
    selectDialog: {
      bgColor: 'white',
      '.chakra-ui-dark &': {
        bgColor: '#2b2b2b',
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
      'ol, li': {
        color: 'dark.600',
        fontFamily: 'body',
        lineHeight: 1.5,
        '.chakra-ui-dark &': {
          color: 'white',
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
      'input[aria-invalid=true]': {
        border: '1px solid #E53E3E !important',
        shadow: 'none !important',
      },
      'button[aria-selected=true]': {
        color: '#403800',
        bgColor: 'primary.normal',
        '.chakra-ui-dark &': { color: '#403800', bgColor: 'primary.normal' },
      },
    },
  },
  shadows: { outline: '0 0 0 2px var(--chakra-colors-blackAlpha-500)' },
});

export default customTheme;
