import { Animated, ImageBackground, StyleSheet, Text, View } from "react-native"
import { FlatList } from "react-native-gesture-handler";
import CustomHeader from "../../navigators/DrawerNavigator/customHeader";
import { mainStyle } from "../../theme/styles";
import CustomButton from "../../components/CustomButton/CustomButton";
import CustomBottomSheet from "../../components/BottomSheet/BottomSheet";
import PuntosPaginacion from "../../components/PuntosPaginacion/PuntosPaginacion";
import CardInfo from "../../components/Cards/Cards";
import BarChart from "../../components/charts/barras/BarrasChart";
import useInicio from "./useInicio";
import inicioStyles from "./inicioStyles";

const Inicio = () => {

   const {
        theme,
        isBottomSheetOpen,
        handleSheetChanges,
        bottomSheetRef,
        bgColor,
        fadeAnim,
        data,
        idSeleccionado,
        flatListRef,
        boxWidth,
        halfBoxDistance,
        scrollX,
        navigation,
        handleViewableItemsChanged,
        width
   } = useInicio();

    return (
        <View style={mainStyle.container}>
            <CustomHeader bgColor={theme} />
            <ImageBackground
                source={require('../../assets/img/logo/hola_bonsai.jpg')}
                style={inicioStyles.imageContainerView}
                imageStyle={inicioStyles.imageContainerImage}>
                <View style={{ width: '100%' }}>
                    <Text style={mainStyle.mainTitle}>
                        ¡Hola bonsai!
                    </Text>
                </View>
                <View style={{ width: '100%' }}>
                    <Text style={mainStyle.regularText}>
                        Aprendiendo del arte del bonsai, un árbol a la vez...
                    </Text>
                </View>
                <View style={inicioStyles.cardContainer}>
                    <CardInfo title="Mis notificaciones" value={10} />
                    <CardInfo title="Total bonsais" value={195} />
                    <CardInfo title="favoritos" value={9} />
                    <CardInfo title="Que hacer en" value={'Primavera'} />
                </View>
                <View style={{ height: isBottomSheetOpen ? 100 : 250, position: 'relative', bottom: isBottomSheetOpen ? 290 : 100, width: '100%' }}>
                    <BarChart alto={isBottomSheetOpen ? 100 : 250} title="Tus bonsais por especie" />
                </View>
            </ImageBackground>
            <CustomBottomSheet
                handleSheetChanges={handleSheetChanges}
                index={1}
                ref={bottomSheetRef}
                snapPoints={['4%', '30%']}
                backgroundColor={bgColor}
            >
                <View>
                    <View style={inicioStyles.descripcionContainer}>
                        <Animated.Text
                            style={{
                                fontSize: 15,
                                opacity: fadeAnim
                            }}
                        >
                            {data?.[idSeleccionado]?.descripcion}
                        </Animated.Text>
                    </View>
                    <View>
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
                                <View style={{ width: 325 }}>
                                    <CustomButton height={40} title={item?.text} onPress={() => {
                                        navigation.navigate((item?.navigates as any), { regresar: true, data: {} });
                                    }} />
                                </View>
                            )}
                            onViewableItemsChanged={handleViewableItemsChanged}
                        />
                        <PuntosPaginacion data={data} width={width} scrollX={scrollX} />
                    </View>
                </View>
            </CustomBottomSheet>
        </View>
    )
}



export default Inicio;