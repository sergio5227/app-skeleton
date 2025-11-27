import { StyleSheet } from "react-native";

const miPerfilStyle = StyleSheet.create({
    perfilContainer:{
         marginTop: 50,
        flex: 1,
        marginVertical: 15,
        paddingLeft: 10,
        paddingRight: 10
    },
    imageContainerImage: {
        borderWidth: 1, 
        borderColor: '#d7d7d7ff', 
        height: 150, 
        width: 150, 
        marginBottom: 10, 
        borderRadius: 100 ,
        resizeMode: 'center'
    }
})

export default miPerfilStyle;