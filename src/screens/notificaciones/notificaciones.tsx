import {
    Text,
    TouchableOpacity,
    View
} from "react-native"
import CustomHeader from "../../navigators/DrawerNavigator/customHeader";
import { mainCcolors, mainStyle } from "../../theme/styles";
import { useSelector } from "react-redux";
import notificacionesStyle from "./notificacionesStyle";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParams } from "../../navigators/mainNavigator/mainNavigator";
import CardNotificacion from "../../components/CardNotificacion/CardNotificacion";
import { SwipeListView } from "react-native-swipe-list-view";
import { IconButton } from "react-native-paper";

const Notificaciones = () => {
    const theme = useSelector((state: any) => state?.app?.theme || '#fff');
    const params = useRoute<RouteProp<RootStackParams, 'Notificaciones'>>().params;
    
    return (
        <View style={mainStyle.container}>
            <CustomHeader bgColor={theme} regresar={params?.regresar} />
            <View style={notificacionesStyle.notificacionesContainer}>
                <Text style={mainStyle.mainTitle}>
                    Tus notificaciones
                </Text>
                <View style={notificacionesStyle.listContainer}>
                    <SwipeListView
                        showsVerticalScrollIndicator={false} 
                        ListHeaderComponent={<></>}
                        ListFooterComponent={<></>}
                        data={(params?.data?.notificaciones || [])}
                        renderItem={(item: any, index) => {
                            console.log(item)
                            return (
                            <CardNotificacion titulo={item?.item?.titulo} descripcion={item?.item?.descripcion} estatus={item?.item?.estatus} fecha={item?.item?.fecha} />
                        )}}
                        renderHiddenItem={(item: any, index) => (
                            <View style={notificacionesStyle.rowBack}>
                                <TouchableOpacity
                                    style={[notificacionesStyle.backRightBtn, notificacionesStyle.backRightBtnRight]}
                                    onPress={() => console.log(item?.item?.id)}
                                >
                                    <IconButton
                                        icon="trash-can"
                                        iconColor={ mainCcolors.whiteText}
                                        size={30}
                                        style={{ margin: 0, padding: 0 }}
                                    />
                                </TouchableOpacity>
                            </View>
                        )}
                        rightOpenValue={-75}
                        disableRightSwipe={false}
                    />
                </View>
            </View >
        </View>
    )
}

export default Notificaciones;