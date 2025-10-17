import React, { FC } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Dialog, Text, Portal } from 'react-native-paper';

interface CustomAlertProps {
    title: string
    mesage: string
    open:boolean
    onClose:()=>void
    onAcept:()=>void
}

const CustomAlert: FC<CustomAlertProps> = ({ title, mesage, open, onClose, onAcept }: CustomAlertProps) => {
    return (
        <View style={styles.container}>
            <Portal>
                <Dialog visible={open} onDismiss={()=>onClose()} style={styles.customDialog}>
                    <Dialog.Title style={styles.dialogTitle}>{title}</Dialog.Title>
                    <Dialog.Content>
                        <Text style={styles.dialogContent}>
                            {mesage}
                        </Text>
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button onPress={()=>onClose()} style={styles.dialogButtonCancel}>
                            <Text style={styles.dialogButtonText}>Cancelar</Text>
                        </Button>
                        <Button onPress={()=>onAcept()} style={styles.dialogButtonAcept}>
                            <Text style={styles.dialogButtonText}>Aceptar</Text>
                        </Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    customDialog: {
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        padding: 10,
    },
    dialogTitle: {
        color: '#333',
        fontSize: 20,
        fontWeight: 'bold',
    },
    dialogContent: {
        color: '#666',
        fontSize: 16,
    },
    dialogButtonAcept: {
        backgroundColor: '#007bff',
        borderRadius: 5,
        color:'#fff'
    },
    dialogButtonCancel: {
        backgroundColor: '#f32b2bff',
        borderRadius: 5,
        color:'#fff'
    },
    dialogButtonText: {
        color:'#fff'
    },
});

export default CustomAlert;