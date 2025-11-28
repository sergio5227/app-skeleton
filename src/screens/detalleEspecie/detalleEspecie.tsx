import {
    Text,
    View
} from "react-native"
import CustomHeader from "../../navigators/DrawerNavigator/customHeader";
import { mainStyle } from "../../theme/styles";
import { useSelector } from "react-redux";
import detalleEspecieStyle from "./detalleEspecieStyle";

const DetalleEspecie = () => {
    const theme = useSelector((state: any) => state?.app?.theme || '#fff');
    return (
        <View style={mainStyle.container}>
            <CustomHeader bgColor={theme} />
            <View style={detalleEspecieStyle.perfilContainer}>
                <Text>detalleEspecie</Text>
            </View >
        </View>
    )
}



export default DetalleEspecie;