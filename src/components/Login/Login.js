import { useIdentityContext } from 'react-netlify-identity-gotrue';
import React from "react";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useHistory } from 'react-router-dom';
import { Typography } from '@mui/material';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useAnimeContext } from '../../context/AnimeContext';

export function Login() {
    const isDev = useAnimeContext();
    const history = useHistory();
    const identity = useIdentityContext();
    const style = {
        color: "black",
        border: "1px solid black",
        margin: "0.5rem",
        maxWidth: "8rem"
    }

    const handleDev = () => {
        isDev.handleDev(true)
    }


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
                    email: 'test@example.com',
                    password: 'Password',
                }}
                validationSchema={Yup.object().shape({
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
                        await identity.login({
                            email: value.email,
                            password: value.password
                        }).then(() => {
                            console.log('Successfully submitted!')
                            history.push('/')
                        })
                    } catch (err) {
                        console.error(err)
                        setStatus({ success: false })
                        setErrors({ submit: err.message })
                        setSubmitting(false)
                    } finally {
                        history.push('/')
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
                    <form noValidate onSubmit={handleSubmit}>
                        <div>
                            <TextField
                                error={Boolean(touched.email && errors.email)}
                                fullWidth
                                helperText={touched.email && errors.email}
                                label="Email Address"
                                margin="normal"
                                name="email"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                type="email"
                                variant="outlined"
                                value={values.email}
                                className="inputLogin"
                            />
                            <TextField
                                error={Boolean(touched.password && errors.password)}
                                fullWidth
                                helperText={touched.password && errors.password}
                                label="Password"
                                margin="normal"
                                name="password"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                type="password"
                                variant="outlined"
                                value={values.password}
                                className="inputLogin"
                            />
                        </div>
                        <div >
                            <Button disabled={isSubmitting} type="submit" sx={style} variant="outlined">Login</Button>

                            <Typography variant='p'>Need to Sign Up?</Typography>
                            <Button onClick={() => history.push('/SignUp')} sx={style}>Sign Up Here</Button>
                        </div>

                    </form>
                )}
            </Formik>
            <Button onClick={() => handleDev()} sx={style} variant="outlined">Dev Login</Button>
        </Box>
    );
}

