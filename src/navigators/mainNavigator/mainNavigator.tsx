import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MisBonsais from '../../screens/misBonsais/misBonsais';
import ExplorarEspecies from '../../screens/explorarEspecies/explorarEspecies';
import Inicio from '../../screens/inicio/inicio';
import Calendario from '../../screens/calendario/calendario';
import CambiarPlan from '../../screens/cambiarPlan/cambiarPlan';

export type RootStackParams = {
    InicioApp: undefined;
    MisBonsais: { regresar:boolean, data:any };
    ExplorarEspecies: { regresar:boolean, data:any };
    Calendario:{ regresar:boolean, data:any };
    CambiarPlan:{ regresar:boolean, data:any };
}

const MainNavigator = () => {
    const Stack = createNativeStackNavigator<RootStackParams>();
    return (
        <Stack.Navigator initialRouteName="InicioApp" screenOptions={{
            headerShown: true,
        }}>
            <Stack.Screen options={{ headerShown: false }} name="InicioApp" component={Inicio} />
            <Stack.Screen options={{ headerShown: false }} name="MisBonsais" component={MisBonsais} />
            <Stack.Screen options={{ headerShown: false }} name="ExplorarEspecies" component={ExplorarEspecies} />
            <Stack.Screen options={{ headerShown: false }} name="Calendario" component={Calendario} />
            <Stack.Screen options={{ headerShown: false }} name="CambiarPlan" component={CambiarPlan} />
        </Stack.Navigator>
    )
}

export default MainNavigator;