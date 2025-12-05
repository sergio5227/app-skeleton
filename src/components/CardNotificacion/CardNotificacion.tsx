import { FC } from "react"
import { View, Text } from "react-native"
import CardNotificacionStyle from "./CardNotificacionStyle"


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

export default CardNotificacion;