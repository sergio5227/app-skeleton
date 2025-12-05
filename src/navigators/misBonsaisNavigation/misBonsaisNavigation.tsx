import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MisBonsais from '../../screens/misBonsais/misBonsais';

import AgregaBonsai from '../../screens/agregaBonsai/agregaBonsai';
import VisionCamera from '../../components/Vision/vision';
import VisionCameraDos from '../../components/Vision/visionDosPuntoCero';
import BonsaiDetailNavigator from '../bonsaiDetailNavigator/bonsaiDetailNavigator';

export type RootStackParams = {
    MisBonsais: undefined;
    BonsaiDetailNavigator:{ regresar:boolean, data:any };
    AgregaBonsai:{ regresar:boolean, data:any };
    VisionCamera:{ onComplete:any };
    VisionCameraDos:{ onComplete:any };
}

const MisBonsaisNavigation = () => {
    const Stack = createNativeStackNavigator<RootStackParams>();
    return (
        <Stack.Navigator initialRouteName="MisBonsais" screenOptions={{
            headerShown: true,
        }}>
            <Stack.Screen options={{ headerShown: false }} name="MisBonsais" component={MisBonsais} />
            <Stack.Screen options={{ headerShown: false }} name="BonsaiDetailNavigator" component={BonsaiDetailNavigator} />
            <Stack.Screen options={{ headerShown: false }} name="AgregaBonsai" component={AgregaBonsai} />
            <Stack.Screen options={{ headerShown: false }} name="VisionCamera" component={VisionCamera} />
            <Stack.Screen options={{ headerShown: false }} name="VisionCameraDos" component={VisionCameraDos} />
            
        </Stack.Navigator>
    )
}

export default MisBonsaisNavigation;