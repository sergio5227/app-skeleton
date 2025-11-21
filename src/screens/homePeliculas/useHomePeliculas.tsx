import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParams } from "../../navigators/mainNavigator/mainNavigator";
import { useCallback, useEffect, useState } from "react";
import { postsUseCase } from "../../actions/http/posts";
import { postsFetcher } from "../../actions/http/adapters/posts.adapter";

const useHomePeliculas = () => {
    
    const navigation = useNavigation<NavigationProp<RootStackParams>>();
    const [data, setData] = useState<any[]>([]);
    const [refreshing, setRefreshing] = useState(false)

    const onRefresh = async () => {
        try {
            setRefreshing(true);
            const response = await postsUseCase(postsFetcher);
            setData(response);
            setRefreshing(false);
        } catch (error) {
            setRefreshing(false);
        }
    };

    const getData = useCallback(async () => {
        try {
            const response = await postsUseCase(postsFetcher);
            setData(response);
        } catch (error) {
            console.log('___________________', error)
        }
    }, []);

    useEffect(() => {
        getData();
    }, [getData]);

    return {
        navigation,
        data,
        refreshing,
        onRefresh
    }
}

export default useHomePeliculas;