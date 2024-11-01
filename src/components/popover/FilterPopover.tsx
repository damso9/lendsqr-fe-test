// src/components/FilterPopup.tsx
import React, { useEffect, useRef } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import TextInput from '../form/Input';
import SelectInput from '../form/SelectInput';
import DateInput from '../form/DateInput';
import styles from './FilterPopover.module.scss';
import Button from '../button/Button';

interface FilterPopupProps {
  onClose: () => void;
}

const FilterPopup: React.FC<FilterPopupProps> = ({ onClose }) => {
  const popupRef = useRef<HTMLDivElement | null>(null); // Ref for the popup element

  const initialValues = {
    organization: '',
    username: '',
    email: '',
    date: '',
    phoneNumber: '',
    status: '',
  };

  const validationSchema = Yup.object({
    organization: Yup.string(),
    username: Yup.string(),
    email: Yup.string().email('Invalid email format'),
    date: Yup.date(),
    phoneNumber: Yup.string(),
    status: Yup.string(),
  });

  const handleSubmit = () => {
    onClose();
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        onClose(); // Close the popup if clicking outside
      }
    };
    document.addEventListener('mousedown', handleClickOutside); // Add event listener for clicks
    return () => {
      document.removeEventListener('mousedown', handleClickOutside); // Clean up the event listener
    };
  });

  return (
    <div ref={popupRef} className={styles.popup}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <SelectInput
            name='organization'
            label='Organization'
            options={[
              { value: 'Irorun', label: 'Irorun' },
              { value: 'Lendsqr', label: 'Lendsqr' },
            ]}
          />
          <TextInput
            name='username'
            label='Username'
            placeholder='User'
            size={'small'}
          />
          <TextInput
            name='email'
            label='Email'
            placeholder='Email'
            size={'small'}
          />
          <DateInput name='date' label='Date' />
          <TextInput
            name='phoneNumber'
            label='Phone Number'
            placeholder='Phone Number'
            size={'small'}
          />
          <SelectInput
            name='status'
            label='Status'
            options={[
              { value: 'active', label: 'Active' },
              { value: 'inactive', label: 'Inactive' },
              { value: 'blacklisted', label: 'Blacklisted' },
              { value: 'pending', label: 'Pending' },
            ]}
          />
          <div className={styles.buttons}>
            <Button label='Reset' onClick={onClose} variant='secondary' />
            <Button label='Filter' type='submit' variant='primary' />
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default FilterPopup;
