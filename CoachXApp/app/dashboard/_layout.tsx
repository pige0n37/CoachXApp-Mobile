import React from "react";
import { Tabs } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

function ProfileButton() {
  const router = useRouter();
  return (
    <TouchableOpacity
      onPress={() => router.push("/profile")}
      style={{ paddingHorizontal: 12 }}
      accessibilityLabel="Open profile"
    >
      <AntDesign name="user" size={20} color="#fff" />
    </TouchableOpacity>
  );
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        // use the Stack header for dashboard screens
        headerShown: true,
        headerStyle: { backgroundColor: "#0f172a" },
        headerTintColor: "#fff",
        headerTitleAlign: "center",
        headerRight: () => <ProfileButton />,

        // tab bar styling to match header
        tabBarStyle: {
          backgroundColor: "#0f172a",
          height: 64,
          paddingBottom: 8,
        },
        tabBarActiveTintColor: "#0068dfff",
        tabBarInactiveTintColor: "#727272ff",
        tabBarShowLabel: true,
      }}
    >
      <Tabs.Screen
        name="gym"
        options={{
          title: "Gym",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="fitness-center" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="nutrition"
        options={{
          title: "Nutrition",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="restaurant" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
