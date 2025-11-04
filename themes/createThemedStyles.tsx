// theme/createThemedStyles.ts
import { useMemo } from "react";
import { StyleSheet } from "react-native";
import { useTheme } from "./ThemeProvider";
import type { Theme } from "./index";

export function makeThemedStyles<T extends Record<string, any>>(stylesFactory: (theme: Theme) => T) {
  // returns a hook that components call
  return function useThemedStyles() {
    const { theme } = useTheme();
    // useMemo keyed by theme object reference (works if theme is stable or replaced on change)
    return useMemo(() => StyleSheet.create(stylesFactory(theme)), [theme]);
  };
}
