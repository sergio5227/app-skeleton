import { Pressable, StyleSheet, Text, View } from "react-native"
import CustomHeader from "../../navigators/DrawerNavigator/customHeader";
import { mainStyle } from "../../theme/styles";
import ContactoForm from "../../forms/contacto/contactoForm";
import CustomAlert from "../../components/CustomDialog/CustomDialog";
import LoaderIndicator from "../../components/LoaderIndicator/LoaderIndicator";
import { IconButton } from "react-native-paper";
import useContacto from "./useContacto";
import contactoStyles from "./contactoStyle";

const Contacto = () => {

    const {
        theme,
        open,
        handleContacto,
        openFacebook,
        openInstagram,
        openYoutube,
        title,
        message,
        setOpen,
        loading
    } = useContacto();

    return (
        <View style={mainStyle.container}>
            <CustomHeader bgColor={theme} />
            <View style={contactoStyles.container}>
                <View>
                    <Text style={mainStyle.mainTitle}>
                        Contactanos
                    </Text>
                </View>
                <View style={{ flex: 4 }}>
                    {open ? null : <ContactoForm onSubmit={(a) => {
                        handleContacto(a)
                    }} />}
                </View>
                <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                    <View>
                        <Text>
                            Tambien contactanos por nuestras redes sociales
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <Pressable onPress={openFacebook}>
                            <IconButton
                                icon="facebook"
                                iconColor={'#464edcff'}
                                size={50}
                                style={{ margin: 0, padding: 0 }}
                            />
                        </Pressable>
                        <Pressable onPress={openInstagram}>
                            <IconButton
                                icon="instagram"
                                iconColor={'#e827abff'}
                                size={50}
                                style={{ margin: 0, padding: 0 }}
                            />
                        </Pressable>
                        <Pressable onPress={openYoutube}>
                            <IconButton
                                icon="youtube"
                                iconColor={'#f12c2cff'}
                                size={50}
                                style={{ margin: 0, padding: 0 }}
                            />
                        </Pressable>
                    </View>
                </View>
            </View >
            <CustomAlert
                title={title}
                mesage={message}
                open={open}
                onCloseX={() => setOpen(false)}
                onAcept={() => setOpen(false)}
            />
            <LoaderIndicator visible={loading} />
        </View>
    )
}



export default Contacto;