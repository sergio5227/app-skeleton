import {
    Text,
    View
} from "react-native"
import CustomHeader from "../../navigators/DrawerNavigator/customHeader";
import { mainStyle } from "../../theme/styles";
import { useSelector } from "react-redux";
import detalleTrabajoAgendaStyle from "./detalleTrabajoAgendaStyle";


const DetalleTrabajoAgenda = () => {

    const theme = useSelector((state: any) => state?.app?.theme || '#fff');

    return (
        <View style={mainStyle.container}>
            <CustomHeader bgColor={theme} />
            <View style={detalleTrabajoAgendaStyle.perfilContainer}>
                <Text>detalleTrabajoAgenda</Text>
            </View >
        </View>
    )
}



export default DetalleTrabajoAgenda;