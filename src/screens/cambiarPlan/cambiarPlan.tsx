import {
    Text,
    View
} from "react-native"
import CustomHeader from "../../navigators/DrawerNavigator/customHeader";
import { mainStyle } from "../../theme/styles";
import { useSelector } from "react-redux";
import cambiarPlanStyle from "./cambiarPlanStyle";


const CambiarPlan = () => {

    const theme = useSelector((state: any) => state?.app?.theme || '#fff');

    return (
        <View style={mainStyle.container}>
            <CustomHeader bgColor={theme} />
            <View style={cambiarPlanStyle.perfilContainer}>
                <Text>cambiarPlan</Text>
            </View >
        </View>
    )
}



export default CambiarPlan;