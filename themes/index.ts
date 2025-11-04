import { baseTokens, BaseTokens } from "./tokens";

export const lightTheme: BaseTokens = {
  ...baseTokens,
};

export const darkTheme: BaseTokens = {
  ...baseTokens,
  colors: {
    ...baseTokens.colors,
    secondaryBackground: "#40597DFF",
    primaryBackground: "#23395B",
    primaryText: "#FFFFFFFF",
    secondaryText: "#b2b2b2ff"
  }
};

export type Theme = typeof lightTheme;
