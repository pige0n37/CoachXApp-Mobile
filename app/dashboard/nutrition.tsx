import { ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useNutritionStore from "@/stores/nutrition";
import { makeThemedStyles } from "@/themes/createThemedStyles";
import MainNutritionSection from "@/components/nutrition/MainNutritionSection";


export default function NutritionDashboard() {
  const { protein, carbs, fats, calories } = useNutritionStore();
  const styles = useStyles();

  const macros = [
    { key: "carbs", name: "Carbs", data: carbs },
    { key: "protein", name: "Proteins", data: protein },
    { key: "fats", name: "Fats", data: fats },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <MainNutritionSection />
    </SafeAreaView>
  );
}

const useStyles = makeThemedStyles((theme) => ({
  safeArea: {
    flex: 1,
  }  as ViewStyle,
}));