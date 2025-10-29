import { Text, View } from "react-native";
import useNutritionStore from "@/stores/nutrition";

export default function nutritionDashboard() {
    const {protein, carbs, fats, calories, setGoal, setActual} = useNutritionStore();

    return <View>
        <Text>Nutrition Dashboard</Text>
        <Text>Protein: {protein.actual} / {protein.goal}</Text>
        <Text>Carbs: {carbs.actual} / {carbs.goal}</Text>
        <Text>Fats: {fats.actual} / {fats.goal}</Text>
        <Text>Calories: {calories.actual} / {calories.goal}</Text>
    </View>
}