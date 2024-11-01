import styles from '../users/users.module.scss';
import usersLogo from '../../assets/images/users/users.svg';
import activeUsersLogo from '../../assets/svg/activeUsersLogo.svg';
import usersWithLoanLogo from '../../assets/svg/usersWithLoanLogo.svg';
import usersWithSavingsLogo from '../../assets/svg//usersWithSavingsLogo.svg';
import UserTable from '../../components/tables/UserTable';
const Users = () => {
  const data = [
    { label: 'USERS', value: '2,453', icon: usersLogo },
    { label: 'ACTIVE USERS', value: '2,453', icon: activeUsersLogo },
    {
      label: 'USERS WITH LOANS',
      value: '12,453',
      icon: usersWithLoanLogo,
    },
    {
      label: 'USERS WITH SAVINGS',
      value: '102,453',
      icon: usersWithSavingsLogo,
    },
  ];
  return (
    <>
      <main>
        {/* Users Info */}
        <section className={styles['user-info']}>
          <h2>Users</h2>

          <div className={styles['user-info__card-container']}>
            {data.map(({ icon, label, value }, index) => (
              <div className={styles['user-info__card']} key={index}>
                <img src={icon} alt='users-icon' />

                <h5 id={styles.label}>{label}</h5>

                <h3 id={styles.count}>{value}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Users Table */}
        <UserTable />
      </main>
    </>
  );
};
export default Users;
