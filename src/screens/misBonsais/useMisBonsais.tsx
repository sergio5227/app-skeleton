import { Animated, Dimensions } from "react-native"
import { NavigationProp, RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { RootStackParams } from "../../navigators/mainNavigator/mainNavigator";
import { useSelector } from "react-redux";
import { use, useCallback, useEffect, useRef, useState } from "react";

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

    const [loading, setLoading] = useState(false);
    const [procesando, setProcesando] = useState(false);
    const [search, setSearch] = useState('');
    const [debouncedSearch, setDebouncedSearch] = useState('');
    const [filterData, setFilterData] = useState<any[]>([]);

    const [data, setData] = useState<any>([]);

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

    const getData = useCallback(async () => {
        try {
            setLoading(true)
            setProcesando(true)
            setTimeout(() => {
                setFilterData([
                    { id: 1, nombre: 'bonsai 1', especie: 'Conifera', fotoPortada: 'base64', historia: 'Loremp insump' },
                    { id: 2, nombre: 'bonsai 2', especie: 'Conifera', fotoPortada: 'base64', historia: 'Loremp insump' },
                    { id: 3, nombre: 'bonsai 3', especie: 'Caducos', fotoPortada: 'base64', historia: 'Loremp insump' },
                    { id: 4, nombre: 'bonsai 4', especie: 'Ornamentales', fotoPortada: 'base64', historia: 'Loremp insump' },
                    { id: 5, nombre: 'bonsai 5', especie: 'perenne', fotoPortada: 'base64', historia: 'Loremp insump' }
                ]);
                setData([
                    { id: 1, nombre: 'bonsai 1', especie: 'Conifera', fotoPortada: 'base64', historia: 'Loremp insump' },
                    { id: 2, nombre: 'bonsai 2', especie: 'Conifera', fotoPortada: 'base64', historia: 'Loremp insump' },
                    { id: 3, nombre: 'bonsai 3', especie: 'Caducos', fotoPortada: 'base64', historia: 'Loremp insump' },
                    { id: 4, nombre: 'bonsai 4', especie: 'Ornamentales', fotoPortada: 'base64', historia: 'Loremp insump' },
                    { id: 5, nombre: 'bonsai 5', especie: 'perenne', fotoPortada: 'base64', historia: 'Loremp insump' }
                ])
                setLoading(false)
                setProcesando(false)
            }, 2000);
        } catch (error) {
            console.log(error);
            setLoading(false);
            setProcesando(false)
        }
    }, []);

    useEffect(() => {
        getData();
    }, [getData])


    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedSearch(search);
        }, 300);
        return () => clearTimeout(handler); // limpia el timeout si escribe de nuevo
    }, [search]);

    useEffect(() => {
        setLoading(true)
        if (!debouncedSearch.trim()) {
            setFilterData(data); // si está vacío, muestra todo
            setLoading(false)
        } else {
            const filtered = data.filter((p:any) =>
                p.nombre.toLowerCase().includes(debouncedSearch.toLowerCase())
            );
            setFilterData(filtered);
            setLoading(false)
        }
    }, [debouncedSearch, data]);

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
        navigation,
        setSearch,
        loading,
        filterData,
        procesando
    }
}

export default useMisBonsais;