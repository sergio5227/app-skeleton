import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CambiarPlan from '../../screens/cambiarPlan/cambiarPlan';
import MiPerfil from '../../screens/miPerfil/miPerfil';

export type RootStackParams = {
    MiPerfil: undefined;
    CambiarPlan:{ regresar:boolean, data:any };
}

const PerfilNavigator = () => {
    const Stack = createNativeStackNavigator<RootStackParams>();
    return (
        <Stack.Navigator initialRouteName="MiPerfil" screenOptions={{
            headerShown: true,
        }}>
            <Stack.Screen options={{ headerShown: false }} name="MiPerfil" component={MiPerfil} />
            <Stack.Screen options={{ headerShown: false }} name="CambiarPlan" component={CambiarPlan} />
        </Stack.Navigator>
    )
}

export default PerfilNavigator;