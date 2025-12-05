import { useRef, useEffect, useState, useMemo } from 'react';
import { StyleSheet, View, Alert, ActivityIndicator, Text, PanResponder, PermissionsAndroid, Platform } from 'react-native';
import { Image } from 'react-native-compressor';
import { IconButton } from 'react-native-paper';
import { Camera, useCameraDevices } from 'react-native-vision-camera';
import { useSelector } from 'react-redux';
import { CameraRoll } from '@react-native-camera-roll/camera-roll'; // PARA GUARDAR VIDEO

interface VisionCameraDosProps {
    navigation: any
    route: any
}

const VisionCameraDos = ({ navigation, route }: VisionCameraDosProps) => {
    const { onComplete } = route.params ?? {};
    const theme = useSelector((state: any) => state?.app?.theme || '#fff');

    const [permission, setPermission] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [zoom, setZoom] = useState(0); // 🔥 ZOOM
    const [recording, setRecording] = useState(false); // 🔥 VIDEO

    const cameraRef: any = useRef(null);

    const devices: any = useCameraDevices();

    const device = useMemo(() => {
        if (!devices) return null;
        if (devices?.back || devices?.front) return devices.back ?? devices.front ?? null;
        if (Array.isArray(devices)) {
            return devices.find((d: any) => d.position === 'back')
                ?? devices.find((d: any) => d.position === 'front')
                ?? devices[0];
        }
        if (Array.isArray(devices.devices)) {
            return devices.devices.find((d: any) => d.position === 'back')
                ?? devices.devices.find((d: any) => d.position === 'front')
                ?? devices.devices[0];
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

    // Permisos
    useEffect(() => {
        (async () => {
            try {
                const status: any = await Camera.requestCameraPermission();
                setPermission(status === "authorized" || status === "granted");
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    // ZOOM (Pinch Zoom)
    const panResponder = PanResponder.create({
        onMoveShouldSetPanResponder: (_, gesture: any) => gesture.numberActiveTouches === 2,
        onPanResponderMove: (_, gesture: any) => {
            if (gesture.scale) {
                let newZoom = Math.min(Math.max((gesture.scale - 1) * 1.5, 0), 1);
                setZoom(newZoom);
            }
        }
    });

    // FOTO
    const takePhoto = async () => {
        try {
            const photo = await cameraRef.current.takePhoto({ flash: "off" });

            // La foto ORIGINAL
            const base64 = await Image.compress(photo.path, {
                quality: 0.9,
                returnableOutputType: "base64",
                disablePngTransparency: true
            });

            // 🔥 ENVIAR AL EDITOR (RECORTE + FILTROS)
            navigation.navigate("EditorScreen", {
                base64,
                onFinish: (editedBase64: string) => {
                    if (onComplete) {
                        onComplete({ status: "success", base64: editedBase64 });
                    }
                    navigation.goBack();
                }
            });

        } catch (error) {
            console.log("PHOTO ERROR:", error);
        }
    };

    // GRABAR VIDEO
    const startRecording = async () => {
        try {
            setRecording(true);
            const video = await cameraRef.current.startRecording({
                onFinished: async (video: any) => {
                    setRecording(false);
                    await CameraRoll.save(video.path, { type: "video" });
                    Alert.alert("Listo", "Video guardado en la galería");
                },
                onError: (e: any) => {
                    console.log("ERROR VIDEO:", e);
                    setRecording(false);
                }
            });
        } catch (e) {
            console.log("START RECORD ERROR", e);
            setRecording(false);
        }
    };

    const stopRecording = async () => {
        try {
            await cameraRef.current.stopRecording();
        } catch (e) { }
    };

    if (loading) return <View style={styles.center}><ActivityIndicator size="large" /></View>;
    if (!permission) {
        Alert.alert("Permiso requerido", "Debes otorgar permiso de cámara.");
        navigation.goBack();
        return null;
    }
    if (!device) return <View style={styles.center}><Text>No Camera Found.</Text></View>;

    return (
        <View style={styles.container} {...panResponder.panHandlers}>
            <Camera
                ref={cameraRef}
                style={StyleSheet.absoluteFill}
                device={device}
                isActive={true}
                photo={true}
                video={true}
                zoom={zoom} // 🔥 ZOOM REAL
            />

            {/* BOTÓN FOTO */}
            {!recording && (
                <IconButton
                    onPress={takePhoto}
                    icon="camera"
                    iconColor={theme}
                    size={30}
                    style={styles.captureButton}
                />
            )}

            {/* BOTÓN GRABAR / DETENER */}
            <IconButton
                onPress={recording ? stopRecording : startRecording}
                icon={recording ? "stop" : "record"}
                iconColor={recording ? "red" : theme}
                size={30}
                style={[styles.captureButton, { bottom: 120 }]}
            />

        </View>
    );
};

export default VisionCameraDos;

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#000" },
    center: { flex: 1, justifyContent: "center", alignItems: "center" },
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
