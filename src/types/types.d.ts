export {};

declare global {
  interface Window {
    __onThemeChange: (theme: String) => void;
  }
}
