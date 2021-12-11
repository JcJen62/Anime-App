import { useIdentityContext } from 'react-netlify-identity';
import React from "react";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useHistory } from 'react-router-dom';
import { Typography } from '@mui/material';
import { Formik } from 'formik'
import * as Yup from 'yup'

export function Login() {
    const [msg, setMsg] = React.useState('');
    const history = useHistory();
    const { loginUser } = useIdentityContext();
    const style = {
        color: "black",
        border: "1px solid black",
        margin: "0.5rem",
        maxWidth: "8rem"
    }
    

    return (
        <>
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
            await loginUser(value.email, value.password)
            .then(user => {
                console.log('Success! Signed up', user);
                history.push('/');
            })
            .catch(err => console.error(err) || setMsg('Error: ' + err.message));
        
    
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
            <Box
                sx={{
                    margin: '0 auto',
                    width: 400,
                    backgroundColor: 'white',
                    border: '1px solid #000',
                    p: 4,
                    borderRadius: '5px'
                }}
                noValidate
                autoComplete="on"
            >
                <div>
                    <TextField
                        sx={{
                            margin: '0.8rem'
                        }}
                        className="inputLogin"
                        defaultValue="Email"
                        error={Boolean(touched.email && errors.email)}
                        helperText={touched.email && errors.email}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.email}
                        name="email"
                        type="email"
                    />
                    <TextField
                        sx={{
                            margin: '0.8rem'
                        }}
                        className="inputLogin"
                        defaultValue="Password"
                        error={Boolean(touched.password && errors.password)}
                        helperText={touched.password && errors.password}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.password}
                        name="password"
                        type="password"
                    />
                </div>
                <div >
                <Button disabled={isSubmitting} type="submit" sx={style} variant="outlined">Login</Button>
                    {msg && <pre>{msg}</pre>}

                    <Typography variant='p'>Need to Sign Up?</Typography>
                    <Button onClick={() => history.push('/SignUp')} sx={style}>Sign Up Here</Button>
                </div>

            </Box>
        </form>
        )}
        </Formik>
        </>
    );
}



export function SignUp() {
    const { signupUser } = useIdentityContext();
    const [msg, setMsg] = React.useState('');
    const style = {
        color: "black",
        border: "1px solid black",
        margin: "0.5rem",
        maxWidth: "8rem"
    }
    const history = useHistory();
    

    return (
        <>
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
            await signupUser(value.email, value.password)
            .then(user => {
                console.log('Success! Signed up', user);
                history.push('/Dashboard');
            })
            .catch(err => console.error(err) || setMsg('Error: ' + err.message));
        
    
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
            <Box
                sx={{
                    margin: '0 auto',
                    width: 400,
                    backgroundColor: 'white',
                    border: '1px solid #000',
                    p: 4,
                    borderRadius: '5px'
                }}
                noValidate
                autoComplete="on"
            >
                <div>
                    <TextField
                        sx={{
                            margin: '0.8rem'
                        }}
                        className="inputLogin"
                        defaultValue="Full Name"
                        error={Boolean(touched.userName && errors.userName)}
                        helperText={touched.userName && errors.userName}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.userName}
                        name="userName"
                        type="text"
                    />
                    <TextField
                        sx={{
                            margin: '0.8rem'
                        }}
                        className="inputLogin"
                        defaultValue="Email"
                        error={Boolean(touched.email && errors.email)}
                        helperText={touched.email && errors.email}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.email}
                        name="email"
                        type="email"
                    />
                    <TextField
                        sx={{
                            margin: '0.8rem'
                        }}
                        className="inputLogin"
                        defaultValue="Password"
                        error={Boolean(touched.password && errors.password)}
                        helperText={touched.password && errors.password}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.password}
                        name="password"
                        type="password"
                    />
                </div>
                <div >
                    <Button disabled={isSubmitting} type="submit" sx={style} variant="outlined">Sign Up </Button>
                    {msg && <pre>{msg}</pre>}
                </div>

            </Box>
        </form>
        )}
        </Formik>
        </>
    );
}

// log out user
export function Logout() {
    const style = {
        color: "white",
    }
    const { logoutUser } = useIdentityContext();
    return <Button sx={style} onClick={logoutUser}>Logout</Button>;
}

export function Dashboard() {
    return (
        <div>
            <Typography sx={{color: 'white'}} variant='h4'>Please Verify Email</Typography>
        </div>
    );
}