import {
    Text,
    View
} from "react-native"
import CustomHeader from "../../navigators/DrawerNavigator/customHeader";
import { mainStyle } from "../../theme/styles";
import { useSelector } from "react-redux";
import quehacerStyle from "./quehacerStyle";
import { useRoute, RouteProp } from "@react-navigation/native";
import { RootStackParams } from "../../navigators/mainNavigator/mainNavigator";
import CustomButton from "../../components/CustomButton/CustomButton";

const Quehacer = () => {
    const theme = useSelector((state: any) => state?.app?.theme || '#fff');
    const params = useRoute<RouteProp<RootStackParams, 'Quehacer'>>().params;
    return (
        <View style={mainStyle.container}>
            <CustomHeader bgColor={theme} regresar={params?.regresar} />
            <View style={quehacerStyle.perfilContainer}>
                <Text style={mainStyle.mainTitle}>
                    {params?.data?.titulo}
                </Text>
                <View style={{ borderBottomWidth: 1, borderColor: '#e5e3e3ff', marginLeft: 5, marginRight: 5, marginTop: 20, marginBottom: 20 }} />
                <Text style={[mainStyle.regularText, { flex: 1 }]}>
                    {params?.data?.descripcion}
                </Text>
                <View>
                    <CustomButton height={60} title={'Ver información'} onPress={() => { }} />
                </View>
            </View >
        </View>
    )
}

export default Quehacer;