import { StyleSheet } from "react-native";

const MapaNavegacionStyles = StyleSheet.create({
    container: { flex: 1},
    panel: {
        borderRadius:0,
        backgroundColor: '#fff',
        padding: 10
    },
    paso: {
        fontSize: 13,
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