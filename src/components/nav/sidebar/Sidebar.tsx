import styles from './Sidebar.module.scss';
// import MenuIcon from '@mui/icons-material/Menu';
import dropdownIcon from '../../../assets/images/dropdownIcon.svg';

import { sidebarData } from './data';
import SwitchOrganization from '../../../assets/svg-components/SwitchOrganization';

interface SidebarProps {
  closeSidebar: () => void;
  openSidebar: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ closeSidebar, openSidebar }) => {
  return (
    <>
      {/* <div className={styles['sidebar-toggle']} onClick={toggleSidebar}>
        <MenuIcon fontSize='large' />
      </div> */}

      {openSidebar && (
        <div className={styles['overlay']} onClick={closeSidebar}></div>
      )}

      <div
        className={`${styles['sidebar']} ${openSidebar ? styles['open'] : ''}`}
      >
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
    </>
  );
};

export default Sidebar;
