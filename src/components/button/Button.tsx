// src/components/Button.tsx
import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = 'primary',
  ...props
}) => {
  return (
    <button
      className={
        variant === 'primary' ? styles['primary-btn'] : styles['secondary-btn']
      }
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
