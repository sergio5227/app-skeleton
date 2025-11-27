import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Animated, Dimensions } from "react-native"
import { RootStackParams } from "../../navigators/mainNavigator/mainNavigator";
import { useBottomSheet } from "../../contexts/bottomSheetContext";
import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../../actions/dispatches/theme";

const useInicio = () => {

    const animatedOpacity = useRef(new Animated.Value(0)).current;
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(true);
    const dispatch = useDispatch();
    const theme = useSelector((state: any) => state?.app?.theme || '#fff');
    const currentIndex = useRef(0);
    const { width } = Dimensions.get("window");
    const navigation = useNavigation<NavigationProp<RootStackParams>>();
    const { bottomSheetRef } = useBottomSheet();
    const [idSeleccionado, setIdSeleccionado] = useState<any>(0);
    const flatListRef = useRef<any>([]);
    const [scrollViewWidth] = useState(0);
    const boxWidth = scrollViewWidth * 0.9;
    const boxDistance = scrollViewWidth - boxWidth;
    const halfBoxDistance = boxDistance / 2;
    const scrollX = useRef(new Animated.Value(0)).current;

    const data = [
        {
            id: 1,
            text: 'Mis bonsais',
            navigates: 'MisBonsais',
            descripcion: 'Controla tus bonsáis fácilmente: agrégalos, recibe alertas y sigue su progreso. ¡Empieza con tu primer bonsái!',
            descripcionCon: 'Sigue cuidando tus bonsáis con precisión: agenda tareas, activa alertas y observa cómo evolucionan día a día.',
            color: '#aef187ff'
        }, {
            id: 2,
            text: 'Explorar especies',
            navigates: 'ExplorarEspecies',
            descripcion: 'Aprende todo sobre cada especie: cuidados, riego, abonado y técnicas clave. ¡Explora tu primera especie!',
            descripcionCon: 'Domina cada especie con información clara de cuidados y técnicas esenciales, todo en un solo lugar.',
            color: '#68cdefff'
        }, {
            id: 3,
            text: 'Calendario de cuidados',
            navigates: 'Calendario',
            descripcion: 'Organiza las tareas de tus bonsáis: programa trabajos, revisa pendientes y recibe recordatorios. ¡Empieza a planear hoy!',
            descripcionCon: 'Mantén tus trabajos siempre en orden: agenda, revisa y recibe recordatorios para que tus bonsáis nunca se queden atrás.',
            color: '#ecc068ff'
        }
    ];

    const handleViewableItemsChanged = useCallback(({ viewableItems }: any) => {
        if (viewableItems.length > 0) {
            const index = viewableItems[0].index;
            Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }).start(() => {
                setTimeout(() => {
                    setIdSeleccionado(String(index ?? "0"));
                    Animated.timing(fadeAnim, {
                        toValue: 1,
                        duration: 300,
                        useNativeDriver: true,
                    }).start()
                }, 500);
            })
        }
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            currentIndex.current += 1;
            if (currentIndex.current >= data.length) {
                currentIndex.current = 0;
            }
            flatListRef.current?.scrollToIndex({
                index: currentIndex.current,
                animated: true,
            });
        }, 6000);
        return () => clearInterval(interval);
    }, [data]);

    const handleColor = () => {
        dispatch(setTheme(data?.[idSeleccionado]?.color || '#fff'));
    }


    useEffect(() => {
        handleColor()
    }, [idSeleccionado, handleColor]);

    const handleSheetChanges = useCallback((index: number) => {
        Animated.timing(animatedOpacity, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true
        }).start(() => {
            setIsBottomSheetOpen(index > 0);
            setTimeout(() => {
                Animated.timing(animatedOpacity, {
                    toValue: 1,
                    duration: 300,
                    useNativeDriver: true
                }).start()
            }, 1000);
        })

    }, []);

    return {
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
    }
}

export default useInicio;