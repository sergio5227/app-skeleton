import {
    Text,
    View
} from "react-native"
import CustomHeader from "../../navigators/DrawerNavigator/customHeader";
import { mainStyle } from "../../theme/styles";
import { useSelector } from "react-redux";
import notificacionesStyle from "./notificacionesStyle";

const Notificaciones = () => {
    const theme = useSelector((state: any) => state?.app?.theme || '#fff');
    return (
        <View style={mainStyle.container}>
            <CustomHeader bgColor={theme} />
            <View style={notificacionesStyle.perfilContainer}>
                <Text>notificaciones</Text>
            </View >
        </View>
    )
}

export default Notificaciones;