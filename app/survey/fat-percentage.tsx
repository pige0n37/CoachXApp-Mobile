import { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import { useRouter } from "expo-router";
import useProfileStore from "@/stores/profile";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const options = {
  title: "Body Fat",
};

export default function FatPercentagePage() {
  const router = useRouter();
  const { fatPercentage, setFatPercentage, age, weight, height, goal } = useProfileStore();
  const initialValue = Number.isFinite(fatPercentage)
    ? String(fatPercentage)
    : "";
  const [input, setInput] = useState(initialValue);

  const handleChange = (text: string) => {
    setInput(text);
    const numeric = Number(text);
    if (!Number.isNaN(numeric)) {
      setFatPercentage(numeric);
    }
  };

  const canFinish = input.trim().length > 0 && !Number.isNaN(Number(input));

  return (
    <View>
      <Text>What is your body fat percentage?</Text>
      <TextInput
        value={input}
        onChangeText={handleChange}
        keyboardType="numeric"
        placeholder="0"
      />
      <Button
        title="Back"
        onPress={() => router.replace("/survey/height" as never)}
      />
      <Button
        title="Finish"
        onPress={async () => {
          const numeric = Number(input);
          const value = Number.isNaN(numeric) ? 0 : numeric;
          setFatPercentage(value);
          router.replace("/dashboard/nutrition" as never);
        }}
        disabled={!canFinish}
      />
    </View>
  );
}
