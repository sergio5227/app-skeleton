import { StyleSheet } from "react-native";

const notificacionesStyle = StyleSheet.create({
    notificacionesContainer: {
        marginTop: 50,
        flex: 1,
        marginVertical: 15,
        paddingLeft: 10,
        paddingRight: 10
    },
    listContainer: {
        marginTop: 50,
        flex: 1,
        marginVertical: 15,
        paddingLeft: 10,
        paddingRight: 10
    },
    rowBack: {
        backgroundColor:'red',
        alignItems: 'center',
        flex:1,
        borderWidth:1,
        borderRadius:25,
        borderColor: '#bab8b8ff',
    },
    backRightBtn: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        borderRadius:25,
        width: 75,
    },
    backRightBtnRight: {
        backgroundColor: 'red',
        right: 0,
    }    
})

export default notificacionesStyle;