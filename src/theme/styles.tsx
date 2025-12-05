import { StyleSheet, Appearance } from "react-native";

export const mainCcolors = {
    /* backgrounds */
    primary: '#344955',
    primaryDark: '#232F34',
    primaryLight: '#4A6572',
    primarySuperLight: '#ccccccff',
    secondary: '#68e87c',
    secondaryVariant: '#14a63b',
    /* Text */
    darkText: '#232F34',
    whiteText: '#fff',
}

export const mainStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Appearance.getColorScheme() === 'dark' ? mainCcolors.primary : mainCcolors.whiteText,
    },
    mainTitle:{
        fontWeight: 'bold', 
        fontSize: 35
    },
    regularText:{
        fontSize: 13
    },
    headerDrawerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: Appearance.getColorScheme() === 'dark' ? mainCcolors.primary : mainCcolors.whiteText
    },
    drawerStyle: {
        backgroundColor: Appearance.getColorScheme() === 'dark' ? mainCcolors.primary : mainCcolors.whiteText,
        width: 90,
    },
    drawerItemStyle: {
        height: 50,
        padding: 0,
        margin: 0
    },
    iconsStyle: {
        margin: 0,
    },
    headerBottonBack: {
        position: 'absolute',
        left: 20,
        top: 7
    },
    headerTitle: {
        marginLeft: 15,
        fontSize: 18,
        fontWeight: 'bold',
        color: Appearance.getColorScheme() === 'dark' ? mainCcolors.whiteText : mainCcolors.darkText
    },
    headerBottomMenu: {
        position: 'absolute',
        right: 20,
        top: 7
    },
    dropBorder: {
        position: 'absolute',
        bottom: -50,
        width: '100%',
        height: 70,
        backgroundColor: 'blue',
        borderRadius: 200
    },

});