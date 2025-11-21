import { StyleSheet } from "react-native";

const inicioStyles = StyleSheet.create({
    imageContainerView: {
        flex: 1,
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10
    },
    imageContainerImage: {
        opacity: 0.1,
        resizeMode: 'center'
    },
    cardContainer: {
        flex: 1,
        flexDirection: 'row',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    descripcionContainer: {
        flex: 1,
        marginBottom: 30,
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    }
})

export default inicioStyles;