import { useIdentityContext } from 'react-netlify-identity';
import React from "react";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useHistory } from 'react-router-dom';
import { Typography } from '@mui/material';

export function Login() {
    const { loginUser, signupUser } = useIdentityContext();
    const formRef = React.useRef();
    const [msg, setMsg] = React.useState('');
    const style = {
        color: "black",
        border: "1px solid black",
        margin: "0.5rem"
    }
    const history = useHistory();

    const login = () => {
        const email = formRef.current[0].value;
        const password = formRef.current[2].value;

        loginUser(email, password, true)
            .then(user => {
                console.log('Success! Logged in', user);
                history.push('/TopAnime');
            })
            .catch(err => console.error(err) || setMsg('Error: ' + err.message));
    }

    const signup = () => {
        const email = formRef.current[0].value;
        const password = formRef.current[2].value;

        signupUser(email, password)
            .then(user => {
                console.log('Success! Signed up', user);
                history.push('/TopAnime');
            })
            .catch(err => console.error(err) || setMsg('Error: ' + err.message));
    };

    return (
        <form
        ref={formRef}
        >
            <Box
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="on"
            >
                <div>
                    <TextField
                        defaultValue="Email"
                    />
                    <TextField
                        defaultValue="Password"
                    />

                    <Button onClick={login} sx={style} variant="outlined">Login</Button>
                    <Button onClick={signup} sx={style} variant="outlined">Sign Up </Button>
                    {msg && <pre>{msg}</pre>}
                </div>

            </Box>
        </form>
    );
}

// log out user
export function Logout() {
    const style = {
        color: "black",
    }
    const { logoutUser } = useIdentityContext();
    return <Button sx={style} onClick={logoutUser}>Logout</Button>;
}

export function Dashboard() {
    return (
      <div>
        <Typography variant='h4'>Please Verify Email</Typography>
      </div>
    );
  }