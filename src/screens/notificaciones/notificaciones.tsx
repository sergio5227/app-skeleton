import {
    Animated,
    Dimensions,
    FlatList,
    Text,
    View
} from "react-native"
import CustomHeader from "../../navigators/DrawerNavigator/customHeader";
import { mainStyle } from "../../theme/styles";
import { useSelector } from "react-redux";
import notificacionesStyle from "./notificacionesStyle";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParams } from "../../navigators/mainNavigator/mainNavigator";
import { useRef, useState } from "react";
import CardNotificacion from "../../components/CardNotificacion/CardNotificacion";

const Notificaciones = () => {
    const theme = useSelector((state: any) => state?.app?.theme || '#fff');
    const params = useRoute<RouteProp<RootStackParams, 'Notificaciones'>>().params;
    const flatListRef = useRef<any>([]);
    const [scrollViewWidth] = useState(0);
    const boxWidth = scrollViewWidth * 0.9;
    const boxDistance = scrollViewWidth - boxWidth;
    const halfBoxDistance = boxDistance / 2;
    const scrollX = useRef(new Animated.Value(0)).current;

    return (
        <View style={mainStyle.container}>
            <CustomHeader bgColor={theme} regresar={params?.regresar} />
            <View style={notificacionesStyle.notificacionesContainer}>
                <Text style={mainStyle.mainTitle}>
                    Notificaciones
                </Text>
                <View style={notificacionesStyle.listContainer}>
                    <FlatList
                        ref={flatListRef}
                        data={(params?.data?.notificaciones || [])}
                        keyExtractor={(item, index) => `${item?.id}-${index}`}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        scrollEventThrottle={1}
                        snapToInterval={boxWidth}
                        viewabilityConfig={{
                            itemVisiblePercentThreshold: 50
                        }}
                        ListEmptyComponent={<Text>Sin registros</Text>}
                        contentInset={{
                            left: halfBoxDistance,
                            right: halfBoxDistance,
                        }}
                        onScroll={Animated.event(
                            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                            { useNativeDriver: false }
                        )}
                        snapToAlignment="center"
                        decelerationRate={'normal'}
                        renderItem={({ item, index }) => (
                            <CardNotificacion titulo={item?.titulo} descripcion={item?.descripcion} estatus={item?.estatus} fecha={item?.fecha} />
                        )}
                    />
                </View>
            </View >
        </View>
    )
}

export default Notificaciones;