import { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { useRouter } from "expo-router";
import useProfileStore from "@/stores/profile";

export const options = {
  title: "Weight",
};

export default function WeightPage() {
  const router = useRouter();
  const { weight, setWeight } = useProfileStore();
  const initialValue = Number.isFinite(weight) ? String(weight) : "";
  const [input, setInput] = useState(initialValue);

  const handleChange = (text: string) => {
    setInput(text);
    const numeric = Number(text);
    if (!Number.isNaN(numeric)) {
      setWeight(numeric);
    }
  };

  const canProceed = input.trim().length > 0 && !Number.isNaN(Number(input));

  return (
    <View>
      <Text>What is your weight? (kg)</Text>
      <TextInput
        value={input}
        onChangeText={handleChange}
        keyboardType="numeric"
        placeholder="0"
      />
      <Button title="Back" onPress={() => router.replace("/survey/age" as never)} />
      <Button
        title="Next"
        onPress={() => {
          const numeric = Number(input);
          setWeight(Number.isNaN(numeric) ? 0 : numeric);
          router.replace("/survey/height" as never);
        }}
        disabled={!canProceed}
      />
    </View>
  );
}
