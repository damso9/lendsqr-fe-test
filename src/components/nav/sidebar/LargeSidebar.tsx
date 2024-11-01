import styles from './LargeSidebar.module.scss';
// import MenuIcon from '@mui/icons-material/Menu';

import { sidebarData } from './data';
import dropdownIcon from '../../../assets/images/dropdownIcon.svg';
import SwitchOrganization from '../../../assets/svg-components/SwitchOrganization';

const LargeSidebar = () => {
  return (
    <>
      {/* <div className={styles['sidebar-toggle']} onClick={toggleSidebar}>
        <MenuIcon fontSize='large' />
      </div> */}
      <div className={styles['container']}>
        <div className={`${styles['sidebar']} `}>
          <div className={styles['sidebar-header']}>
            <div className={styles['sidebar-close']}>
              <SwitchOrganization />
            </div>
            <h2>Switch Organization</h2>
            <img src={dropdownIcon} alt='Dropdown Icon' />
          </div>

          <div className={styles['sidebar-content']}>
            {sidebarData.map((section, index) => (
              <div key={index} className={styles['sidebar-section']}>
                {section.title && <h3>{section.title}</h3>}
                <ul>
                  {section.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className={
                        location.pathname.startsWith(item.path)
                          ? styles['active']
                          : ''
                      }
                    >
                      <img
                        src={item.icon}
                        alt={item.label}
                        className={
                          location.pathname.startsWith(item.path)
                            ? styles['active-icon']
                            : styles['icon']
                        }
                      />
                      {item.label}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default LargeSidebar;
