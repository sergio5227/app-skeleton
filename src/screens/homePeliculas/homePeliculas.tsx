import { RefreshControl, ScrollView, Text, View } from "react-native"
import { IconButton } from "react-native-paper";
import useHomePeliculas from "./useHomePeliculas";
import { mainStyle } from "../../theme/styles";

const HomePeliculas = () => {

    const {
        data,
        navigation,
        refreshing,
        onRefresh
    } = useHomePeliculas();

    return (
        <View style={mainStyle.container}>
            <View style={{ alignItems: 'stretch' }}>
                <IconButton
                    icon="arrow-left-circle"
                    iconColor={'#212121ff'}
                    size={25}
                    style={{ margin: 0 }}
                    onPress={() => navigation.goBack()}
                />
            </View>
            <ScrollView
                contentContainerStyle={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            >
                <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                    <Text>Peliculas</Text>
                    <Text> {JSON.stringify(data)} </Text>
                </View>

            </ScrollView>
        </View>
    )
}

export default HomePeliculas;