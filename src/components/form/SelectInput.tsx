// src/components/filters/SelectInput.tsx
import React from 'react';
import { Field, ErrorMessage, FieldProps } from 'formik';
import selectDropDown from '../../assets/svg/selectDropDown.svg';
import styles from './styles/SelectInput.module.scss';

interface SelectInputProps {
  name: string;
  label: string;
  options: { value: string; label: string }[];
}

const SelectInput: React.FC<SelectInputProps> = ({ name, label, options }) => {
  return (
    <div className={styles.fieldContainer}>
      <label htmlFor={name}>{label}</label>
      <Field name={name}>
        {({ field }: FieldProps) => (
          <div className={styles.selectWrapper}>
            <select id={name} {...field} className={styles.selectField}>
              <option value=''>Select</option>
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <span className={styles.selectIcon}>
                <img src={selectDropDown} alt="select dropdown" />
            </span>
          </div>
        )}
      </Field>
      <ErrorMessage name={name} component='div' className={styles.error} />
    </div>
  );
};

export default SelectInput;
