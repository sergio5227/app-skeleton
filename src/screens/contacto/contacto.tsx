import { StyleSheet, Text, View } from "react-native"
import CustomHeader from "../../navigators/DrawerNavigator/customHeader";
import { mainStyle } from "../../theme/styles";
import ContactoForm from "../../forms/contacto/contactoForm";
import { useSelector } from "react-redux";
import CustomAlert from "../../components/CustomDialog/CustomDialog";
import { useState } from "react";
import LoaderIndicator from "../../components/LoaderIndicator/LoaderIndicator";

const Contacto = () => {
    const theme = useSelector((state: any) => state?.app?.theme || '#fff');
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleContacto = (data: any) => {
        try {
            setLoading(true);
            console.log(data);
            setTitle('Exito');
            setMessage('Exito al enviar su mensaje, pronto recibira noticias nuestras');
            setOpen(true);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setTitle('Error');
            setMessage('Error al enviar su mensaje, intente más tarde');
            setOpen(true);
            setLoading(false);
        }
    }

    return (
        <View style={{ ...mainStyle.container, ...{} }}>
            <CustomHeader bgColor={theme} />
            <View style={contactoStyles.container}>
                <Text style={mainStyle.mainTitle}>
                    Contactanos
                </Text>
                {!open ? <ContactoForm onSubmit={(a) => {
                    handleContacto(a)
                }} /> : null}
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

const contactoStyles = StyleSheet.create({
    container: {
        marginTop: 50,
        flex: 1,
        marginVertical: 15,
        paddingLeft: 10,
        paddingRight: 10
    }
})

export default Contacto;