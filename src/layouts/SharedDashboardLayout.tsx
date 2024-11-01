import { Outlet } from 'react-router-dom';
import Navbar from '../components/nav/Navbar';
import Sidebar from '../components/nav/Sidebar';
import { useState } from 'react';
import styles from './SharedDashboardLayout.module.scss';
import LargeSidebar from '../components/nav/LargeSidebar';

const SharedDashboardLayout = () => {
  console.log('Rending SharedDashboard Layout');

  const [openSidebar, setOpenSidebar] = useState(false);

  const toggleSidebar = () => setOpenSidebar(!openSidebar);

  const closeSidebar = () => setOpenSidebar(false);
  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      {/* Small Screen slide in Sidebar */}
      <Sidebar openSidebar={openSidebar} closeSidebar={closeSidebar} />

      {/* Large Screen Sidebar */}
      <div className={styles.dashboardLayout}>
        <aside className={styles.sidebar}>
          <LargeSidebar />
        </aside>

        {/* Main Content */}
        <main className={styles.mainContent}>
          <Outlet />
        </main>
      </div>
    </>
  );
};
export default SharedDashboardLayout;
