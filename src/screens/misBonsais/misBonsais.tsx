import { FlatList } from "react-native-gesture-handler";
import { Animated, ImageBackground, Text, View } from "react-native"
import CustomHeader from "../../navigators/DrawerNavigator/customHeader";
import { mainStyle } from "../../theme/styles";
import CustomBottomSheet from "../../components/BottomSheet/BottomSheet";
import PuntosPaginacion from "../../components/PuntosPaginacion/PuntosPaginacion";
import useMisBonsais from "./useMisBonsais";
import misBonsaisStyle from "./misBonsaisStyles";

const MisBonsais = () => {

    const {
        params,
        theme,
        flatListRef,
        data,
        boxWidth,
        halfBoxDistance,
        scrollX,
        handleViewableItemsChanged,
        width,
        bottomSheetRef,
        handleSheetChanges,
        animatedOpacity,
        isBottomSheetOpen
    } = useMisBonsais()

    return (
        <View style={mainStyle.container}>
            <CustomHeader regresar={params?.regresar} bgColor={theme} />
            {/* <View style={misBonsaisStyle.content}> */}
            <Animated.View style={[misBonsaisStyle.content, { opacity: animatedOpacity }, { marginBottom: isBottomSheetOpen ? '62%' : '10%' }]}>
                <Text style={mainStyle.mainTitle}>
                    Tus bonsais
                </Text>
                <FlatList
                    ref={flatListRef}
                    data={data}
                    keyExtractor={(item, index) => `${index}-`}
                    horizontal
                    scrollEventThrottle={1}
                    snapToInterval={boxWidth}
                    viewabilityConfig={{
                        itemVisiblePercentThreshold: 50
                    }}
                    ListEmptyComponent={() => <Text>Sin registros</Text>}
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
                        <ImageBackground
                            source={require('../../assets/img/bonsai.jpg')}
                            style={{ width: width - 60, marginRight: 5, borderRadius: 20 }}
                            imageStyle={{ flex: 1, borderRadius: 20 }}
                        >
                            <View style={{ flex: 1, borderRadius: 20 }}>
                                <View style={{ position: 'absolute', bottom: 0, marginBottom: 30 }}>
                                    <Text style={{ fontSize: 50, fontWeight: 'bold', color: '#fff' }}> {item?.nombre} </Text>
                                    <View style={{ opacity: 0.6, backgroundColor: '#fff', position: 'relative', left: 5, borderRadius: 20 }}>
                                        <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#fff' }}> {item?.especie} </Text>
                                    </View>
                                </View>
                            </View>

                        </ImageBackground>
                    )}
                    onViewableItemsChanged={handleViewableItemsChanged}
                />
                <PuntosPaginacion data={data} width={width} scrollX={scrollX} />
            </Animated.View>
            {/* </View> */}
            <CustomBottomSheet
                handleSheetChanges={handleSheetChanges}
                index={0}
                ref={bottomSheetRef}
                snapPoints={['4%', '30%']}
                backgroundColor={theme}
            >
                <View style={{ flex: 1, backgroundColor: 'grey' }}>
                    <Text>Mostrar opciones aquí</Text>
                </View>
            </CustomBottomSheet>
        </View >
    )
}

export default MisBonsais;