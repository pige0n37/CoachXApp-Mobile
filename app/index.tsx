import { Redirect } from "expo-router";
import useAuthStatus from "@/utils/auth_utils";
import { ThemeProvider, useTheme } from "@/themes/ThemeProvider";
import { useEffect } from "react";
import { Appearance } from "react-native";
import { darkTheme, lightTheme } from "@/themes";

export default function Index() {
  const { loading, isAuthenticated } = useAuthStatus();
const { theme, setTheme } = useTheme();
  if (loading) {
    return null;
  }

useEffect(() => {
  const colorScheme = Appearance.getColorScheme(); // 'dark' | 'light' | null
  setTheme(colorScheme === "dark" ? darkTheme : lightTheme);

  const listener = Appearance.addChangeListener(({ colorScheme }) => {
    setTheme(colorScheme === "dark" ? darkTheme : lightTheme);
  });

  return () => listener.remove();
}, []);

  return (
    <ThemeProvider initial={lightTheme}>
      <Redirect
        href={isAuthenticated ? "/dashboard/nutrition" : "/auth/sign-in"}
      />
    </ThemeProvider>
  );
}
