import { Image, Text, View } from "react-native"
import { IconButton } from "react-native-paper"
import blogEntradaStyle from "./blogEntradaStyle"

interface BlogEntradaProps {
    titulo: string
    descripcion: string
    img: any
    fecha: string
    ver: () => void
}

const BlogEntrada = (props: BlogEntradaProps) => {
    const {
        titulo,
        descripcion,
        img,
        fecha,
        ver
    } = props
    return (
        <View style={blogEntradaStyle.blogEntradaContainer}>
            <View style={{ flex: 3, padding: 10 }}>
                <View style={{ flex: 1 }}>
                    <Text style={blogEntradaStyle.titulo}>{titulo}</Text>
                    <View style={blogEntradaStyle.divider} />
                    <Text style={blogEntradaStyle.desc}> {descripcion} </Text>
                </View>
                <View style={blogEntradaStyle.fechaContainer}>
                    <View>
                        <Text>{fecha}</Text>
                    </View>
                    <View>
                        <IconButton
                            icon="arrow-right"
                            iconColor={'#f12c2cff'}
                            size={20}
                            style={{ margin: 0, padding: 0 }}
                            onPress={() => {
                                ver()
                            }}
                        />
                    </View>
                </View>
            </View>
            <View style={{ flex: 2, padding: 5 }}>
                <Image source={img} style={blogEntradaStyle.img} />
            </View>
        </View>
    )
}

export default BlogEntrada;