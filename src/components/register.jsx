import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

export const Register = () => {

    const navigate = useNavigate();
    const navigateTo = () => {
        navigate('/login')
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
                .required('Password is required'),
            //Validando la contraseña
            confirm: Yup.string().required('Password confirm is required').oneOf(
                [Yup.ref('password'), null],
                'Passwords must match!'
            )
        }
    )


    return (
        <div>
            <h1>Register Page</h1>
            <Formik
                initialValues={initialCredentials}
                validationSchema={loginSchema}
                onSubmit={async (values) => {
                    await new Promise((response) => setTimeout(response, 500));
                    alert(JSON.stringify(values, null, 2));
                }}

            >
                <Form>
                    <label htmlFor="email">Email</label>
                    <Field type="email" name="email" placeholder="youremail@example.com" />
                    <ErrorMessage name="email" component="div" />
                    <label htmlFor="password">Password</label>
                    <Field type="password" name="password" />
                    <ErrorMessage name="password" component="div" />
                    <label htmlFor="confirm">Confirm Password</label>
                    <Field type="password" name="confirm" />
                    <ErrorMessage name="confirm" component="div" />
                    <button type="submit">
                        Login
                    </button>
                </Form>

            </Formik>
            <button onClick={navigateTo}>Go to Login</button>
        </div>
    )
}
