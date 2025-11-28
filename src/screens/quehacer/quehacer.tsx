import {
    Text,
    View
} from "react-native"
import CustomHeader from "../../navigators/DrawerNavigator/customHeader";
import { mainStyle } from "../../theme/styles";
import { useSelector } from "react-redux";
import quehacerStyle from "./quehacerStyle";


const Quehacer = () => {

    const theme = useSelector((state: any) => state?.app?.theme || '#fff');

    return (
        <View style={mainStyle.container}>
            <CustomHeader bgColor={theme} />
            <View style={quehacerStyle.perfilContainer}>
                <Text>quehacer</Text>
            </View >
        </View>
    )
}



export default Quehacer;