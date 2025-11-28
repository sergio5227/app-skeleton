import { Image, Text, View } from "react-native"
import { IconButton } from "react-native-paper"
import especiesCardStyle from "./especiesCardStyle"

interface especiesCardProps {
    titulo: string
    descripcion: string
    img: any
    ver: () => void
}

const EspeciesCard = (props: especiesCardProps) => {
    const {
        titulo,
        descripcion,
        img,
        ver
    } = props
    return (
        <View style={especiesCardStyle.especiesCardContainer}>
            <View style={{ flex: 3, padding: 10 }}>
                <View style={{ flex: 1 }}>
                    <Text style={especiesCardStyle.titulo}>{titulo}</Text>
                    <View style={especiesCardStyle.divider} />
                    <Text style={especiesCardStyle.desc}> {descripcion} </Text>
                </View>
                <View style={especiesCardStyle.fechaContainer}>
                    <View>
                        <IconButton
                            icon="arrow-right"
                            iconColor={'#f12c2cff'}
                            size={25}
                            style={{ margin: 0, padding: 0 }}
                            onPress={() => {
                                ver()
                            }}
                        />
                    </View>
                </View>
            </View>
            <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center', padding:10 }}>
                <Image source={img} style={especiesCardStyle.img} />
            </View>
        </View>
    )
}

export default EspeciesCard;