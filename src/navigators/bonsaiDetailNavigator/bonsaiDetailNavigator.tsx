import { FC } from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MisBonsaisDetalle from "../../screens/misBonsaisDetalle/misBonsaisDetalle";
import MisBonsaisDetalleCalendario from "../../screens/misBonsaisDetalleCalendario/misBonsaisDetalleCalendario";
import MyCustomTabBar from "./myCustomTabBar";
import { RouteProp, useRoute } from "@react-navigation/native";
import MisBonsaisDetalleGaleria from "../../screens/misBonsaisDetalleGaleria/misBonsaisDetalleGaleria";
import MisBonsaisDetalleIA from "../../screens/misBonsaisDetalleIA/misBonsaisDetalleIA";
import MisBonsaisDetalleOfertas from "../../screens/misBonsaisDetalleOfertas/misBonsaisDetalleOfertas";

export type BonsaiDetailNavigatorParams = {
    MisBonsaisDetalle: { regresar: boolean, data: any, iconName: string, label: string };
    MisBonsaisDetalleCalendario: { regresar: boolean, data: any, iconName: string, label: string };
    MisBonsaisDetalleGaleria: { regresar: boolean, data: any, iconName: string, label: string };
    MisBonsaisDetalleIA: { regresar: boolean, data: any, iconName: string, label: string };
    MisBonsaisDetalleOfertas: { regresar: boolean, data: any, iconName: string, label: string };
}

const BonsaiDetailNavigator: FC = () => {
    const Tab = createBottomTabNavigator<BonsaiDetailNavigatorParams>();
    const params = useRoute<RouteProp<BonsaiDetailNavigatorParams, 'MisBonsaisDetalle'>>().params;
    return (
        <Tab.Navigator initialRouteName="MisBonsaisDetalle" screenOptions={{
            headerShown: false,
        }}
            tabBar={(props) => <MyCustomTabBar {...props} />}
        >
            <Tab.Screen
                name='MisBonsaisDetalleCalendario'
                component={MisBonsaisDetalleCalendario}
                initialParams={{
                    ...{
                        iconName: "calendar-outline",
                        label: "Agenda"
                    }, ...params
                }}
            />
            <Tab.Screen
                name='MisBonsaisDetalleGaleria'
                component={MisBonsaisDetalleGaleria}
                initialParams={{
                    ...{
                        iconName: "image-outline",
                        label: "Galeria"
                    }, ...params
                }}
            />
            <Tab.Screen
                name='MisBonsaisDetalle'
                component={MisBonsaisDetalle}
                initialParams={{
                    ...{
                        iconName: "tree-outline",
                        label: "Info"
                    }, ...params
                }}
            />
            <Tab.Screen
                name='MisBonsaisDetalleIA'
                component={MisBonsaisDetalleIA}
                initialParams={{
                    ...{
                        iconName: "face-agent",
                        label: "AsistencIA"
                    }, ...params
                }}
            />
            <Tab.Screen
                name='MisBonsaisDetalleOfertas'
                component={MisBonsaisDetalleOfertas}
                initialParams={{
                    ...{
                        iconName: "cash-100",
                        label: "Ofertas"
                    }, ...params
                }}
            />
        </Tab.Navigator>
    )
}


export default BonsaiDetailNavigator