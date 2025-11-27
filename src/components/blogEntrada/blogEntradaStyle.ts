import { StyleSheet } from "react-native";

const blogEntradaStyle = StyleSheet.create({
    blogEntradaContainer: {
        width: '100%',
        height: 150,
        borderWidth: 1,
        borderColor: '#d0ceceff',
        marginVertical: 5,
        flexDirection: 'row',
        borderRadius: 20
    },
    titulo: {
        fontWeight: '700',
        fontSize: 20
    },
    divider: {
        borderWidth: 1,
        borderColor: '#ecebebff',
        marginTop: 5,
        marginBottom: 5
    },
    fechaContainer: {
        flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end'
    },
    desc: {
        fontWeight: '400',
        fontSize: 15
    },
    img: {
        width: '100%',
        height: '100%',
        borderRadius: 10
    }
});
export default blogEntradaStyle;