import { StyleSheet } from "react-native";
import { mainCcolors } from "../../theme/styles";

export const PuntosPaginacionStyles = StyleSheet.create({
    indicatorContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 10,
        marginTop: 0
    },
    puntoActual: {
        height: 8,
        width: 20,
        borderRadius: 5,
        backgroundColor: mainCcolors.primary,
        marginHorizontal: 5,
    },
});