import { StyleSheet } from "react-native";

const acercaStyles = StyleSheet.create({
    container:{
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderWidth: 1, 
        marginVertical: 15
    },
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
});

export default acercaStyles;