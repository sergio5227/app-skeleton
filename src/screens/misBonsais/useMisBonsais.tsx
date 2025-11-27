import { Animated, Dimensions } from "react-native"
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParams } from "../../navigators/mainNavigator/mainNavigator";
import { useSelector } from "react-redux";
import { useBottomSheet } from "../../contexts/bottomSheetContext";
import { useCallback, useRef, useState } from "react";

const useMisBonsais = () => {
    
    const animatedOpacity = useRef(new Animated.Value(0)).current;
    const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(true);
    const params = useRoute<RouteProp<RootStackParams, 'MisBonsais'>>().params;
    const [idSeleccionado, setIdSeleccionado] = useState<any>(0);
    const theme = useSelector((state: any) => state?.app?.theme || '#fff');
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const { width } = Dimensions.get("window");
    const { bottomSheetRef } = useBottomSheet();
    const flatListRef = useRef<any>([]);
    const [scrollViewWidth] = useState(0);
    const boxWidth = scrollViewWidth * 0.9;
    const boxDistance = scrollViewWidth - boxWidth;
    const halfBoxDistance = boxDistance / 2;
    const scrollX = useRef(new Animated.Value(0)).current;
    
    const [data, setData] = useState([
        { id: 1, nombre: 'bonsai 1', especie: 'Conifera', fotoPortada: 'base64', historia: 'Loremp insump' },
        { id: 2, nombre: 'bonsai 2', especie: 'Conifera', fotoPortada: 'base64', historia: 'Loremp insump' },
        { id: 3, nombre: 'bonsai 3', especie: 'Caducos', fotoPortada: 'base64', historia: 'Loremp insump' },
        { id: 4, nombre: 'bonsai 4', especie: 'Ornamentales', fotoPortada: 'base64', historia: 'Loremp insump' },
        { id: 5, nombre: 'bonsai 5', especie: 'perenne', fotoPortada: 'base64', historia: 'Loremp insump' }
    ]);

    const handleViewableItemsChanged = useCallback(({ viewableItems }: any) => {
        if (viewableItems.length > 0) {
            const index = viewableItems[0].index;
            Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 200,
                useNativeDriver: true,
            }).start(() => {
                setTimeout(() => {
                    setIdSeleccionado(String(index ?? "0"));
                    Animated.timing(fadeAnim, {
                        toValue: 1,
                        duration: 200,
                        useNativeDriver: true,
                    }).start()
                }, 500);
            })
        }
    }, []);

    const handleSheetChanges = useCallback((index: number) => {
        Animated.timing(animatedOpacity, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true
        }).start(() => {
            setIsBottomSheetOpen(index > 0);
            setTimeout(() => {
                Animated.timing(animatedOpacity, {
                    toValue: 1,
                    duration: 200,
                    useNativeDriver: true
                }).start()
            }, 1000);
        })

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
        bottomSheetRef,
        handleSheetChanges,
        animatedOpacity,
        isBottomSheetOpen
    }
}

export default useMisBonsais;