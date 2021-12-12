import { useIdentityContext } from 'react-netlify-identity-gotrue';
import React from "react";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useHistory } from 'react-router-dom';
import { Typography } from '@mui/material';
import { Formik } from 'formik'
import * as Yup from 'yup'

export function Login() {
    const history = useHistory();
    const identity = useIdentityContext();
    const style = {
        color: "black",
        border: "1px solid black",
        margin: "0.5rem",
        maxWidth: "8rem"
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
                    email: 'Test@gmail.com',
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
                        })
                            .then(user => {
                                console.log('Success! logged In', user);
                                history.push('/');
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
        </Box>
    );
}



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

// log out user
export function Logout() {
    const style = {
        color: "white",
    }
    const identity = useIdentityContext();
    return <Button sx={style} onClick={identity.logout}>Logout</Button>;
}

export function Dashboard() {
    return (
        <div>
            <Typography sx={{ color: 'white' }} variant='h4'>Please Verify Email</Typography>
        </div>
    );
}