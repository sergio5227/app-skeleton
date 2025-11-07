import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../../screens/login/loginScreen';
import HomeScreen from '../../screens/home/HomeScreen';
import HomePeliculas from '../../screens/homePeliculas/homePeliculas';
import DetailsPeliculas from '../../screens/detailsPeliculas/detailsPeliculas';

export type RootStackParams = {
    HomePeliculas: undefined,
    DetailsPeliculas: undefined,
    LoginScreen: undefined,
    HomeScreen: undefined,
}

const MainNavigator = () => {
    const Stack = createNativeStackNavigator<RootStackParams>();
    return (
        <Stack.Navigator screenOptions={{
            headerShown: true,
        }}>
            <Stack.Screen options={{ headerShown: false }} name="HomePeliculas" component={HomePeliculas} />
            <Stack.Screen options={{ headerShown: false }} name="DetailsPeliculas" component={DetailsPeliculas} />
            <Stack.Screen options={{ headerShown: false }} name="LoginScreen" component={LoginScreen} />
            <Stack.Screen options={{ headerShown: false }} name="HomeScreen" component={HomeScreen} />
        </Stack.Navigator>
    )
}

export default MainNavigator;