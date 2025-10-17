import { View } from "react-native";
import { useCrashlytics } from "../../hooks/useCrashlytics";
import { Button } from "react-native-paper";
import { useState } from "react";
import CustomAlert from "../../components/CustomDialog/CustomDialog";

const HomeScreen = () => {

    const { logError, setLogControlledCrashlytics } = useCrashlytics();
    
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const [open, setOpen] = useState(false);

    const provocarError = () => {
        try {
            throw new Error('Error simulado al presionar el botón');
        } catch (err) {
            logError(err, {
                pantalla: 'EjemploComponent',
                user_id: 'USR_123',
            });
        }
    };

    const registrarEvento = async () => {
        await setLogControlledCrashlytics('Usuario hizo click en registrar evento', 'USR_123', 'PantallaEjemplo');
    };
    return (
        <>
            <View style={{ marginTop: 50 }}>
                <Button onPress={() => {
                    setTitle('Título general');
                    setMessage('Este es un mensaje de prueba para los alerts');
                    setOpen(true)
                }} >Clic aqui para abrir dialog</Button>
                <Button onPress={provocarError} >Provocar error</Button>
                <Button onPress={registrarEvento}>Registrar evento controlado</Button>

            </View>
            <CustomAlert
                title={title}
                titleAceptButton='Aceptar promoción'
                titleCancelButton='Rechazar promoción'
                mesage={message}
                open={open}
                onCloseX={() => setOpen(false)}
                onClose={() => {
                    throw new Error("truena la app crash");
                }}
                onAcept={() => setOpen(false)} />
        </>
    )
}

export default HomeScreen;