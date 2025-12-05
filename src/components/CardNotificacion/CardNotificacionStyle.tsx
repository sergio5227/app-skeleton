import { StyleSheet } from "react-native";

const CardNotificacionStyle = StyleSheet.create({
    container: {
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#bab8b8ff',
        backgroundColor:'white',
        padding: 10,
        marginBottom: 10
    },
    titulo: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black'
    },
    divider: {
        borderBottomWidth: 1,
        borderColor: '#d6d4d4ff',
        marginVertical: 20
    },
    contentInfoMeta: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    infoMeta: {
        fontSize: 10,
        color: 'grey',
        marginTop: 5
    }
});

export default CardNotificacionStyle;