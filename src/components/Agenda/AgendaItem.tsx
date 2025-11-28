import isEmpty from 'lodash/isEmpty';
import React, { useCallback } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Button } from 'react-native';
import testIDs from './testIDs';

interface ItemProps {
    item: any
    onPress : (item: any) => void
}

const AgendaItem = (props: ItemProps) => {
    const { item } = props;

    const buttonPressed = useCallback(() => {
        console.log('_')
        props?.onPress(item)
    }, []);

    const itemPressed = useCallback(() => {
        props?.onPress(item)
    }, [item]);

    if (isEmpty(item)) {
        return (
            <View style={styles.emptyItem}>
                <Text style={styles.emptyItemText}>Ningun trabajo para hoy</Text>
            </View>
        );
    }

    return (
        <TouchableOpacity onPress={itemPressed} style={styles.item} testID={testIDs.agenda.ITEM}>
            <View>
                <Text style={styles.itemHourText}>{item.hour}</Text>
                <Text style={styles.itemDurationText}>{item.duration}</Text>
            </View>
            <View style={{flex: 1}}>
                <Text style={styles.itemTitleText}>{item.title}</Text>
                <Text style={styles.itemText}>{item.details?.bonsai}, {item.details?.especie}</Text>
            </View>
            <View style={styles.itemButtonContainer}>
                <Button  title={'Info'} onPress={buttonPressed} />
            </View>
        </TouchableOpacity>
    );
};

export default React.memo(AgendaItem);

const styles = StyleSheet.create({
    item: {
        padding: 15,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey',
        flexDirection: 'row'
    },
    itemHourText: {
        color: 'black'
    },
    itemDurationText: {
        color: 'grey',
        fontSize: 12,
        marginTop: 4,
        marginLeft: 4
    },
    itemTitleText: {
        color: 'black',
        marginLeft: 16,
        fontWeight: 'bold',
        fontSize: 16,
        padding:1
    },
    itemText: {
        color: 'black',
        marginLeft: 16,
        fontSize: 14,
        padding:1
    },
    itemButtonContainer: {
        alignItems: 'flex-end'
    },
    emptyItem: {
        paddingLeft: 20,
        height: 52,
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey'
    },
    emptyItemText: {
        color: 'lightgrey',
        fontSize: 14
    }
});