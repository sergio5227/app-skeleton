import { Linking } from "react-native"
import { useSelector } from "react-redux";
import { useState } from "react";


const useContacto = () => {
     const theme = useSelector((state: any) => state?.app?.theme || '#fff');
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const openFacebook = () => {
        Linking.openURL("https://www.facebook.com/TU_PAGINA");
    };

    const openInstagram = () => {
        Linking.openURL("https://www.instagram.com/TU_PERFIL");
    };

    const openYoutube = () => {
        Linking.openURL("https://www.youtube.com/@TU_CANAL");
    };

    const handleContacto = (data: any) => {
        try {
            setLoading(true);
            console.log(data);
            setTimeout(() => {
                setTitle('Exito');
                setMessage('Exito al enviar su mensaje, pronto recibira noticias nuestras');
                setOpen(true);
                setLoading(false);
            }, 1000);
        } catch (error) {
            console.log(error);
            setTitle('Error');
            setMessage('Error al enviar su mensaje, intente más tarde');
            setOpen(true);
            setLoading(false);
        }
    }

    return {
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
    }
}

export default useContacto;