import { ReactNode } from 'react';
import styles from './styles/TextError.module.scss';

interface TextErrorProps {
  children: ReactNode | string;
}

const TextError: React.FC<TextErrorProps> = ({ children }) => {
  return <div className={styles['error-text']}>{children}</div>;
};
export default TextError;
