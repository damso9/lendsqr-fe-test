import MenuIcon from '@mui/icons-material/Menu';
import styles from './Navbar.module.scss';
import SearchIcon from '@mui/icons-material/Search';
import bellIcon from '../../assets/images/bellIcon.svg';
import profileIcon from '../../assets/images/profile.png';
import SearchInput from '../form/SearchInput';
import { useState } from 'react';
import lendSqrLogo from '../../assets/images/lendSqrLogo.svg';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


interface NavbarProps {
  toggleSidebar: () => void

}
const Navbar:React.FC<NavbarProps> = ({toggleSidebar}) => {
  const [showSearchInput, setShowSearchInput] = useState(false);

  return (
    <>
      {/* Navbar Small Screen */}
      <nav className={styles.nav}>
        <section className={styles['icon-button__container']}>
          <button className={styles['icon-button']} onClick={toggleSidebar}>
            <MenuIcon />
          </button>
          <button
            className={styles['icon-button']}
            onClick={() => setShowSearchInput(true)}
          >
            <SearchIcon />
          </button>
        </section>

        {/* Lend Sqr Logo */}
        <section className={styles['lendsqr-container']}>
          <img src={lendSqrLogo} alt='LendSqr Logo' height={'25px'} />
        </section>

        {/* Search field for large screen */}
        <section className={styles['search-bar']}>
          <input type='text' placeholder='Search for anything' />
          <button>
            <SearchIcon />
          </button>
        </section>

        <section className={styles['personal-info']}>
          <p>Docs</p>

          <img src={bellIcon} alt='bell Icon' id={styles.bell} />

          <div className={styles['profile-info']}>
            <img src={profileIcon} alt='profile Icon' />
            <p id={styles.username}>Adedeji </p>
            <button>
              <ArrowDropDownIcon />
            </button>
          </div>
        </section>

        {showSearchInput && (
          <div className={styles['search-input']}>
            <SearchInput onClear={() => setShowSearchInput(false)} />
          </div>
        )}
      </nav>
    </>
  );
};
export default Navbar;
