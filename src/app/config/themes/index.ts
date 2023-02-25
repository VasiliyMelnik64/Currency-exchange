import { primaryTheme } from './primary';

type ThemeType = {
  name: string;
  colors: { [key: string]: string };
  [key: string]: any;
};

type ThemesType = {
  [key: string]: ThemeType;
};

export const themes: ThemesType = {
  primary: primaryTheme,
};
