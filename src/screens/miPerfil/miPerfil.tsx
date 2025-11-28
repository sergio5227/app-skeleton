import { 
    ImageBackground, 
    Pressable, 
    Text, 
    View 
} from "react-native"
import CustomHeader from "../../navigators/DrawerNavigator/customHeader";
import { mainStyle } from "../../theme/styles";
import { useSelector } from "react-redux";
import miPerfilStyle from "./miPerfilStyle";
import { IconButton } from "react-native-paper";
import CustomButton from "../../components/CustomButton/CustomButton";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParams } from "../../navigators/perfilNavigator/perfilNavigator";


const MiPerfil = () => {
    const theme = useSelector((state: any) => state?.app?.theme || '#fff');
    const navigation = useNavigation<NavigationProp<RootStackParams>>();
    return (
        <View style={mainStyle.container}>
            <CustomHeader bgColor={theme} />
            <View style={miPerfilStyle.perfilContainer}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ImageBackground
                        source={require('../../assets/img/logo/hola_bonsai.jpg')}
                        style={{ height: 150, width: 150, marginBottom: 10, borderRadius: 100 }}
                        imageStyle={miPerfilStyle.imageContainerImage}>
                        <View style={{ height: 30, width: 30, position: 'absolute', right: 15, backgroundColor: '#fff' }}>
                            <Pressable>
                                <IconButton
                                    icon="image-edit"
                                    iconColor={'#f12c2cff'}
                                    size={30}
                                    style={{ margin: 0, padding: 0 }}
                                />
                            </Pressable>
                        </View>
                    </ImageBackground>
                    <Text>Sergio Enrique Cruz Martinez</Text>
                    <View style={{justifyContent:'flex-start', width:'80%', marginTop:40}}>
                        <Text style={{borderWidth:1, borderRadius:10, padding:5, marginBottom:5}}>Plan: Gratuito</Text>
                        <Text style={{borderWidth:1, borderRadius:10, padding:5, marginBottom:5}}>Perfíl: Público</Text>
                    </View>
                </View>
                <View style={{ flex: 1}}>
                    <CustomButton title={'Cambiar plan'} onPress={() => {
                        navigation.navigate('CambiarPlan', { regresar: true, data: {} })
                     }} />
                    <CustomButton title={'Perfil publico'} onPress={() => { }} />
                    <CustomButton title={'Cerrar sesión'} onPress={() => { }} />
                </View>
            </View >
        </View>
    )
}

export default MiPerfil;