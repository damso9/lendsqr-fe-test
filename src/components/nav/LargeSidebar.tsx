import styles from '../nav/styles/LargeSidebar.module.scss';
import { sidebarData } from './data';
import dropdownIcon from '../../assets/svg/dropdownIcon.svg';
import SwitchOrganization from '../../assets/svg/SwitchOrganization';

const LargeSidebar = () => {
  return (
    <>
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
