import React from "react";
import styles from "./Login.module.css"
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
          email: '',
          password: '',
        },
        validationSchema: Yup.object({
            password: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
          email: Yup.string().email('Invalid email address').required('Required'),
        }),
        onSubmit: values => {
            navigate('/')
        },
      });


        return (
            <div className={styles.login_body}>
                <div className={styles.login_container}>
               <form onSubmit={formik.handleSubmit} className={styles.login_form}>
               <h1>Movie App</h1>
                        <div className={styles.input_element}>
                        <label htmlFor="Email">Email</label>
                        <input className={styles.login_input} name="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email} type="text" id="email" placeholder="Email" />

                        {formik.touched.email && formik.errors.email ? (
                                <div className={styles.input_error}>{formik.errors.email}</div>
                            ) : null}
                        </div>

                        <div className={styles.input_element}>
                        <label htmlFor="password">Password</label>
                        <input className={styles.login_input}
                        name="password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password} 
                        type="password" id="password" placeholder="Password" />

                        {formik.touched.password && formik.errors.password ? (
                            <div className={styles.input_error}>{formik.errors.password}</div>
                        ) : null}
                        </div>

                        <button type="submit">Login</button>
                </form>
              </div>
            </div>
        
    );
}

export default Login;