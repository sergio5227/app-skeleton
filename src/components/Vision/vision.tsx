import { useRef, useEffect, useState, useMemo } from 'react';
import { StyleSheet, View, Alert, ActivityIndicator, Text, Platform, PermissionsAndroid } from 'react-native';
import { Image } from 'react-native-compressor';
import { IconButton } from 'react-native-paper';
import { Camera, useCameraDevices } from 'react-native-vision-camera';
import { useSelector } from 'react-redux';

interface VisionCameraProps {
    navigation: any
    route: any
}

const VisionCamera = ({ navigation, route }: VisionCameraProps) => {
    const { onComplete } = route.params ?? {};
    const theme = useSelector((state: any) => state?.app?.theme || '#fff');
    const [permission, setPermission] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const cameraRef: any = useRef(null);
    const devices: any = useCameraDevices();
    const device = useMemo(() => {
        if (!devices) return null;
        // Normalizar: si trae .back / .front
        if (devices?.back || devices?.front) {
            return devices.back ?? devices.front ?? null;
        }
        // Si devices ES array
        if (Array.isArray(devices)) {
            const back = devices.find((d: any) => d.position === 'back');
            if (back) return back;
            const front = devices.find((d: any) => d.position === 'front');
            if (front) return front;
            // si no trae position
            return devices[0] ?? null;
        }
        // Si trae el formato raro: { devices: [...] }
        if (Array.isArray(devices.devices)) {
            const arr = devices.devices;
            const back = arr.find((d: any) => d.position === 'back');
            if (back) return back;
            const front = arr.find((d: any) => d.position === 'front');
            if (front) return front;
            return arr[0] ?? null;
        }
        return null;
    }, [devices]);

    const requestSavePermission = async () => {
        if (Platform.OS !== 'android') return true;
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO,
            {
                title: "Permiso para guardar videos",
                message: "La app necesita guardar video en tu galería",
                buttonPositive: "Aceptar"
            }
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
    }
    
    useEffect(() => {
        (async () => {
            const ok = await requestSavePermission();
            if (!ok) return Alert.alert("Sin permiso", "No puedo guardar el video");
        })();
    }, [])

    // Solicitar permisos
    useEffect(() => {
        (async () => {
            try {
                const status: any = await Camera.requestCameraPermission();
                console.log(status)
                setPermission(status === "authorized" || status === "granted");
            } catch (err) {
                console.log("Permission error:", err);
                setPermission(false);
            } finally {
                console.log('finally')
                setLoading(false);
            }
        })();
    }, []);
    // Tomar foto
    const takePhoto = async () => {
        try {
            if (!cameraRef.current) {
                Alert.alert("Error", "La cámara no está lista aún.");
                return;
            }
            const photo = await cameraRef.current.takePhoto({
                flash: "off",
            });
            const base64 = await Image.compress(photo.path, {
                quality: 0.9,
                returnableOutputType: "base64",
                disablePngTransparency: true,
            });
            if (onComplete) {
                onComplete({ status: "success", base64 });
            }
            navigation.goBack();
        } catch (error) {
            console.log("TAKE PHOTO ERROR:", error);
            if (onComplete) {
                onComplete({ status: "error", base64: null });
            }
            navigation.goBack();
        }
    };
    // Loading
    if (loading) {
        return (
            <View style={styles.center}>-
                <ActivityIndicator size="large" />
            </View>
        );
    }
    // Sin permisos
    if (!permission) {
        Alert.alert(
            "Permiso requerido",
            "Debes otorgar permiso de cámara para usar esta función."
        );
        navigation.goBack();
        return null;
    }
    // Esperando cámara
    if (!device) {
        return (
            <View style={styles.center}>
                <Text style={{ color: 'white', marginTop: 20 }}>
                    No device found. Devices: {JSON.stringify(devices, null, 2)}
                </Text>
            </View>
        );
    }






    return (
        <View style={styles.container}>
            <Camera
                ref={cameraRef}
                style={StyleSheet.absoluteFill}
                device={device}
                isActive={true}
                photo={true}
            />
            <IconButton
                onPress={takePhoto}
                icon="camera"
                iconColor={theme}
                size={30}
                style={styles.captureButton}
            />
        </View>
    );
};

export default VisionCamera;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
    },
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    captureButton: {
        position: "absolute",
        bottom: 30,
        alignSelf: "center",
        width: 70,
        height: 70,
        backgroundColor: "#fff",
        borderRadius: 35,
        justifyContent: "center",
        alignItems: "center",
        elevation: 5,
    }
});