import Input from '../components/form/Input';
import PasswordInput from '../components/form/PasswordInput';
import styles from './Login.module.scss';
import loginImage from '../assets/images/loginImage.svg';
import lendSqrLogo from '../assets/images/lendSqrLogo.svg';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
});

const initialValues = { email: '', password: '' };
const Login = () => {
  const navigate = useNavigate();

  const onSubmit = (values: typeof initialValues) => {
    console.log(values)
    navigate('/users', { state: values });
  };
  return (
    <div className={styles.container}>
      <section className={styles['image-section']}>
        <div className={styles['image-section__container']}>
          <header>
            <img src={lendSqrLogo} alt='LendSqr logo' />
          </header>
          <img src={loginImage} alt='door opening photo' />
        </div>
      </section>

      <section className={styles['form-section']}>
        <div className={styles['form-section__container']}>
          <header>
            <img src={lendSqrLogo} alt='LendSqr logo' />
          </header>
          <div className={styles.info}>
            <h1>Welcome!</h1>
            <h3>Enter details to login.</h3>
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(formik) => {
              console.log(formik);
              return (
                <Form>
                  <main className={styles['form-control']}>
                    <div>
                      <Input name='email' placeholder='Email' />
                    </div>
                    <div>
                      <PasswordInput placeholder='Password' name='password' />
                    </div>
                    <div>
                      <p>Forgot Password?</p>
                    </div>

                    <button type='submit' className={styles.btn}>
                      Log in
                    </button>
                  </main>
                </Form>
              );
            }}
          </Formik>
        </div>
      </section>
    </div>
  );
};

export default Login;
