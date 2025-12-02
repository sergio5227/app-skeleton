import {
    Animated,
    FlatList,
    Text,
    View
} from "react-native"
import CustomHeader from "../../navigators/DrawerNavigator/customHeader";
import { mainStyle } from "../../theme/styles";
import { useSelector } from "react-redux";
import favoritosStyle from "./favoritosStyle";
import { useRoute, RouteProp } from "@react-navigation/native";
import { useRef, useState } from "react";
import { RootStackParams } from "../../navigators/mainNavigator/mainNavigator";
import CardInfo from "../../components/Cards/Cards";

const Favoritos = () => {
    const theme = useSelector((state: any) => state?.app?.theme || '#fff');
    const params = useRoute<RouteProp<RootStackParams, 'Favoritos'>>().params;
    const flatListRef = useRef<any>([]);
    const [scrollViewWidth] = useState(0);
    const boxWidth = scrollViewWidth * 0.9;
    const boxDistance = scrollViewWidth - boxWidth;
    const halfBoxDistance = boxDistance / 2;
    const scrollX = useRef(new Animated.Value(0)).current;

    return (
        <View style={mainStyle.container}>
            <CustomHeader bgColor={theme} regresar={params?.regresar} />
            <View style={favoritosStyle.favoritosContainer}>
                <Text style={mainStyle.mainTitle}>
                    Favoritos
                </Text>
                <View style={{
                    marginTop: 50,
                    flex: 1,
                    marginVertical: 15,
                    paddingLeft: 10,
                    paddingRight: 10
                }}>
                    <FlatList
                        ref={flatListRef}
                        data={(params?.data?.favoritos || [])}
                        keyExtractor={(item, index) => `${item?.id}-${index}`}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        scrollEventThrottle={1}
                        numColumns={2}
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
                            <CardInfo title={item?.titulo}/>
                        )}
                    />
                </View>
            </View >
        </View>
    )
}



export default Favoritos;