import { Text, View } from "react-native"
import CustomHeader from "../../navigators/DrawerNavigator/customHeader";
import { mainStyle } from "../../theme/styles";

const Blog = () => {

    return (
        <View style={mainStyle.container}>
            <CustomHeader />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderWidth: 1, marginVertical: 15 }}>
                <Text>
                    blog
                </Text>
            </View >
        </View>
    )
}

export default Blog;