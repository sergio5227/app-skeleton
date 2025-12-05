import { FlatList } from "react-native-gesture-handler";
import { Animated, Appearance, ImageBackground, Pressable, Text, TextInput, View } from "react-native"
import CustomHeader from "../../navigators/DrawerNavigator/customHeader";
import { mainCcolors, mainStyle } from "../../theme/styles";
import PuntosPaginacion from "../../components/PuntosPaginacion/PuntosPaginacion";
import useMisBonsais from "./useMisBonsais";
import misBonsaisStyle from "./misBonsaisStyles";
import LoaderIndicator from "../../components/LoaderIndicator/LoaderIndicator";
import { IconButton } from "react-native-paper";

const MisBonsais = () => {

    const {
        params,
        theme,
        flatListRef,
        boxWidth,
        halfBoxDistance,
        scrollX,
        handleViewableItemsChanged,
        width,
        navigation,
        setSearch,
        loading,
        filterData,
        procesando
    } = useMisBonsais()

    return (
        <View style={mainStyle.container}>
            <CustomHeader regresar={params?.regresar} bgColor={theme} />
            <View style={[misBonsaisStyle.content]}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TextInput style={{
                        backgroundColor: '#fff',
                        padding: 10,
                        borderRadius: 10,
                        marginBottom: 15
                    }} placeholder="Busca a tu bonsai" onChangeText={setSearch} />

                    <IconButton
                        icon="plus"
                        iconColor={Appearance.getColorScheme() === 'dark' ? mainCcolors.whiteText : mainCcolors.darkText}
                        size={20}
                        onPress={() => {
                            navigation.navigate('AgregaBonsai', { regresar: true, data: {} });
                        }}
                        style={{ borderWidth: 1, borderColor: Appearance.getColorScheme() === 'dark' ? mainCcolors.whiteText : mainCcolors.darkText }}
                    />
                </View>
                {!procesando ? <FlatList
                    ref={flatListRef}
                    data={filterData}
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
                                    <Pressable onPress={() => {
                                        navigation.navigate('BonsaiDetailNavigator', {
                                            regresar: true, data: {
                                                detalle: {
                                                    id: 1,
                                                    nombre: item?.nombre,
                                                    especie: item?.especie,
                                                    descripcion: 'Es un arbol...',
                                                    portada: '../../assets/img/bonsai.jpg',
                                                    fechasTrabajo: [
                                                        {
                                                            id: 1,
                                                            fecha: '01-12-2025',
                                                            descripcion: 'Corte de aciculas',
                                                            materiales: null,
                                                            imagenTrabajo: '../../assets/img/bonsai.jpg'
                                                        }, {
                                                            id: 2,
                                                            fecha: '02-12-2025',
                                                            descripcion: 'Abonado',
                                                            materiales: [{
                                                                id: 1,
                                                                tipo: 1,
                                                                nombre: 'Abono'
                                                            }],
                                                            imagenTrabajo: '../../assets/img/bonsai.jpg'
                                                        }
                                                    ],
                                                    imagenesAvance: [
                                                        {
                                                            id: 1,
                                                            img: '../../assets/img/bonsai.jpg',
                                                            fecha: '01-12-2025'
                                                        },
                                                        {
                                                            id: 2,
                                                            img: '../../assets/img/bonsai.jpg',
                                                            fecha: '02-12-2025'
                                                        }
                                                    ]
                                                }
                                            }
                                        })
                                    }}>
                                        <Text style={{ fontSize: 50, fontWeight: 'bold', color: '#fff' }}> {item?.nombre} </Text>
                                    </Pressable>
                                    <View style={{ opacity: 0.6, backgroundColor: '#fff', position: 'relative', left: 5, borderRadius: 20 }}>
                                        <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#fff' }}> {item?.especie} </Text>
                                    </View>
                                </View>
                            </View>
                        </ImageBackground>
                    )}
                    onViewableItemsChanged={handleViewableItemsChanged}
                /> : null}
                {!procesando ? <PuntosPaginacion data={filterData} width={width} scrollX={scrollX} /> : null}
            </View>
            <LoaderIndicator visible={loading || procesando} />
        </View >
    )
}

export default MisBonsais;