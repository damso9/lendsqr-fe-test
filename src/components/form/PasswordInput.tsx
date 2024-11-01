import React, { useState } from 'react';
import { Field, ErrorMessage, FieldProps } from 'formik';
import styles from './PasswordInput.module.scss';
import TextError from './TextError';

interface PasswordInputProps {
  name: string;
  placeholder?: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ name, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Field name={name}>
      {({ field }: FieldProps) => (
        <>
          <div
            className={`${styles['password-input']} ${
              isFocused ? styles['password-input--focused'] : ''
            }`}
          >
            <input
              type={showPassword ? 'text' : 'password'}
              id={name}
              placeholder={placeholder}
              className={styles['password-input__field']}
              {...field}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
            <span
              className={styles['password-input__toggle']}
              onClick={togglePasswordVisibility}
            >
              {showPassword ? 'HIDE' : 'SHOW'}
            </span>
          </div>
          <ErrorMessage name={name}>
            {(msg) => <TextError>{msg}</TextError>}
          </ErrorMessage>
        </>
      )}
    </Field>
  );
};

export default PasswordInput;
