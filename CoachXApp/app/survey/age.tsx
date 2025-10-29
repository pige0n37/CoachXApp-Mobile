import { useState } from "react";
import { View, Text, Button } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useRouter } from "expo-router";
import useProfileStore from "@/stores/profile";

export const options = {
    title: "Age",
};

export default function AgePage() {
    const router = useRouter();
    const { age, setAge } = useProfileStore();
    const [value, setValue] = useState<number>(age || 25);
    const ages = Array.from({ length: 131 }, (_, i) => i);

    const handleNext = () => {
        setAge(value);
        router.replace("/survey/weight" as never);
    };

    return (
        <View>
            <Text>How old are you?</Text>
            <Text>{value}</Text>

            <Picker
                selectedValue={value}
                onValueChange={(itemValue: number) => {
                    setValue(itemValue);
                    setAge(itemValue);
                }}
            >
                {ages.map((a) => (
                    <Picker.Item key={a} label={String(a)} value={a} />
                ))}
            </Picker>

            <Button title="Back" onPress={() => router.replace("/survey/goal" as never)} />
            <Button title="Next" onPress={handleNext} />
        </View>
    );
}
