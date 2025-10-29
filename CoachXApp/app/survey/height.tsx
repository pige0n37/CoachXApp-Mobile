import { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { useRouter } from "expo-router";
import useProfileStore from "@/stores/profile";

export const options = {
  title: "Height",
};

export default function HeightPage() {
  const router = useRouter();
  const { height, setHeight } = useProfileStore();
  const initialValue = Number.isFinite(height) ? String(height) : "";
  const [input, setInput] = useState(initialValue);

  const handleChange = (text: string) => {
    setInput(text);
    const numeric = Number(text);
    if (!Number.isNaN(numeric)) {
      setHeight(numeric);
    }
  };

  const canProceed = input.trim().length > 0 && !Number.isNaN(Number(input));

  return (
    <View>
      <Text>What is your height? (cm)</Text>
      <TextInput
        value={input}
        onChangeText={handleChange}
        keyboardType="numeric"
        placeholder="0"
      />
      <Button title="Back" onPress={() => router.replace("/survey/weight" as never)} />
      <Button
        title="Next"
        onPress={() => {
          const numeric = Number(input);
          setHeight(Number.isNaN(numeric) ? 0 : numeric);
          router.replace("/survey/fat-percentage" as never);
        }}
        disabled={!canProceed}
      />
    </View>
  );
}
