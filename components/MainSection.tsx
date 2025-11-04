import { makeThemedStyles } from "@/themes/createThemedStyles"
import { View, ViewStyle } from "react-native";

const MainSection = ({children} : {children: React.ReactNode}) => {
    const styles = useStyles();
    return (
        <View style={styles.container}>
            {children}
        </View>
    );  
}

const useStyles = makeThemedStyles((theme) => ({
    container: {
        width: '92%',
        maxWidth:620,
        alignSelf: 'center',
        backgroundColor: theme.colors.secondaryBackground,
        justifyContent: 'center',
        margin:10,
        borderRadius: 10,
        borderWidth: 0,
        boxShadow: `1px 1px 4px 1px ${theme.colors.shadow}`,
        padding: theme.spacing.lg
    } as ViewStyle,
}));

export default MainSection;