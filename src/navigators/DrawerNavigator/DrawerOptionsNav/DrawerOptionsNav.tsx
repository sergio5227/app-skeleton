import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { ScrollView } from 'react-native-gesture-handler';


const DrawerOptionsNav = (props: any) => {
    return (
        <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1, padding:0, margin:0 }}>
            
            {/* HEADER CON IMAGEN */}
            <View style={styles.header}>
                <Image
                    source={require('../../../assets/img/logo/hola_bonsai.jpg')}
                    style={styles.headerImage}
                />
            </View>

            {/* LISTA DE OPCIONES */}
            <ScrollView style={{ flex: 1 }}>
                <View style={styles.menuContainer}>
                    <DrawerItemList {...props} />
                </View>
            </ScrollView>

            {/* FOOTER PERSONALIZADO */}
            {/* <View style={styles.footer}>
                <TouchableOpacity style={styles.footerButton}>
                    <Text style={styles.footerText}>Cerrar sesión</Text>
                </TouchableOpacity>
            </View> */}
            
        </DrawerContentScrollView>
    )
}

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    headerImage: {
        width: 80,
        height: 80,
        borderRadius: 10,
        marginBottom: 5,
    },
    headerText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#2e7d32',
    },
    menuContainer: {
        flex: 1,
        paddingTop: 10,
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        padding: 15,
        borderTopWidth: 1,
        borderColor: '#ccc',
    },
    footerButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    footerText: {
        marginLeft: 10,
        color: '#555',
        fontSize: 16,
    },
});

export default DrawerOptionsNav;