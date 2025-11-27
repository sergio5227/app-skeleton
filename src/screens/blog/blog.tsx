import { Alert, ScrollView, Text, View } from "react-native"
import CustomHeader from "../../navigators/DrawerNavigator/customHeader";
import { mainStyle } from "../../theme/styles";
import blogStyle from "./blogStyles";
import useBlog from "./useBlog";
import BlogEntrada from "../../components/blogEntrada/blogEntrada";

const Blog = () => {

    const {
        theme
    } = useBlog()

    return (
        <View style={mainStyle.container}>
            <CustomHeader bgColor={theme} />
            <View style={blogStyle.blogContainer}>
                <View style={{ width: '100%' }}>
                    <Text style={mainStyle.mainTitle}>
                        Mis entradas
                    </Text>
                </View>
                <ScrollView >
                    <BlogEntrada ver={() => Alert.alert('1', '1')} fecha='01-01-02' titulo="Tauki" descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit..." img={require('../../assets/img/logo/hola_bonsai.jpg')} />
                    <BlogEntrada ver={() => Alert.alert('2', '2')} fecha='01-01-03' titulo="Injertos" descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit..." img={require('../../assets/img/logo/hola_bonsai.jpg')} />
                    <BlogEntrada ver={() => Alert.alert('3', '3')} fecha='01-01-04' titulo="Riego" descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit..." img={require('../../assets/img/logo/hola_bonsai.jpg')} />
                    <BlogEntrada ver={() => Alert.alert('4', '4')} fecha='01-01-05' titulo="Alambrado arces" descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit..." img={require('../../assets/img/logo/hola_bonsai.jpg')} />
                    <BlogEntrada ver={() => Alert.alert('5', '5')} fecha='01-01-06' titulo="Doblado extremo" descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit..." img={require('../../assets/img/logo/hola_bonsai.jpg')} />
                    <BlogEntrada ver={() => Alert.alert('6', '6')} fecha='01-01-07' titulo="Injerto de raiz" descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit..." img={require('../../assets/img/logo/hola_bonsai.jpg')} />
                    <BlogEntrada ver={() => Alert.alert('7', '7')} fecha='01-01-08' titulo="Pino desde semilla" descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit..." img={require('../../assets/img/logo/hola_bonsai.jpg')} />
                </ScrollView>
            </View>
        </View>
    )
}

export default Blog;

