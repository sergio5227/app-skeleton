import { Text, View } from "react-native";
import { mainStyle } from "../../theme/styles";
import CustomHeader from "../../navigators/DrawerNavigator/customHeader";
import { useSelector } from "react-redux";
import AgregaBonsaiForm from "../../forms/agregaBonsaiForm/agregaBonsaiForm";

const AgregaBonsai = () => {
    const theme = useSelector((state: any) => state?.app?.theme || '#fff');
    return (
        <View style={mainStyle.container}>
            <CustomHeader bgColor={theme} regresar />
            <View style={{
                flex: 1,
                marginTop: 50,
                paddingLeft: 10,
                paddingRight: 10,
                justifyContent: 'space-between',
            }}>
                <Text style={mainStyle.mainTitle}>
                    Formulario
                </Text>
                <AgregaBonsaiForm onSubmit={(a)=>{
                    console.log(a)
                }} />
            </View>
        </View>

    )
}

export default AgregaBonsai;