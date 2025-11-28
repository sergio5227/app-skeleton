import {
    Text,
    View
} from "react-native"
import CustomHeader from "../../navigators/DrawerNavigator/customHeader";
import { mainStyle } from "../../theme/styles";
import { useSelector } from "react-redux";
import favoritosStyle from "./favoritosStyle";

const Favoritos = () => {

    const theme = useSelector((state: any) => state?.app?.theme || '#fff');

    return (
        <View style={mainStyle.container}>
            <CustomHeader bgColor={theme} />
            <View style={favoritosStyle.perfilContainer}>
                <Text>favoritos</Text>
            </View >
        </View>
    )
}



export default Favoritos;