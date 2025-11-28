import { StyleSheet } from "react-native";

const cambiarPlanStyle = StyleSheet.create({
    perfilContainer: {
        marginTop: 50,
        flex: 1,
        marginVertical: 15,
        paddingLeft: 10,
        paddingRight: 10
    },
    itemContainer: {
        marginRight: 5,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#bab8b8ff',
        padding: 10
    },
    itemTitle: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'black'
    },
    divider: {
        borderBottomWidth: 1,
        borderColor: '#d6d4d4ff',
        marginVertical: 20
    },
    itemDetailContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        padding: 10
    },
    itemDetailBeneficios: {
        fontSize: 20,
        fontWeight: '500'
    },
    btnContratar: {
        width: '100%',
        marginTop: 30
    }
})

export default cambiarPlanStyle;