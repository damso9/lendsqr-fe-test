// src/components/UserTable.tsx
import React, { useEffect, useState } from 'react';
import styles from './UserTable.module.scss';
// Other imports...
import { User } from './types';
import Pagination from './Pagination';
import FilterListIcon from '@mui/icons-material/FilterList'; // MUI filter icon
import MoreVertIcon from '@mui/icons-material/MoreVert'; // MUI three-dot icon
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import viewDetailsIcon from '../../assets/images/users/table/viewDetails.svg';
import blackListIcon from '../../assets/images/users/table/blackListUser.svg';
import activateUserIcon from '../../assets/images/users/table/activateUser.svg';
import FilterPopup from '../../components/popover/FilterPopover';

const UserTable: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [visiblePopoverIndex, setVisiblePopoverIndex] = useState<number | null>(
    null
  );
  const [showFilterPopup, setShowFilterPopup] = useState(false);

  const navigate = useNavigate();

  const totalPages = Math.ceil(users.length / itemsPerPage);
  const totalItems = users.length;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Reset to first page when items per page changes
  const handleItemsPerPageChange = (items: number) => {
    setItemsPerPage(items);
    setCurrentPage(1);
  };

  const getVisibleUsers = (): User[] => {
    const start = (currentPage - 1) * itemsPerPage;
    return users.slice(start, start + itemsPerPage);
  };

  // Toggle popover visibility
  const handlePopoverToggle = (index: number) => {
    setVisiblePopoverIndex(visiblePopoverIndex === index ? null : index);
  };

  // Close any visible popover
  const closePopover = () => {
    setVisiblePopoverIndex(null);
  };

  const handleViewDetails = (user: User) => {
    localStorage.setItem('selectedUser', JSON.stringify(user));
    navigate('/users/details'); 
    closePopover(); 
  };

  const handleFilterIconClick = () => {
    setShowFilterPopup(!showFilterPopup); // Toggle popup visibility
  };

  const closeFilterPopup = () => {
    setShowFilterPopup(false);
  };



  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        'https://run.mocky.io/v3/52445517-855e-4e0b-9617-db64e30e331e'
      ); // Replace with your mock API URL
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    fetchUsers(); // Fetch users on mount
  }, []);

  return (
    <>
      <div className={styles.userTable}>
        <table>
          <thead>
            <tr>
              <th>
                <div id={styles['organization']}>
                  <span>ORGANIZATION </span>
                  <span onClick={handleFilterIconClick}>
                    <FilterListIcon />
                  </span>
                </div>
              </th>
              <th>
                <div id={styles['username']}>
                  <span> USERNAME </span>
                  <span onClick={handleFilterIconClick}>
                    <FilterListIcon />
                  </span>
                </div>
              </th>
              <th>
                <div>
                  <span> EMAIL </span>
                  <span onClick={handleFilterIconClick}>
                    <FilterListIcon />
                  </span>
                </div>
              </th>
              <th>
                <div id={styles['phone-number']}>
                  <span> PHONE NUMBER </span>
                  <span onClick={handleFilterIconClick}>
                    <FilterListIcon />
                  </span>
                </div>
              </th>
              <th>
                <div id={styles['date-joined']}>
                  <span> DATE JOINED </span>
                  <span onClick={handleFilterIconClick}>
                    <FilterListIcon />
                  </span>
                </div>
              </th>
              <th>
                <div id={styles['status']}>
                  <span> STATUS</span>
                  <span onClick={handleFilterIconClick}>
                    <FilterListIcon />
                  </span>
                </div>
              </th>
              <th>{''}</th>
            </tr>
          </thead>
          <tbody>
            {getVisibleUsers().map((user, index) => (
              <tr key={index}>
                <td>{user.organization}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.dateJoined}</td>
                <td>
                  <span
                    className={`${styles.status} ${
                      styles[user.status.toLowerCase()]
                    }`}
                  >
                    {user.status}
                  </span>
                </td>

                <td className={styles.actionColumn}>
                  <div className={styles.moreOptions}>
                    <MoreVertIcon
                      className={styles.moreVertIcon}
                      onClick={() => handlePopoverToggle(index)}
                    />
                    {visiblePopoverIndex === index && (
                      <div className={styles.popover}>
                        <ul>
                          <li
                            onClick={() => {
                              handleViewDetails(user);
                            }}
                          >
                            <img src={viewDetailsIcon} alt='View Details' />
                            View Details
                          </li>
                          <li onClick={closePopover}>
                            <img src={blackListIcon} alt='Blacklist user' />
                            Blacklist User
                          </li>
                          <li onClick={closePopover}>
                            <img src={activateUserIcon} alt='Activate user' />
                            Activate User
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {showFilterPopup && (
          <FilterPopup onClose={closeFilterPopup} />
        )}
      </div>

      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        onItemsPerPageChange={handleItemsPerPageChange}
      />
    </>
  );
};

export default UserTable;
