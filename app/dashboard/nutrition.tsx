import { Text, View } from "react-native";
import useNutritionStore from "@/stores/nutrition";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, ViewStyle } from "react-native";
import ColoredArc from "@/components/ColoredArc";


export default function nutritionDashboard() {
    const { protein, carbs, fats, calories, setGoal, setActual } = useNutritionStore();

    return <SafeAreaView style={style.container}>
        <Text>Nutrition Dashboard</Text>
        <View style={style.mainBox}>
            <View style={style.smallBox}>
                <View> 
                    <Text>Eaten Calories: {calories.actual}</Text>
                </View>
                <ColoredArc value={calories.actual - calories.burned} max={calories.goal} />
                <View>

                    <Text>Goal Calories: {calories.goal}</Text>
                    <Text>{calories.burned} Burned</Text>
                </View>
            </View>
            <View style={style.smallBox}>
                <Text>Carbs: {carbs.actual} / {carbs.goal}</Text>
                <Text>Protein: {protein.actual} / {protein.goal}</Text>
                <Text>Fats: {fats.actual} / {fats.goal}</Text>
            </View>

        </View>
        <View style={style.mainBox}>

        </View>
        <View style={style.mainBox}>

        </View>
    </SafeAreaView>
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignContent: "center",
        justifyContent: "flex-start",
        padding: 20,
    },
    mainBox: {
        borderWidth: 3,
        borderColor: "#818181ff",
        padding: 5,
        marginTop: 20,
        marginLeft: 50,
        marginRight: 50,
        borderRadius: 15,
        backgroundColor: "#3a3a3aff",
    },
    smallBox: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
    }
});