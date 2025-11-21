import { createDrawerNavigator } from '@react-navigation/drawer';
import Acerca from '../../screens/acerca/acerca';
import Help from '../../screens/help/help';
import MisBonsais from '../../screens/misBonsais/misBonsais';
import Calendario from '../../screens/calendario/calendario';
import ExplorarEspecies from '../../screens/explorarEspecies/explorarEspecies';
import Blog from '../../screens/blog/blog';
import MiPerfil from '../../screens/miPerfil/miPerfil';
import Contacto from '../../screens/contacto/contacto';
import MainNavigator from '../mainNavigator/mainNavigator';
import { Appearance } from 'react-native';
import DrawerOptionsNav from './DrawerOptionsNav/DrawerOptionsNav';
import { mainCcolors, mainStyle } from '../../theme/styles';
import { IconButton } from 'react-native-paper';
import iconNames from 'react-native-vector-icons/glyphmaps/MaterialCommunityIcons.json';
import { useSelector } from 'react-redux';


export type RootDrawerParams = {
    MisBonsais: undefined;
    Calendario: undefined;
    ExplorarEspecies: undefined;
    Blog: undefined;
    MiPerfil: undefined;
    Contacto: undefined;
    Acerca: undefined;
    Help: undefined;
}

const DrawerNavigator = () => {
    const theme = useSelector((state: any) => state?.app?.theme || '#fff');
    const Drawer = createDrawerNavigator();
    return (
        <Drawer.Navigator
            drawerContent={(props) => <DrawerOptionsNav {...props} />}
            screenOptions={{
                drawerActiveTintColor: theme,
                drawerStyle: mainStyle.drawerStyle,
                drawerType: 'front',
                headerShown: false
            }}
            initialRouteName="Inicio"
        >
            <Drawer.Screen
                name="Inicio"
                component={MainNavigator}
                options={{
                    drawerItemStyle: mainStyle.drawerItemStyle,
                    drawerIcon: ({ color, size }) => <IconButton
                        icon="home"
                        iconColor={Appearance.getColorScheme() === 'dark' ? mainCcolors.whiteText : mainCcolors.darkText}
                        size={15}
                        style={{ margin: 0, padding: 0 }}
                    />,
                    drawerLabel: 'Inicio'
                }}
            />
            <Drawer.Screen
                name="MisBonsais"
                component={MisBonsais}
                options={{
                    drawerItemStyle: mainStyle.drawerItemStyle,
                    drawerIcon: ({ color, size }) =>
                        <IconButton
                            icon="tree"
                            iconColor={Appearance.getColorScheme() === 'dark' ? mainCcolors.whiteText : mainCcolors.darkText}
                            size={15}
                            style={{ margin: 0, padding: 0 }}
                        />,
                    drawerLabel: 'Mis bonsais'
                }}
            />
            <Drawer.Screen name="Calendario"
                options={{
                    drawerItemStyle: mainStyle.drawerItemStyle,
                    drawerIcon: ({ color, size }) =>
                        <IconButton
                            icon="calendar"
                            iconColor={Appearance.getColorScheme() === 'dark' ? mainCcolors.whiteText : mainCcolors.darkText}
                            size={15}
                            style={{ margin: 0, padding: 0 }}
                        />,
                    drawerLabel: 'Calendario'
                }}
                component={Calendario} />
            <Drawer.Screen name="ExplorarEspecies"
                options={{
                    drawerItemStyle: mainStyle.drawerItemStyle,
                    drawerIcon: ({ color, size }) =>
                        <IconButton
                            icon="all-inclusive"
                            iconColor={Appearance.getColorScheme() === 'dark' ? mainCcolors.whiteText : mainCcolors.darkText}
                            size={15}
                            style={{ margin: 0, padding: 0 }}
                        />,
                    drawerLabel: 'Explorar especies'
                }}
                component={ExplorarEspecies} />
            <Drawer.Screen name="Blog"
                options={{
                    drawerItemStyle: mainStyle.drawerItemStyle,
                    drawerIcon: ({ color, size }) =>
                        <IconButton
                            icon="post"
                            iconColor={Appearance.getColorScheme() === 'dark' ? mainCcolors.whiteText : mainCcolors.darkText}
                            size={15}
                            style={{ margin: 0, padding: 0 }}
                        />,
                    drawerLabel: 'Blog'
                }}
                component={Blog} />

            <Drawer.Screen name="MiPerfil"
                options={{
                    drawerItemStyle: mainStyle.drawerItemStyle,
                    drawerIcon: ({ color, size }) =>
                        <IconButton
                            icon="account"
                            iconColor={Appearance.getColorScheme() === 'dark' ? mainCcolors.whiteText : mainCcolors.darkText}
                            size={15}
                            style={{ margin: 0, padding: 0 }}
                        />,
                    drawerLabel: 'Mi perfíl'
                }}
                component={MiPerfil} />
            <Drawer.Screen name="Contacto"
                options={{
                    drawerItemStyle: mainStyle.drawerItemStyle,
                    drawerIcon: ({ color, size }) =>
                        <IconButton
                            icon="card-account-mail"
                            iconColor={Appearance.getColorScheme() === 'dark' ? mainCcolors.whiteText : mainCcolors.darkText}
                            size={15}
                            style={{ margin: 0, padding: 0 }}
                        />,
                    drawerLabel: 'Contacto'
                }}
                component={Contacto} />
            <Drawer.Screen name="Acerca"
                options={{
                    drawerItemStyle: mainStyle.drawerItemStyle,
                    drawerIcon: ({ color, size }) =>
                        <IconButton
                            icon="information-outline"
                            iconColor={Appearance.getColorScheme() === 'dark' ? mainCcolors.whiteText : mainCcolors.darkText}
                            size={15}
                            style={{ margin: 0, padding: 0 }}
                        />,
                    drawerLabel: 'Acerca de'
                }}

                component={Acerca} />
            <Drawer.Screen name="Help"
                options={{
                    drawerItemStyle: mainStyle.drawerItemStyle,
                    drawerIcon: ({ color, size }) =>
                        <IconButton
                            icon="help-box"
                            iconColor={Appearance.getColorScheme() === 'dark' ? mainCcolors.whiteText : mainCcolors.darkText}
                            size={15}
                            style={{ margin: 0, padding: 0 }}
                        />,
                    drawerLabel: 'Ayuda'
                }}
                component={Help} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator;