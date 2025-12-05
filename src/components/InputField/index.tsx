import React, { useRef } from "react";
import { View, Text, TextInput } from "react-native";
import type { InputFieldProps } from "./types";
import { useInputField } from "./useInputField";

const InputField: React.FC<InputFieldProps> = (props) => {
  const {
    showFeedback,
    handleFocus,
    errorMessage,
    esError,
    refInput
  } = useInputField(props);

  const { formik, label, placeholder, type, disabled, name } = props;
  const keyboardType =
    type === "email"
      ? "email-address"
      : type === "password"
        ? "default"
        : type === 'numeric' ? 'numeric' : "default";

  return (
    <View style={{ marginVertical: 8 }}>
      {label && (
        <Text style={{ marginBottom: 4, color: "#333" }}>
          {label}
        </Text>
      )}

      <TextInput  
        textAlignVertical="top"
        ref={refInput}
        placeholder={placeholder || ""}
        onFocus={handleFocus}
        onChangeText={(value) => {
          formik.setFieldValue(name, value);
          props?.onInput && props?.onInput(value)
        }}
        value={formik.values[name]}
        keyboardType={keyboardType}
        secureTextEntry={type === "password"}
        editable={!disabled}
        style={!props?.style ? {
          borderWidth: 1,
          borderColor: esError ? "red" : "#ccc",
          borderRadius: 8,
          paddingHorizontal: 12,
          paddingVertical: 8,
          backgroundColor: disabled ? "#f2f2f2" : "white",
        } : {...props?.style,...{borderColor: esError ? "red" : "#ccc",backgroundColor: disabled ? "#f2f2f2" : "white"}}}
        onBlur={() => formik.setFieldTouched(name, true)}
        onSubmitEditing={props?.onSubmitEditing || null}
      />

      {showFeedback && esError && (
        <Text style={{ color: "red", marginTop: 4, fontSize: 12 }}>
          {errorMessage}
        </Text>
      )}
    </View>
  );
};

export default InputField;
