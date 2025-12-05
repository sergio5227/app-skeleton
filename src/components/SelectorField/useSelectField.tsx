import { useField } from "formik";
import { useEffect, useState } from "react";
import type { SelectFieldProps } from "./types";


export const useSelectField = (props: SelectFieldProps) => {
  const [field, meta, helpers] = useField(props.name);

  const [modalVisible, setModalVisible] = useState(false);
  const selectedLabel =
    props.options.find((opt) => opt.value === field.value)?.label || "";

  const showFeedback = meta.touched;
  const errorMessage = meta.error || "";
  const esError = !!(meta.touched && meta.error);

  const handleSelect = (item: any) => {
    helpers.setValue(item.value);
    props?.onInput && props.onInput(item.value);
    setModalVisible(false);
  };

  // auto focus (abrir selector) si checkFocus = true
  useEffect(() => {
    if (!props.disabled && props.checkFocus) {
      setTimeout(() => setModalVisible(true), 200);
    }
  }, [props.disabled]);

  return {
    selectedLabel,
    modalVisible,
    setModalVisible,
    handleSelect,
    esError,
    errorMessage,
    showFeedback,
  };
};
