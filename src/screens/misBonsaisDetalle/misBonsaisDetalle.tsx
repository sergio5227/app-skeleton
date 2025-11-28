import {
    Text,
    View
} from "react-native"
import CustomHeader from "../../navigators/DrawerNavigator/customHeader";
import { mainStyle } from "../../theme/styles";
import { useSelector } from "react-redux";
import misBonsaisDetalleStyle from "./misBonsaisDetalleStyle";

const MisBonsaisDetalle = () => {
    const theme = useSelector((state: any) => state?.app?.theme || '#fff');
    return (
        <View style={mainStyle.container}>
            <CustomHeader bgColor={theme} />
            <View style={misBonsaisDetalleStyle.perfilContainer}>
                <Text>misBonsaisDetalle</Text>
            </View >
        </View>
    )
}

export default MisBonsaisDetalle;