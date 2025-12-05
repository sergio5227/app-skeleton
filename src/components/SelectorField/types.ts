export interface SelectOption {
  label: string;
  value: any;
}

export interface SelectFieldProps {
  label?: string;
  name: string;
  id: string;
  placeholder?: string;
  disabled?: boolean;
  style?: any;
  formik: any;
  options: SelectOption[];
  onInput?: (value: any) => void;
  checkFocus?: boolean;
}
