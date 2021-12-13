import { useIdentityContext } from 'react-netlify-identity-gotrue';
import React from "react";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useHistory } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';

export function SignUp() {
    const identity = useIdentityContext();
    const [msg] = React.useState('');
    const style = {
        color: "black",
        border: "1px solid black",
        margin: "0.5rem",
        maxWidth: "8rem"
    }
    const history = useHistory();


    return (
        <Box
            sx={{
                margin: '0 auto',
                width: 400,
                backgroundColor: 'white',
                border: '1px solid #000',
                p: 4,
                borderRadius: '5px'
            }}
        >
            <Formik
                initialValues={{
                    userName: 'Jon Doe',
                    email: 'Test@gmail.com',
                    password: 'Password',
                }}
                validationSchema={Yup.object().shape({
                    userName: Yup.string()
                        .min(4, 'Must be at least 4 characters')
                        .max(50, 'Must be less than 50 characters')
                        .required('User name is required'),
                    email: Yup.string()
                        .email('Must be a valid email')
                        .max(255)
                        .required('Email is required'),
                    password: Yup.string()
                        .min(8, 'Must be at least 8 characters')
                        .max(255)
                        .required('Password is required'),
                })}
                onSubmit={async (value, { setErrors, setStatus, setSubmitting }) => {
                    try {
                        setStatus({ success: true })
                        setSubmitting(false)
                        console.log(value.email)
                        await identity.signup({
                            email: value.email, password: value.password, user_metadata: {
                                full_name: value.userName
                            }
                        }).then(() => {
                            history.push('/Dashboard')
                            console.log('Successfully submitted!')
                        })


                    } catch (err) {
                        console.error(err)
                        setStatus({ success: false })
                        setErrors({ submit: err.message })
                        setSubmitting(false)
                    }
                }}
            >
                {({
                    errors,
                    values,
                    handleSubmit,
                    handleBlur,
                    handleChange,
                    isSubmitting,
                    touched,
                }) => (

                    <form
                        noValidate
                        onSubmit={handleSubmit}
                    >
                        <div>
                            <TextField
                                sx={{
                                    margin: '0.8rem'
                                }}
                                className="inputLogin"
                                error={Boolean(touched.userName && errors.userName)}
                                helperText={touched.userName && errors.userName}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.userName}
                                name="userName"
                                type="text"
                                label="User Name"
                            />
                            <TextField
                                sx={{
                                    margin: '0.8rem'
                                }}
                                className="inputLogin"
                                error={Boolean(touched.email && errors.email)}
                                helperText={touched.email && errors.email}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.email}
                                name="email"
                                type="email"
                                label="Email Address"
                            />
                            <TextField
                                sx={{
                                    margin: '0.8rem'
                                }}
                                className="inputLogin"
                                error={Boolean(touched.password && errors.password)}
                                helperText={touched.password && errors.password}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.password}
                                name="password"
                                type="password"
                                label="Password"
                            />
                        </div>
                        <div >
                            <Button disabled={isSubmitting} type="submit" sx={style} variant="outlined">Sign Up </Button>
                            {msg && <pre>{msg}</pre>}
                        </div>


                    </form>
                )
                }
            </Formik >
        </Box>
    );
}
