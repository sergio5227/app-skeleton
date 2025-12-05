import React from "react";
import { View, Text, Pressable, Modal, FlatList, TouchableOpacity } from "react-native";
import { useSelectField } from "./useSelectField";
import type { SelectFieldProps } from "./types";


const SelectField: React.FC<SelectFieldProps> = (props) => {
    const {
        selectedLabel,
        modalVisible,
        setModalVisible,
        handleSelect,
        esError,
        errorMessage,
        showFeedback
    } = useSelectField(props);

    const { label, placeholder, disabled, style } = props;

    return (
        <View style={{ marginVertical: 8 }}>
            {label && (
                <Text style={{ marginBottom: 4, color: "#333" }}>{label}</Text>
            )}

            <Pressable
                disabled={disabled}
                onPress={() => !disabled && setModalVisible(true)}
                style={
                    !style
                        ? {
                            borderWidth: 1,
                            borderColor: esError ? "red" : "#ccc",
                            borderRadius: 8,
                            paddingHorizontal: 12,
                            paddingVertical: 14,
                            backgroundColor: disabled ? "#f2f2f2" : "white",
                        }
                        : {
                            ...style,
                            borderColor: esError ? "red" : "#ccc",
                            backgroundColor: disabled ? "#f2f2f2" : "white",
                        }
                }
            >
                <Text style={{ color: selectedLabel ? "#000" : "#777" }}>
                    {selectedLabel || placeholder || "Selecciona una opción"}
                </Text>
            </Pressable>

            {showFeedback && esError && (
                <Text style={{ color: "red", marginTop: 4, fontSize: 12 }}>
                    {errorMessage}
                </Text>
            )}

            {/* Modal selector */}
            <Modal visible={modalVisible} transparent animationType="fade">
                <Pressable
                    style={{
                        flex: 1,
                        backgroundColor: "rgba(0,0,0,0.4)",
                        justifyContent: "center",
                        paddingHorizontal: 20,
                    }}
                    onPress={() => setModalVisible(false)}
                >
                    <View
                        style={{
                            backgroundColor: "white",
                            borderRadius: 10,
                            padding: 10,
                            maxHeight: "70%",
                        }}
                    >
                        <FlatList
                            data={props.options}
                            keyExtractor={(item) => item.value.toString()}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    style={{
                                        paddingVertical: 14,
                                        borderBottomWidth: 1,
                                        borderBottomColor: "#eee",
                                    }}
                                    onPress={() => handleSelect(item)}
                                >
                                    <Text style={{ fontSize: 16 }}>{item.label}</Text>
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                </Pressable>
            </Modal>
        </View>
    );
};

export default SelectField;
