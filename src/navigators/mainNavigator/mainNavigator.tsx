import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../../screens/login/loginScreen';
import HomeScreen from '../../screens/home/HomeScreen';

export type RootStackParams = {
    LoginScreen: undefined,
    HomeScreen: undefined,
}

const MainNavigator = () => {
    const Stack = createNativeStackNavigator<RootStackParams>();
    return (
        <Stack.Navigator screenOptions={{
            headerShown: true,
        }}>
            <Stack.Screen options={{ headerShown: false }} name="LoginScreen" component={LoginScreen} />
            <Stack.Screen options={{ headerShown: false }} name="HomeScreen" component={HomeScreen} />
        </Stack.Navigator>
    )
}

export default MainNavigator;