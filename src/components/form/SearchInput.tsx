import { FC, InputHTMLAttributes } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import ClearIcon from '@mui/icons-material/Clear';
import styles from './styles/SearchInput.module.scss';

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  onClear?: () => void;
  onFilterClick?: () => void;
}

const SearchInput: FC<SearchInputProps> = ({
  onClear,
  onFilterClick,
  ...inputProps
}) => {
  return (
    <div className={styles['search-input']}>
      <SearchIcon className={styles['search-icon']} />
      <input type='text' placeholder='Search' {...inputProps} />
      <div className={styles['icons']}>
        <TuneIcon className={styles['filter-icon']} onClick={onFilterClick} />
        <ClearIcon className={styles['clear-icon']} onClick={onClear} />
      </div>
    </div>
  );
};

export default SearchInput;
