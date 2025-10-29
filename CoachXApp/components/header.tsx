import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Header() {
  return (
    <SafeAreaView edges={["top"]}>
        <View style={styles.container}>
        <Text style={styles.title}>X Days</Text>
        <TouchableOpacity style={styles.iconWrap} accessibilityLabel="profile">
            <AntDesign name="user" size={20} color="#fff" />
        </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 56,
    paddingHorizontal: 16,
    backgroundColor: "#0f172a",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  iconWrap: {
    padding: 6,
  },
});