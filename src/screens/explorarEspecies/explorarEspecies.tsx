import { Alert, ScrollView, StyleSheet, Text, View } from "react-native"
import CustomHeader from "../../navigators/DrawerNavigator/customHeader";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParams } from "../../navigators/mainNavigator/mainNavigator";
import { mainCcolors, mainStyle } from "../../theme/styles";
import { useSelector } from "react-redux";
import especies from "../../data/bonsaiEspecies";
import EspeciesCard from "../../components/especiesCard/especiesCard";

const ExplorarEspecies = () => {
    const theme = useSelector((state: any) => state?.app?.theme || '#fff');
    const params = useRoute<RouteProp<RootStackParams, 'ExplorarEspecies'>>().params;

    return (
        <View style={mainStyle.container}>
            <CustomHeader bgColor={theme} regresar={params?.regresar} />
            <View style={ExplorarEspeciesStyle.container}>
                <Text style={mainStyle.mainTitle}>
                    Explorar especies para bonsai
                </Text>
                <View style={{ flex: 1 }}>
                    <ScrollView style={{ flex: 1 }}>
                        {
                            especies.map((a) => {
                                return (
                                    <View key={a.id}>
                                        <EspeciesCard  titulo={a.especie} descripcion={a.descripcion} img={require('../../assets/img/logo/hola_bonsai.jpg')} ver={() => Alert.alert('1', '1')} />
                                        {/* <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', padding: 5 }}>
                                            {a.tecnicas?.map((e, i) => {
                                                return (
                                                    <View key={'___' + i} style={{ borderWidth: 1, borderRadius: 10, padding: 3, margin: 2, backgroundColor: mainCcolors.primaryLight }}>
                                                        <Text style={{ color: '#fff' }}>{e}</Text>
                                                    </View>
                                                )
                                            })}
                                        </View> */}
                                    </View>
                                )
                            })
                        }
                    </ScrollView>
                </View>
            </View >
        </View>
    )
}

const ExplorarEspeciesStyle = StyleSheet.create({
    container: {
        marginTop: 50,
        flex: 1,
        marginVertical: 15,
        paddingLeft: 10,
        paddingRight: 10
    }
});

export default ExplorarEspecies;