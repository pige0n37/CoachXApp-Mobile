import { useState } from "react";
import { View, Text, Button } from "react-native";
import { Checkbox } from "expo-checkbox";
import { useRouter } from "expo-router";
import useProfileStore from "@/stores/profile";

const LOSE_WEIGHT = "Lose weight";
const BUILD_MUSCLE = "Build muscle";

export const options = {
    title: "Goal",
};

export default function GoalPage() {
    const router = useRouter();
    const { goal, setGoal } = useProfileStore();
    const [selectedGoal, setSelectedGoal] = useState(goal);

    const handleSelect = (goalOption: string) => {
        setSelectedGoal(goalOption);
        setGoal(goalOption);
    };

    return (
        <View>
            <Text>What is your fitness goal?</Text>

            <View>
                <Checkbox
                    value={selectedGoal === LOSE_WEIGHT}
                    onValueChange={() => handleSelect(LOSE_WEIGHT)}
                />
                <Text>{LOSE_WEIGHT}</Text>
            </View>

            <View>
                <Checkbox
                    value={selectedGoal === BUILD_MUSCLE}
                    onValueChange={() => handleSelect(BUILD_MUSCLE)}
                />
                <Text>{BUILD_MUSCLE}</Text>
            </View>

            <Button
                title="Next"
                onPress={() => router.replace("/survey/age" as never)}
                disabled={!selectedGoal}
            />
        </View>
    );
}