import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MisBonsais from '../../screens/misBonsais/misBonsais';
import MisBonsaisDetalle from '../../screens/misBonsaisDetalle/misBonsaisDetalle';

export type RootStackParams = {
    MisBonsais: undefined;
    MisBonsaisDetalle:{ regresar:boolean, data:any };
}

const MisBonsaisNavigation = () => {
    const Stack = createNativeStackNavigator<RootStackParams>();
    return (
        <Stack.Navigator initialRouteName="MisBonsais" screenOptions={{
            headerShown: true,
        }}>
            <Stack.Screen options={{ headerShown: false }} name="MisBonsais" component={MisBonsais} />
            <Stack.Screen options={{ headerShown: false }} name="MisBonsaisDetalle" component={MisBonsaisDetalle} />
        </Stack.Navigator>
    )
}

export default MisBonsaisNavigation;