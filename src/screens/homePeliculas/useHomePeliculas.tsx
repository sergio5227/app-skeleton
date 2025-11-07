import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParams } from "../../navigators/mainNavigator/mainNavigator";
import { useCallback, useEffect, useState } from "react";
import { postsUseCase } from "../../actions/http/posts";
import { postsFetcher } from "../../actions/http/adapters/posts.adapter";

const useHomePeliculas = () => {
    const navigation = useNavigation<NavigationProp<RootStackParams>>();
    const [data, setData] = useState<any[]>([]);

    const getData = useCallback(async () => {
        try {
            const response = await postsUseCase(postsFetcher);
            console.log(response)
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
        data
    }
}

export default useHomePeliculas;