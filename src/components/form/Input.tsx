import { ErrorMessage, Field, FieldProps } from 'formik';
import styles from './styles/Input.module.scss';
import TextError from './TextError';

interface InputProps {
  name: string;
  size?:'small'
  placeholder: string;
  [key: string]: unknown;
  label?: string
}
const Input: React.FC<InputProps> = ({ name, placeholder,label, size }) => {
  return (
    <Field name={name}>
      {({ field }: FieldProps) => {
        return (
          <>
            {label && <label htmlFor={name}>{label}</label>}
            <input
              type='text'
              id={name}
              placeholder={placeholder}
              className={`${styles.inputField} ${size ? styles.small: ''}`}
              {...field}
            />
            <ErrorMessage name={name}>
              {(msg) => <TextError>{msg}</TextError>}
            </ErrorMessage>
          </>
        );
      }}
    </Field>
  );
};
export default Input;
