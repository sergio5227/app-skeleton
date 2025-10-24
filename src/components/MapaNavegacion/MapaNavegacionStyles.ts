import { StyleSheet } from "react-native";

const MapaNavegacionStyles = StyleSheet.create({
    container: { flex: 1 },
    panel: {
        position: 'absolute',
        bottom: 87,
        backgroundColor: '#fff',
        width: '100%',
        padding: 15,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        elevation: 5,
    },
    paso: {
        fontSize: 15,
        fontWeight: '600',
        textAlign: 'center'
    },
    loading: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    acciones: {
        marginTop: 5,
        flexDirection: 'row'
    }

});

export default MapaNavegacionStyles;