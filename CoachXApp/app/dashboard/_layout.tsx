import { Tabs } from 'expo-router';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Header from '@/components/header';
import { View, StyleSheet } from 'react-native';

export default function TabLayout() {
  return (
    <View style={{ flex: 1 }}>
        <Header/>
        <Tabs
        screenOptions={{
            headerShown: false,
            tabBarStyle: {
                backgroundColor: "#0f172a",
                height: 64,
                paddingBottom: 8
            },
            tabBarActiveTintColor: "#0068dfff",
            tabBarInactiveTintColor: "#727272ff",
            tabBarShowLabel: true
        }}>
        <Tabs.Screen
            name="gym"
            options={{
                title: "Gym",
                tabBarIcon: ({color, size}) => (
                    <MaterialIcons name="fitness-center" color={color} size={size} />
                )
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
    </View>
  );
}
