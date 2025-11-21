import { View, Animated } from "react-native";
import { PuntosPaginacionStyles } from "./PuntosPaginacionStyle";
import { FC } from "react";


interface PuntosPaginacionProps {
    data: any,
    width: any
    scrollX: any
}

const PuntosPaginacion: FC<PuntosPaginacionProps> = ({ data, width, scrollX }: PuntosPaginacionProps) => {
    
    const position: any = Animated.divide(scrollX, width);

    return (
        <View style={PuntosPaginacionStyles.indicatorContainer}>
            {data.map((_: any, index: number) => {
                const inputRange = [
                    (index - 1) * width,
                    index * width,
                    (index + 1) * width,
                ];
                const scale = scrollX.interpolate({
                    inputRange,
                    outputRange: [0.6, 1.2, 0.6],
                    extrapolate: "clamp",
                });
                const diff = Animated.subtract(position, index);
                const opacity = diff.interpolate({
                    inputRange: [-3, 0, 3],
                    outputRange: [0.4, 1, 0.4],
                    extrapolate: "clamp",
                });
                if (Math.abs(index - Math.round(position.__getValue())) > 3) return null;
                return (
                    <Animated.View
                        key={index}
                        style={[
                            PuntosPaginacionStyles.puntoActual,
                            {
                                transform: [{ scale }],
                                opacity
                            },
                        ]}
                    />

                );
            })}
        </View>
    )

}

export default PuntosPaginacion;