import {
    Animated,
    Text,
    View
} from "react-native"
import CustomHeader from "../../navigators/DrawerNavigator/customHeader";
import { mainStyle } from "../../theme/styles";
import cambiarPlanStyle from "./cambiarPlanStyle";
import { FlatList } from "react-native-gesture-handler";
import PuntosPaginacion from "../../components/PuntosPaginacion/PuntosPaginacion";
import useCambiarPlan from "./useCambiarPlan";
import CustomButton from "../../components/CustomButton/CustomButton";

const CambiarPlan = () => {
    const {
        theme,
        flatListRef,
        data,
        boxWidth,
        halfBoxDistance,
        scrollX,
        handleViewableItemsChanged,
        width,
        animatedOpacity
    } = useCambiarPlan()
    return (
        <View style={{ ...mainStyle.container, ...{} }}>
            <CustomHeader bgColor={theme} regresar={true} />
            <View style={
                [
                    cambiarPlanStyle.perfilContainer,
                    { opacity: animatedOpacity }
                ]
            }>
                <FlatList
                    ref={flatListRef}
                    data={data}
                    keyExtractor={(item, index) => `${item?.id}-${index}`}
                    horizontal
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
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => (
                        <View style={
                            [
                                cambiarPlanStyle.itemContainer,
                                {
                                    width: width - 60,
                                    backgroundColor: item?.color
                                }
                            ]
                        } >
                            <Text style={cambiarPlanStyle.itemTitle}> {item?.nombre} </Text>
                            <Text style={{ fontSize: 20 }}> {item?.precio} {item?.recurrencia} </Text>
                            <View style={cambiarPlanStyle.divider} />
                            <Text style={{ fontSize: 30 }}> {item?.descripcion} </Text>
                            <View style={cambiarPlanStyle.itemDetailContainer}>
                                <Text style={cambiarPlanStyle.itemDetailBeneficios}> Beneficios</Text>
                                <View style={{ width: '100%' }}>
                                    {
                                        item?.detail?.beneficios.map((r: any, n: number) => {
                                            return (
                                                <View key={n}>
                                                    <Text> &bull; {r} </Text>
                                                </View>
                                            )
                                        })
                                    }
                                </View>
                                <View style={cambiarPlanStyle.btnContratar}>
                                    <CustomButton title="Selecionar plan" onPress={() => { }} />
                                </View>
                            </View>
                        </View>
                    )}
                    onViewableItemsChanged={handleViewableItemsChanged}
                />
                <PuntosPaginacion data={data} width={width} scrollX={scrollX} />
            </View>
        </View>
    )
}

export default CambiarPlan;