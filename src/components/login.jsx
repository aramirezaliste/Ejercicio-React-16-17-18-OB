import React from 'react';

import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

export const Login = ({ change }) => {

    const navigate = useNavigate();
    const navigateTo = () => {
        navigate('/register')
    }

    const initialCredentials = {
        email: '',
        password: ''
    }

    const loginSchema = Yup.object().shape(
        {
            email: Yup.string()
                .email('Invalid email format')
                .required('Email is required'),
            password: Yup.string()
                .required('Password is required')
        }
    )

    return (
        <div>
            <h1>Login Page</h1>
            <Formik
                initialValues={initialCredentials}
                validationSchema={loginSchema}
                onSubmit={async (values) => {
                    await new Promise((response) => setTimeout(response, 500));
                    alert(JSON.stringify(values, null, 2));
                }}

            >
                {({ errors, touched }) => (
                    <Form>
                        <Field type="email" name="email" placeholder="youremail@example.com" />
                        {errors.email && touched.email ? (
                            <div>{errors.email}</div>
                        ) : null}
                        <ErrorMessage name="email" />

                        <Field type="password" name="password" />
                        {errors.password && touched.password ? (
                            <div>{errors.password}</div>
                        ) : null}
                        <ErrorMessage name="password" />

                        <button type="submit" onClick={() => { change(true) }}>
                            Login
                        </button>
                    </Form>
                )}

            </Formik>
            <button onClick={navigateTo}>Go to Register</button>

        </div>
    )
}
