import { Stack } from "expo-router";
import useAuthStatus from "@/utils/auth_utils";
import { useTheme } from "@/themes/ThemeProvider";

export default function RootLayout() {
  const { loading, isAuthenticated } = useAuthStatus();
  const { theme } = useTheme();

  if (loading) {
    return null;
  }

  return (
    <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: theme.colors.primaryBackground }, }} >
      <Stack.Screen name="index" />
      <Stack.Protected guard={isAuthenticated}>
        <Stack.Screen name="dashboard" />
      </Stack.Protected>
      <Stack.Protected guard={isAuthenticated}>
        <Stack.Screen name="survey" />
      </Stack.Protected>
      <Stack.Protected guard={!isAuthenticated}>
        <Stack.Screen name="auth" />
      </Stack.Protected>
    </Stack>
  );
}