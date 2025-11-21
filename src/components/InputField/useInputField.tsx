import { useField } from "formik";
import { useEffect, useRef, useState } from "react";
import type { InputFieldProps } from "./types";

export const useInputField = (props: InputFieldProps) => {
  const [field, meta] = useField(props.name);
  const [didFocus, setDidFocus] = useState(false);
  const refInput: any = useRef(null);
  const handleFocus = () => {
    refInput.current?.focus();
    setDidFocus(true)
  };

  const showFeedback = meta.touched || didFocus;
  const errorMessage = meta.error || "";
  const esError = !!(meta.touched && meta.error);

  const newPros = { ...props };
  delete newPros.onEdit;

  useEffect(() => {
    if (!props?.disabled && props?.checkFocus) {
      setTimeout(() => refInput.current?.focus(), 100);
    }
  }, [props?.disabled]);

  return {
    newPros,
    showFeedback,
    handleFocus,
    field,
    errorMessage,
    esError,
    meta,
    refInput
  };
};
