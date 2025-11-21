import { ImageBackground, ScrollView, Text, View } from "react-native"
import CustomHeader from "../../navigators/DrawerNavigator/customHeader";
import { mainStyle } from "../../theme/styles";
import acercaStyles from "./acercaStyles";
import { useSelector } from "react-redux";

const Acerca = () => {
    const theme = useSelector((state: any) => state?.app?.theme || '#fff');
    return (
        <View style={mainStyle.container}>
            <CustomHeader bgColor={theme} />
            <ImageBackground
                source={require('../../assets/img/logo/hola_bonsai.jpg')}
                style={acercaStyles.imageContainerView}
                imageStyle={acercaStyles.imageContainerImage}>
                <ScrollView>
                    <Text style={{ ...mainStyle.mainTitle, ...{ fontSize: 28 } }}>
                        Acerca de Hola Bonsái
                    </Text>
                    <Text style={mainStyle.regularText}>
                        Hola Bonsái nació de una idea simple:
                        hacer que el cuidado de un bonsái sea algo más fácil,
                        más bonito y más consciente.
                    </Text>
                    <Text style={mainStyle.regularText}>
                        Llevo más de cuatro años cultivando bonsáis: aprendiendo, regándola, mejorando y celebrando cada avance.
                    </Text>
                    <Text style={mainStyle.regularText}>
                        Empecé compartiendo mi proceso en Instagram, mostrando mis árboles, mis errores y mis progresos. Y aunque esa comunidad creció,
                        sentía que faltaba algo… quería un espacio más completo, más mío, más útil para todos los que aman este arte.
                    </Text>
                    <Text style={mainStyle.regularText}>
                        Quería algo personalizado, donde cada bonsái tuviera su historia registrada.
                        Algo propio, que representara mi visión y mi experiencia real.
                        Y algo con más alcance, para ayudar a más personas a cuidar y disfrutar sus árboles sin tanto enredo.
                    </Text>
                    <Text style={mainStyle.regularText}>
                        Por eso nació esta app: un lugar que te acompaña, te guía y te enseña a disfrutar el camino del bonsái sin estrés.
                        Aquí puedes aprender, llevar el control de tus árboles, mejorar tus cuidados y crecer junto a tu colección… igual que yo lo he hecho.
                    </Text>
                    <Text style={mainStyle.regularText}>
                        Hola Bonsái es mi manera de compartir todo lo que he aprendido,
                        pero también de crear una herramienta que le sirva a cualquier bonsaísta,
                        desde el que apenas empieza hasta el más experimentado
                    </Text>
                    <Text style={mainStyle.regularText}>
                        Sabemos que cada arbolito es una historia, un proceso y a veces…
                        un poco frustrante si no sabes qué hacer.
                        Por eso creamos este espacio: una app que te acompaña,
                        te guía y te enseña a disfrutar el camino del bonsái sin estrés.
                    </Text>
                    <Text >
                        Aquí combinamos conocimiento tradicional, experiencia real de cultivadores,
                        y tecnología para que aprendas, registres y cuides tus árboles como si tuvieras un
                        sensei de bonsáis en tu bolsillo.
                    </Text>
                    <Text style={{ ...mainStyle.mainTitle, ...{ fontSize: 20, marginTop: 10, marginBottom: 10 } }}>
                        En Hola Bonsái creemos que:
                    </Text>
                    <Text style={{ ...mainStyle.mainTitle, ...{ fontSize: 18, marginBottom: 5 } }}>
                        &bull; Cada bonsái merece atención personalizada
                    </Text>
                    <Text style={mainStyle.regularText}>
                        Por eso puedes registrar sus medidas, edad, fotos, trabajos realizados y lo que viene para él,
                        ademas de tener un asistente 24/7 que este ahí cada vez que tengas alguna duda
                    </Text>
                    <Text style={{ ...mainStyle.mainTitle, ...{ fontSize: 18, marginBottom: 5 } }}>
                        &bull; Aprender debe sentirse ligero
                    </Text>
                    <Text style={mainStyle.regularText}>
                        Explora especies, descubre cuidados específicos y
                        entiende qué necesita tu árbol con explicaciones simples.
                    </Text>
                    <Text style={{ ...mainStyle.mainTitle, ...{ fontSize: 18, marginBottom: 5 } }}>
                        &bull; La constancia crea magia
                    </Text>
                    <Text style={mainStyle.regularText}>
                        Nuestro calendario te ayuda a recordar riegos, podas,
                        trasplantes y trabajos importantes para que tu bonsái siempre esté en su punto más alto.
                    </Text>
                    <Text style={{ ...mainStyle.mainTitle, ...{ fontSize: 18, marginBottom: 5 } }}>
                        &bull; Los bonsáis conectan
                    </Text>
                    <Text style={mainStyle.regularText}>
                        No solo contigo, también con una comunidad que comparte pasión,
                        historias, tips y progreso.
                    </Text>
                    <Text style={{ ...mainStyle.mainTitle, ...{ fontSize: 18, marginBottom: 5, marginTop: 5 } }}>
                        Hola Bonsái no es solo una app.
                    </Text>
                    <Text style={mainStyle.regularText}>
                        Es un proyecto creado con cariño para ayudarte a crecer junto a tus árboles,
                        paso a paso, temporada por temporada.
                    </Text>
                    <Text style={mainStyle.regularText}>
                        Bienvenido, bonsaísta.
                        Aquí empieza tu camino (o continúa)...
                    </Text>
                </ScrollView>
            </ImageBackground>
        </View>
    )
}

export default Acerca;