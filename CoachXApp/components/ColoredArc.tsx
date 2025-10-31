import Svg, { Circle, G, Path } from 'react-native-svg';
import { View, Text } from 'react-native';

const ColoredArc = ({value, max}: {value: number, max: number}) => {
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
        <View >
            <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
                <G transform={`rotate(${rotation} ${size / 2} ${size / 2})`}>
                <Circle
                    cx={size/2}
                    cy={size/2}
                    r={radius}
                    fill="none"
                    stroke="#8d8d8dff"
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
                    stroke="#25ff22"
                    strokeWidth={strokeWidth + 0.8}
                    strokeLinecap="round"
                    strokeDasharray={`${progressLength} ${circumference}`}
                    strokeDashoffset={0}
                />
                </G>
            </Svg>
            <View style={{ position: 'absolute', width: size, height: size, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontWeight: 'bold',  }}>{max - value}</Text>
                <Text>Remaining</Text>
            </View>
        </View>
    );
};


export default ColoredArc;