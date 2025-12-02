import { FC } from "react"
import { View, Text, StyleSheet } from "react-native"


interface CardNotificacionProps {
    titulo: string
    descripcion: string
    estatus: number
    fecha: string
}

const CardNotificacion: FC<CardNotificacionProps> = (props: CardNotificacionProps) => {
    return (
        <View style={CardNotificacionStyle.container} >
            <Text style={CardNotificacionStyle.titulo}> {props?.titulo} </Text>
            <View style={CardNotificacionStyle.divider} />
            <Text style={{ fontSize: 13 }}> {props?.descripcion} </Text>
            <View style={CardNotificacionStyle.contentInfoMeta}>
                <Text style={CardNotificacionStyle.infoMeta}> {props?.estatus === 1 ? 'No leido' : 'Leido'} </Text>
                <Text style={CardNotificacionStyle.infoMeta}> fecha {props?.fecha} </Text>
            </View>
        </View>
    )
}

const CardNotificacionStyle = StyleSheet.create({
    container: {
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#bab8b8ff',
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

export default CardNotificacion;