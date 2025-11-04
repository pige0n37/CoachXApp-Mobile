export interface BaseTokens {
  colors: {
    green: string;
    blue: string;
    secondaryBackground: string;
    primaryBackground: string;
    primaryText: string;
    secondaryText: string;
    shadow: string;
    headerBackground: string;
  };
  spacing: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  radii: {
    sm: number;
    md: number;
    lg: number;
  };
  typography: {
    fontSize: {
      sm: number;
      base: number;
      lg: number;
      xl: number;
    };
    fontFamily: string;
  };
}

export const baseTokens: BaseTokens = {
  colors: {
    green: "#73D2C1",
    blue: "#58BEF9",
    secondaryBackground: "#ffffffff",
    primaryBackground: "#edededff",
    primaryText: "#384351",
    secondaryText: "#8a8989ff",
    shadow: "rgba(140, 143, 149, 0.15)",
    headerBackground: "#E8F1F6"
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  radii: {
    sm: 4,
    md: 8,
    lg: 16,
  },
  typography: {
    fontSize: {
      sm: 12,
      base: 16,
      lg: 20,
      xl: 24,
    },
    fontFamily: "System",
  },
} as const;