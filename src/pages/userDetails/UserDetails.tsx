import Rating from '@mui/material/Rating';
import styles from './UserDetails.module.scss';
import userDetailsAvatar from '../../assets/images/users/userDetailsAvatar.svg';
import { useEffect, useState } from 'react';
import { User } from '../users/types';
import { useNavigate } from 'react-router-dom';

const UserDetails = () => {
  const [user, setUser] = useState<User | null>(null);
  const [userDetailsTab, setUserDetailsTab] = useState(0)
  const navigate = useNavigate();


  useEffect(() => {
    const storedUser = localStorage.getItem('selectedUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  if (!user) {
    return <div>No user details found.</div>;
  }

  return (
    <div className={styles['user-details']}>
      <header className={styles['user-details__header']}>
        <button className={styles['back-btn']} onClick={() => navigate(-1)}>
          ← Back to Users
        </button>
        <div className={styles['nav-detail']}>
          <h2>User Details</h2>
          <div className={styles['action-buttons']}>
            <button className={`${styles.btn} ${styles['blacklist-button']}`}>
              Blacklist User
            </button>
            <button className={`${styles.btn} ${styles['btn-success']}`}>
              Activate User
            </button>
          </div>
        </div>
      </header>

      <section className={styles['user-summary']}>
        <div className={styles['user-summary-details']}>
          <div className={styles.profile}>
            <img src={userDetailsAvatar} alt='User Details Avatar' />
            <div>
              <h3>{user.username}</h3>
              <p>{user.bvn}</p> {/* Display BVN */}
            </div>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.tier}>
            <span>User's Tier</span>
            <Rating
              name='user-rating'
              value={3}
              max={5}
              readOnly
              precision={1}
              emptyIcon={<span style={{ color: '#ccc' }}>☆</span>}
            />
          </div>
          <div className={styles.divider}></div>
          <div className={styles.account}>
            <h3>{user.monthlyIncome}</h3>
            <p>{user.officeEmail}</p>
          </div>
        </div>

        <nav className={styles['user-tabs']}>
          <span
            
            className={userDetailsTab === 0 ? styles.active : ''}
            onClick={() => {
              setUserDetailsTab(0);
            }}
          >
            General Details
          </span>
          <span
  
            className={userDetailsTab === 1 ? styles.active : ''}
            onClick={() => {
              setUserDetailsTab(1);
            }}
          >
            Documents
          </span>
          <span
          
            className={userDetailsTab === 2 ? styles.active : ''}
            onClick={() => {
              setUserDetailsTab(2);
            }}
          >
            Bank Details
          </span>
          <span
        
            className={userDetailsTab === 3 ? styles.active : ''}
            onClick={() => {
              setUserDetailsTab(3);
            }}
          >
            Loans
          </span>
          <span
       
            className={userDetailsTab === 4 ? styles.active : ''}
            onClick={() => {
              setUserDetailsTab(4);
            }}
          >
            Savings
          </span>
          <span
            
            className={userDetailsTab === 5 ? styles.active : ''}
            onClick={() => {
              setUserDetailsTab(5);
            }}
          >
            App and System
          </span>
        </nav>
      </section>

      {userDetailsTab === 0 ? (
        <>
          <section className={styles['details-section']}>
            <h4>Personal Information</h4>
            <div className={styles['detail-row']}>
              <div>
                <span>Full Name</span>
                <p>{user.fullName}</p>
              </div>
              <div>
                <span>Phone Number</span>
                <p>{user.phone}</p>
              </div>
              <div>
                <span>Email Address</span>
                <p>{user.email}</p>
              </div>
              <div>
                <span>BVN</span>
                <p>{user.bvn}</p>
              </div>
              <div>
                <span>Gender</span>
                <p>{user.gender}</p>
              </div>
              <div>
                <span>Marital Status</span>
                <p>{user.maritalStatus}</p>
              </div>
              <div>
                <span>Children</span>
                <p>{user.children}</p>
              </div>
              <div>
                <span>Type of Residence</span>
                <p>{user.typeOfResidence}</p>
              </div>
            </div>
            <div className={styles['divider-hr']}></div>
          </section>

          <section className={styles['details-section']}>
            <h4>Education and Employment</h4>
            <div className={styles['detail-row-2']}>
              <div>
                <span>Level of Education</span>
                <p>{user.levelOfEducation}</p>
              </div>
              <div>
                <span>Employment Status</span>
                <p>{user.employmentStatus}</p>
              </div>
              <div>
                <span>Sector of Employment</span>
                <p>{user.sectorOfEmployment}</p>
              </div>
              <div>
                <span>Duration of Employment</span>
                <p>{user.durationOfEmployment}</p>
              </div>
              <div>
                <span>Office Email</span>
                <p>{user.officeEmail}</p>
              </div>
              <div>
                <span>Monthly Income</span>
                <p>{user.monthlyIncome}</p>
              </div>
              <div>
                <span>Loan Repayment</span>
                <p>{user.loanRepayment}</p>
              </div>
            </div>
            <div className={styles['divider-hr']}></div>
          </section>

          <section className={styles['details-section']}>
            <h4>Socials</h4>
            <div className={styles['detail-row']}>
              <div>
                <span>Twitter</span>
                <p>{user.socials.twitter}</p>
              </div>
              <div>
                <span>Facebook</span>
                <p>{user.socials.facebook}</p>
              </div>
              <div>
                <span>Instagram</span>
                <p>{user.socials.instagram}</p>
              </div>
            </div>
            <div
              className={`${styles['divider-hr']} }`}
              id={styles['last-hr']}
            ></div>
          </section>

          <section className={styles['details-section']}>
            <h4>Guarantor</h4>
            <div className={styles['detail-row']}>
              <div>
                <span>Full Name</span>
                <p>{user.guarantor.fullName}</p>
              </div>
              <div>
                <span>Phone Number</span>
                <p>{user.guarantor.phone}</p>
              </div>
              <div>
                <span>Email Address</span>
                <p>{user.guarantor.email}</p>
              </div>
              <div>
                <span>Relationship</span>
                <p>{user.guarantor.relationship}</p>
              </div>
            </div>
          </section>
        </>
      ) : (
        <section className={styles['details-section']}>
          <h4>Page Not Available</h4>
          <p>The content for this section is currently not available.</p>
        </section>
      )}
    </div>
  );
};

export default UserDetails;
