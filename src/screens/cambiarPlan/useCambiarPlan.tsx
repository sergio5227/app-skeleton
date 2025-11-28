import { Animated, Dimensions } from "react-native"
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParams } from "../../navigators/mainNavigator/mainNavigator";
import { useSelector } from "react-redux";
import { useCallback, useRef, useState } from "react";

const useCambiarPlan = () => {

    const animatedOpacity = useRef(new Animated.Value(0)).current;
    const params = useRoute<RouteProp<RootStackParams, 'MisBonsais'>>().params;
    const theme = useSelector((state: any) => state?.app?.theme || '#fff');
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const { width } = Dimensions.get("window");
    const flatListRef = useRef<any>([]);
    const [scrollViewWidth] = useState(0);
    const boxWidth = scrollViewWidth * 0.9;
    const boxDistance = scrollViewWidth - boxWidth;
    const halfBoxDistance = boxDistance / 2;
    const scrollX = useRef(new Animated.Value(0)).current;

    const [data, setData] = useState([
        {
            id: 1, color: '#eb9a9aff', precio: '$ 0.00', recurrencia: 'Mensual', nombre: 'Plan free', descripcion: 'Ten acceso a las funcionalidades basicas', detail: {
                beneficios: ['Hasta 10 bonsais', 'Agrega hasta 10 tabajos por bonsai']
            }
        },
        {
            id: 2, color: '#a4f5c3ff', precio: '$ 15.00', recurrencia: 'Mensual', nombre: 'Plan top', descripcion: 'Ten acceso a las funcionalidades basicas, agrega hasta 100 bonsais y recibe recordatorios', detail: {
                beneficios: ['Hasta 100 bonsais', 'Agrega hasta 100 trabajos por bonsai', 'Recibe notificaciones de tus eventos con antelación', 'Consulta a nuetro modelo de IA hasta 10 veces por mes', 'Obten un 5% de descuento en los productos que se anuncien en la app']
            }
        },
        {
            id: 3, color: '#b2aaf2ff', precio: '$ 40.00', recurrencia: 'Mensual', nombre: 'Plan premium', descripcion: 'Ten acceso a todas las funcionalidades ilimitadas', detail: {
                beneficios: ['Agrega bonsais ilimitados', 'Trabajos ilimitados por bonsai', 'Recibe notificaciones de tus eventos con antelación', 'Consulta a nuestro modelo de IA ilimitadamente por cada bonsai que tengas', 'Obten un 10% de descuento en los productos que se anuncien en la app']
            }
        },
    ]);

    const handleViewableItemsChanged = useCallback(({ viewableItems }: any) => {
        if (viewableItems.length > 0) {
            Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 200,
                useNativeDriver: true,
            }).start(() => {
                setTimeout(() => {
                    Animated.timing(fadeAnim, {
                        toValue: 1,
                        duration: 200,
                        useNativeDriver: true,
                    }).start()
                }, 500);
            })
        }
    }, []);

    return {
        params,
        theme,
        flatListRef,
        data,
        boxWidth,
        halfBoxDistance,
        scrollX,
        handleViewableItemsChanged,
        width,
        animatedOpacity
    }
}

export default useCambiarPlan;