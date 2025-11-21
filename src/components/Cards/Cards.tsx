import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { mainCcolors } from "../../theme/styles";

interface CardInfoProps {
    title: string
    value: any
    color?: string
    onPress?: () => void
}

const CardInfo = (props: CardInfoProps) => {
    return (
        <View style={{ ...styles.card, ...props?.color ? { backgroundColor: props?.color } : {} }}>
            <Pressable onPress={() => props?.onPress && props?.onPress()}>
                <Text style={styles.cardLabel}>{props?.title} </Text>
                <Text style={styles.cardValue}>{props?.value}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        margin: 5,
        width: '45%',
        height: 100,
        backgroundColor: mainCcolors.primary,
        padding: 18,
        borderRadius: 12,
        marginRight: 10,
    },
    cardLabel: {
        color: "#aaa",
        fontSize: 14,
    },
    cardValue: {
        fontSize: 22,
        fontWeight: "700",
        color: "#fff",
        marginTop: 5,
    },
});


export default CardInfo;