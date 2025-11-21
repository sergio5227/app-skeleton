import { StyleSheet } from "react-native";
import { mainCcolors } from "../../theme/styles";

const CustomButtonStyle = StyleSheet.create({
    container:{
        borderWidth: 2, 
        marginVertical: 5, 
        borderRadius: 15, 
        borderColor:mainCcolors.primaryLight,
        justifyContent:'center', 
        marginHorizontal:20,
        backgroundColor:mainCcolors.primaryLight,
    },
    buttonText: {
        color: mainCcolors.whiteText,
        fontSize: 15,
        fontWeight: 'bold',
    },
});

export default CustomButtonStyle;