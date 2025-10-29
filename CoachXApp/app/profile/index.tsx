import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";

export const options = {
  title: "Profile",
};

export default function Profile() {
  const router = useRouter();
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <TouchableOpacity onPress={() => router.replace("/survey")}>
        <Text>Survey<MaterialIcons name="question-mark" size={24} color="black" /></Text>
      </TouchableOpacity>
    </View>
  );
}