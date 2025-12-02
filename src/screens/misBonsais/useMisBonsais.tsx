import { Animated, Dimensions } from "react-native"
import { NavigationProp, RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { RootStackParams } from "../../navigators/mainNavigator/mainNavigator";
import { useSelector } from "react-redux";
import { useCallback, useRef, useState } from "react";

const useMisBonsais = () => {
    
    const navigation = useNavigation<NavigationProp<RootStackParams>>();
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
        { id: 1, nombre: 'bonsai 1', especie: 'Conifera', fotoPortada: 'base64', historia: 'Loremp insump' },
        { id: 2, nombre: 'bonsai 2', especie: 'Conifera', fotoPortada: 'base64', historia: 'Loremp insump' },
        { id: 3, nombre: 'bonsai 3', especie: 'Caducos', fotoPortada: 'base64', historia: 'Loremp insump' },
        { id: 4, nombre: 'bonsai 4', especie: 'Ornamentales', fotoPortada: 'base64', historia: 'Loremp insump' },
        { id: 5, nombre: 'bonsai 5', especie: 'perenne', fotoPortada: 'base64', historia: 'Loremp insump' }
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
        navigation
    }
}

export default useMisBonsais;