import React from "react";
import { Tabs } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useTheme } from "@/themes/ThemeProvider";

export default function TabLayout() {
  const { theme } = useTheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: theme.colors.headerBackground },
        headerTintColor: theme.colors.primaryText,
        headerTitleAlign: "center",
        tabBarStyle: {
          backgroundColor: theme.colors.headerBackground,
        },
        tabBarActiveTintColor: theme.colors.blue,
        tabBarInactiveTintColor: theme.colors.primaryText,
        tabBarShowLabel: true,
      }}
    >
      <Tabs.Screen
        name="gym"
        options={{
          title: "Gym",
          tabBarLabelPosition: 'below-icon',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="fitness-center" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="nutrition"
        options={{
          title: "Nutrition",
          tabBarLabelPosition: 'below-icon',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="restaurant" color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="person" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
