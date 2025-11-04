import { View, Text, TextStyle, ViewStyle } from "react-native";
import ColoredArc from "@/components/nutrition/ColoredArc";
import { makeThemedStyles } from "@/themes/createThemedStyles";
import MainSection from "@/components/MainSection";
import MacroProgressBar from "@/components/nutrition/MacroProgressBar";
import useNutritionStore from "@/stores/nutrition";

const Stat = ({ value, label }: { value: number; label: string }) => {
  const styles = useStyles();
  return (
    <View style={styles.statBlock}>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
};

const MainNutritionSection = () => {
 const { protein, carbs, fats, calories } = useNutritionStore();
  const styles = useStyles();

  const macros = [
    { key: "carbs", name: "Carbs", data: carbs },
    { key: "protein", name: "Proteins", data: protein },
    { key: "fats", name: "Fats", data: fats },
  ];

  return (
        <MainSection>
                <View style={styles.statRow}>
                  <Stat value={calories.actual} label="Eaten" />
                  <ColoredArc value={calories.actual - calories.burned} max={calories.goal} />
                  <Stat value={calories.burned} label="Burned" />
                </View>
        
                <View style={styles.macrosRow}>
                  {macros.map(({ key, name, data }) => (
                    <MacroProgressBar key={key} name={name} actual={data.actual} max={data.goal} />
                  ))}
                </View>
              </MainSection>
    );
}


const useStyles = makeThemedStyles((theme) => ({
  safeArea: {
    flex: 1,
  }  as ViewStyle,
  statRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  }  as ViewStyle,
  statBlock: {
    alignItems: "center",
  } as ViewStyle,
  statValue: {
    color: theme.colors.primaryText,
    fontWeight: "bold",
    fontSize: theme.typography.fontSize.lg,
  } as TextStyle,
  statLabel: {
    color: theme.colors.secondaryText,
    fontSize: theme.typography.fontSize.base,
  } as TextStyle,
  macrosRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    columnGap: theme.spacing.sm,
  } as ViewStyle,
}));

export default MainNutritionSection;