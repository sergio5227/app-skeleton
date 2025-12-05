import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MisBonsais from '../../screens/misBonsais/misBonsais';
import ExplorarEspecies from '../../screens/explorarEspecies/explorarEspecies';
import Inicio from '../../screens/inicio/inicio';
import Calendario from '../../screens/calendario/calendario';
import CambiarPlan from '../../screens/cambiarPlan/cambiarPlan';
import Notificaciones from '../../screens/notificaciones/notificaciones';
import Favoritos from '../../screens/favoritos/favoritos';
import Quehacer from '../../screens/quehacer/quehacer';

import AgregaBonsai from '../../screens/agregaBonsai/agregaBonsai';
import VisionCamera from '../../components/Vision/vision';
import VisionCameraDos from '../../components/Vision/visionDosPuntoCero';
import BonsaiDetailNavigator from '../bonsaiDetailNavigator/bonsaiDetailNavigator';

export type RootStackParams = {
    InicioApp: undefined;
    MisBonsais: { regresar:boolean, data:any };
    ExplorarEspecies: { regresar:boolean, data:any };
    Calendario:{ regresar:boolean, data:any };
    CambiarPlan:{ regresar:boolean, data:any };
    Notificaciones:{ regresar:boolean, data:any }
    Favoritos:{ regresar:boolean, data:any }
    Quehacer:{ regresar:boolean, data:any }
    BonsaiDetailNavigator:{ regresar:boolean, data:any }
    AgregaBonsai:{ regresar:boolean, data:any }
    VisionCamera:{ onComplete:any }
    VisionCameraDos:{ onComplete:any }
}

const MainNavigator = () => {
    const Stack = createNativeStackNavigator<RootStackParams>();
    return (
        <Stack.Navigator initialRouteName="InicioApp" screenOptions={{
            headerShown: true,
        }}>
            <Stack.Screen options={{ headerShown: false }} name="InicioApp" component={Inicio} />
            <Stack.Screen options={{ headerShown: false }} name="ExplorarEspecies" component={ExplorarEspecies} />
            <Stack.Screen options={{ headerShown: false }} name="Calendario" component={Calendario} />
            <Stack.Screen options={{ headerShown: false }} name="CambiarPlan" component={CambiarPlan} />
            {/* Pantalla que desprende de mis notificaciones */}
            <Stack.Screen options={{ headerShown: false }} name="Notificaciones" component={Notificaciones} />
            {/* Pantalla que desprende de favoritos */}
            <Stack.Screen options={{ headerShown: false }} name="Favoritos" component={Favoritos} />
            {/* Pantalla que desprende de que hacer */}
            <Stack.Screen options={{ headerShown: false }} name="Quehacer" component={Quehacer} />
            {/* Pantalla que desprende de un detalle de bonsai */}
            <Stack.Screen options={{ headerShown: false }} name="MisBonsais" component={MisBonsais} />
            <Stack.Screen options={{ headerShown: false }} name="BonsaiDetailNavigator" component={BonsaiDetailNavigator} />
            <Stack.Screen options={{ headerShown: false }} name="AgregaBonsai" component={AgregaBonsai} />
            <Stack.Screen options={{ headerShown: false }} name="VisionCamera" component={VisionCamera} />
            <Stack.Screen options={{ headerShown: false }} name="VisionCameraDos" component={VisionCameraDos} />
        </Stack.Navigator>
    )
}

export default MainNavigator;