import type { ThemeProviderProps } from '../../types';
import { theme } from '../../styles/themes';
import { ThemeProvider } from 'styled-components';

export function ThemesProvider({ children }: ThemeProviderProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
