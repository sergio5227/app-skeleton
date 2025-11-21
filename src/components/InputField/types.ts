export interface InputFieldProps {
  label?: string;
  name: string;
  multiline?:boolean;
  style?:any;
  ref?:any;
  id: string;
  placeholder?: string;
  required?: boolean;
  autoFocus?: boolean;
  disabled?: boolean;
  type?: 'text' | 'email' | 'password' | 'numeric';
  info?: string;
  formik: any;
  onEdit?: () => void;
  value?: string;
  onInput?: (value: string) => void;
  onSubmitEditing?:any
  checkFocus?:boolean
  returnKeyType?:string
}
