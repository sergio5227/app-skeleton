import { View, TouchableOpacity, Text } from "react-native";
import bonsaiDetailNavigatorStyles from "./bonsaiDetailNavigatorStyles";
import { IconButton } from "react-native-paper";
import { useSelector } from "react-redux";
import { mainCcolors } from "../../theme/styles";

const MyCustomTabBar = ({ state, descriptors, navigation }: any) => {
    const theme = useSelector((state: any) => state?.app?.theme || '#fff');
    return (
        <View style={[bonsaiDetailNavigatorStyles.tabContainer, {backgroundColor:theme}]}>
            {state.routes.map((route: any, index: any) => {
                const params = route.params || {};
                const iconName = params.iconName;
                const label = params.label;

                const isFocused = state.index === index;

                const onPress = () => {
                    if (!isFocused) {
                        navigation.navigate(route.name);
                    }
                };

                return (
                    <TouchableOpacity
                        key={route.key}
                        onPress={onPress}
                        style={[bonsaiDetailNavigatorStyles.tabButton, {backgroundColor:theme}]}
                        activeOpacity={0.8}
                    >
                        <View style={[bonsaiDetailNavigatorStyles.iconWrapper, isFocused && bonsaiDetailNavigatorStyles.iconWrapperActive, isFocused &&  {backgroundColor: theme, shadowColor: theme,}]}>
                            <IconButton
                                style={[isFocused && {backgroundColor:mainCcolors.primary}]}
                                icon={iconName}
                                iconColor={"#fff"}
                                size={25}
                            />
                        </View>
                        <Text style={[bonsaiDetailNavigatorStyles.label, isFocused && {fontWeight:'bold'}]}>{label}</Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}


export default MyCustomTabBar;