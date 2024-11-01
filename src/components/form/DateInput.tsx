// src/components/filters/DateInput.tsx
import React from 'react';
import { Field, ErrorMessage, FieldProps } from 'formik';
import styles from './styles/DateInput.module.scss';
import dateIcon from '../../assets/svg/dateIcon.svg';

interface DateInputProps {
  name: string;
  label: string;
}

const DateInput: React.FC<DateInputProps> = ({ name, label }) => {
  return (
    <div className={styles.fieldContainer}>
      <label htmlFor={name}>{label}</label>
      <Field name={name}>
        {({ field }: FieldProps) => (
          <div className={styles.dateWrapper}>
            <input
              type='date'
              id={name}
              {...field}
              className={styles.dateField}
            />

            <span className={styles.dateIcon}>
              <img src={dateIcon} alt='Date Icon' />
            </span>
          </div>
        )}
      </Field>
      <ErrorMessage name={name} component='div' className={styles.error} />
    </div>
  );
};

export default DateInput;
