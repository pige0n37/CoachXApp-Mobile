import { View, Text, ViewStyle, TextStyle } from 'react-native';
import { makeThemedStyles } from '@/themes/createThemedStyles';

const MacroProgressBar = ({name, actual ,max} :{name: string, actual: number, max: number}) => {
    const styles = useStyles();
    return (<View style={styles.container}>
        <Text style={styles.titleText}>
            {name}
        </Text>
        <View style={styles.progressBar}>
            <View style={{...styles.actualBar, width: `${(actual / max) * 100}%`}}></View>
        </View>
        <Text style={styles.progressText}>
            {actual} / {max} g
        </Text>
    </View>);
}

const useStyles = makeThemedStyles((theme) => ({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        marginHorizontal: 10,
        maxWidth: 300
    } as ViewStyle,
    progressBar: {
        flex: 1,
        height: 10,
        borderRadius: 5,
        width: "100%",
        backgroundColor: theme.colors.primaryBackground,
        margin: 10
    } as ViewStyle,
    titleText: {
        fontSize: theme.typography.fontSize.base,
        color: theme.colors.secondaryText,
    } as TextStyle,
    progressText: {
        fontSize: theme.typography.fontSize.base,
        color: theme.colors.primaryText,
        fontWeight: 'bold',
    } as TextStyle,
    actualBar: {
        height: 10,
        borderRadius: 5,
        backgroundColor: theme.colors.blue,
    }
}));

export default MacroProgressBar;