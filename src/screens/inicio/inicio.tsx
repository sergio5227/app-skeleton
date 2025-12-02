import { Animated, ImageBackground, Text, View } from "react-native"
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
        fadeAnim,
        data,
        idSeleccionado,
        flatListRef,
        boxWidth,
        halfBoxDistance,
        scrollX,
        navigation,
        handleViewableItemsChanged,
        width,
        animatedOpacity
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
                    <CardInfo title="Mis notificaciones" value={10} onPress={() => {
                        navigation.navigate('Notificaciones', {
                            regresar: true,
                            data: {
                                notificaciones: [
                                    {
                                        id: 1,
                                        titulo: 'Proximo trabajo viernes 25 diciembre',
                                        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                                        fecha: '24-12-2025',
                                        estatus: 1,//Lista de estatus 1 es activa, 2 vista
                                        tipoNotificacion: 1, // 1 recordatorios, 2 info general etc
                                        detalles: {
                                            fecha: '24-12-2025',
                                            recordatorioDiasAntes: 1,
                                            bonsai: {
                                                id: 1
                                            },
                                            fechaTrabajo: '24-12-2025'
                                        }
                                    },
                                    {
                                        id: 2,
                                        titulo: '¿Sabias que?',
                                        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                                        fecha: '24-12-2025',
                                        estatus: 1,//Lista de estatus 1 es activa, 2 vista
                                        tipoNotificacion: 2, // 1 recordatorios, 2 info general etc
                                        detalles: {
                                            fecha: '24-12-2025',
                                            recordatorioDiasAntes: 1,
                                            bonsai: null,
                                            fechaTrabajo: '24-12-2025'
                                        }
                                    },
                                    {
                                        id: 3,
                                        titulo: 'Proximo trabajo viernes 25 diciembre',
                                        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                                        fecha: '24-12-2025',
                                        estatus: 2,//Lista de estatus 1 es activa, 2 vista
                                        tipoNotificacion: 1, // 1 recordatorios, 2 info general etc
                                        detalles: {
                                            fecha: '24-12-2025',
                                            recordatorioDiasAntes: 1,
                                            bonsai: {
                                                id: 1
                                            },
                                            fechaTrabajo: '24-12-2025'
                                        }
                                    },
                                    {
                                        id: 4,
                                        titulo: '¿Sabias que?',
                                        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                                        fecha: '24-12-2025',
                                        estatus: 1,//Lista de estatus 1 es activa, 2 vista
                                        tipoNotificacion: 2, // 1 recordatorios, 2 info general etc
                                        detalles: {
                                            fecha: '24-12-2025',
                                            recordatorioDiasAntes: 1,
                                            bonsai: null,
                                            fechaTrabajo: '24-12-2025'
                                        }
                                    },
                                    {
                                        id: 5,
                                        titulo: 'Proximo trabajo viernes 25 diciembre',
                                        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                                        fecha: '24-12-2025',
                                        estatus: 1,//Lista de estatus 1 es activa, 2 vista
                                        tipoNotificacion: 1, // 1 recordatorios, 2 info general etc
                                        detalles: {
                                            fecha: '24-12-2025',
                                            recordatorioDiasAntes: 1,
                                            bonsai: {
                                                id: 1
                                            },
                                            fechaTrabajo: '24-12-2025'
                                        }
                                    },
                                    {
                                        id: 6,
                                        titulo: '¿Sabias que?',
                                        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                                        fecha: '24-12-2025',
                                        estatus: 2,//Lista de estatus 1 es activa, 2 vista
                                        tipoNotificacion: 2, // 1 recordatorios, 2 info general etc
                                        detalles: {
                                            fecha: '24-12-2025',
                                            recordatorioDiasAntes: 1,
                                            bonsai: null,
                                            fechaTrabajo: '24-12-2025'
                                        }
                                    }
                                ]
                            }
                        })
                    }} />
                    <CardInfo title="Total bonsais" value={195} onPress={() => {
                        navigation.navigate('MisBonsais', { regresar: true, data: {} })
                    }} />
                    <CardInfo title="favoritos" value={9} onPress={() => {
                        navigation.navigate('Favoritos', {
                            regresar: true, data: {
                                favoritos: [
                                    {
                                        id: 1,
                                        ruta: 'ExplorarEspecies',
                                        titulo: 'Explorar especies',
                                        bonsai: null,
                                        entrada: null,
                                        tipoFavorito: 1,//aqui la lista es 1 secciones, 2 arboles (mios o de otros), 3 entradas del blog
                                    },
                                    {
                                        id: 2,
                                        ruta: 'MisBonsaisDetalle',
                                        titulo: 'Bonsai 1',
                                        bonsai: {
                                            id: 1
                                        },
                                        entrada: null,
                                        tipoFavorito: 2,//aqui la lista es 1 secciones, 2 arboles (mios o de otros), 3 entradas del blog
                                    },
                                    {
                                        id: 3,
                                        ruta: 'DetalleEntrada',
                                        titulo: 'Como hacer tanuki',
                                        bonsai: null,
                                        entrada: {
                                            id: 1
                                        },
                                        tipoFavorito: 3,//aqui la lista es 1 secciones, 2 arboles (mios o de otros), 3 entradas del blog
                                    }
                                ]
                            }
                        })
                    }} />
                    <CardInfo title="Que hacer en" value={'Primavera'} onPress={() => {
                        navigation.navigate('Quehacer', {
                            regresar: true, data: {
                                id: 1,
                                titulo: 'Que hacer en primavera',
                                descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
                            }
                        })
                    }} />
                </View>
                <Animated.View style={[{ opacity: animatedOpacity }, { height: isBottomSheetOpen ? 100 : 250, position: 'relative', bottom: isBottomSheetOpen ? 290 : 100, width: '100%' }]}>
                    <BarChart alto={isBottomSheetOpen ? 100 : 250} title="Tus bonsais por especie" />
                </Animated.View>
            </ImageBackground>
            <CustomBottomSheet
                handleSheetChanges={handleSheetChanges}
                index={1}
                ref={bottomSheetRef}
                snapPoints={['4%', '30%']}
                backgroundColor={theme}
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