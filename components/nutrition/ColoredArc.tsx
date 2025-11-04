import Svg, { Circle, G } from 'react-native-svg';
import { View, Text, ViewStyle, TextStyle } from 'react-native';
import { makeThemedStyles } from '@/themes/createThemedStyles';

const ColoredArc = ({ value, max }: { value: number; max: number }) => {
    const styles = useStyles();
    const percentage = max > 0 ? Math.min(value / max, 1) : 0;
    const size = 200;
    const strokeWidth = 14;
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;

    const visibleLength = circumference * (240 / 360);
    const gapLength = circumference - visibleLength;

    const progressLength = visibleLength * percentage;
    const rotation = 150;

    return (
        <View style={styles.container}>
            <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
                <G transform={`rotate(${rotation} ${size / 2} ${size / 2})`}>
                    <Circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        fill="none"
                        stroke={styles.arc.arcTrackColor}
                        strokeWidth={strokeWidth}
                        strokeLinecap="round"
                        strokeDasharray={`${visibleLength} ${gapLength}`}
                        strokeDashoffset={0}
                    />
                    <Circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        fill="none"
                        stroke={styles.arc.arcColor}
                        strokeWidth={strokeWidth + 0.8}
                        strokeLinecap="round"
                        strokeDasharray={`${progressLength} ${circumference}`}
                        strokeDashoffset={0}
                    />
                </G>
            </Svg>
            <View style={styles.overlay}>
                <Text style={styles.remainingText}>{max - value}</Text>
                <Text style={styles.labelText}>Remaining</Text>
            </View>
        </View>
    );
};

const useStyles = makeThemedStyles((theme) => ({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    } as ViewStyle,
    overlay: {
        position: 'absolute',
        width: 200,
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: theme.spacing.md,
    } as ViewStyle,

    remainingText: {
        fontWeight: 'bold',
        fontSize: theme.typography.fontSize.xl,
        color: theme.colors.primaryText,
    } as TextStyle,

    labelText: {
        color: theme.colors.secondaryText,
    } as TextStyle,

    arc: {
        arcColor: theme.colors.green,
        arcTrackColor: theme.colors.primaryBackground,
    }
}));

export default ColoredArc;