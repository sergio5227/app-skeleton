import React, { FC } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Dialog, Text, Portal, IconButton  } from 'react-native-paper';

interface CustomAlertProps {
    title: string
    mesage: string
    open: boolean
    onCloseX: () => void
    onClose?: () => void
    onAcept?: () => void
    titleAceptButton?: string
    titleCancelButton?: string

}

const CustomAlert: FC<CustomAlertProps> = ({ title, mesage, open, onClose, onAcept, titleAceptButton, titleCancelButton, onCloseX }: CustomAlertProps) => {
    return (
        <View style={styles.container}>
            <Portal>
                <Dialog visible={open} style={styles.customDialog}>
                    <Dialog.Title style={styles.dialogTitle}>{title}</Dialog.Title>
                    <View style={{ position: 'absolute', top: 0, right: 0 }}>
                        <IconButton
                            icon="close-circle"
                            iconColor={'#c7c4c4ff'}
                            size={30}
                            onPress={() => onCloseX()}
                        />
                    </View>
                    <Dialog.Content style={styles.dialogContent}>
                        <Text style={styles.dialogContentText}>
                            {mesage}
                        </Text>
                    </Dialog.Content>
                    {onAcept || onClose ? <Dialog.Actions style={styles.dialogActions}>
                        {onAcept ? <Button onPress={() => onAcept()} style={styles.dialogButtonAcept}>
                            <Text style={styles.dialogButtonText}>{titleAceptButton || 'Aceptar'} </Text>
                        </Button> : null}
                        {onClose ? <Button onPress={() => onClose()} style={styles.dialogButtonCancel}>
                            <Text style={{ ...styles.dialogButtonText, ...{ color: '#007bff' } }}> {titleCancelButton || 'Cancelar'} </Text>
                        </Button> : null}
                    </Dialog.Actions> : null}
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

    },
    dialogContentText: {
        color: '#666',
        fontSize: 16,
    },
    dialogActions: {
        flexDirection: 'column',
        height: 120,

    },
    dialogButtonAcept: {
        height: 40,
        width: '100%',
        backgroundColor: '#007bff',
        borderRadius: 30,
        marginBottom: 5
    },
    dialogButtonCancel: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#007bff',
        height: 40,
        borderRadius: 30
    },
    dialogButtonText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: '700'
    },
});

export default CustomAlert;