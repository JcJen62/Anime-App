import { useIdentityContext } from 'react-netlify-identity';
import React from "react";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useHistory } from 'react-router-dom'

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
                autoComplete="off"
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

// check `identity.user` in a protected route
export function PrivateRoute(props) {
    const identity = useIdentityContext();
    let { as: Comp, ...rest } = props;
    return identity.user ? (
        <Comp {...rest} />
    ) : (
        <div>
            <h3>You are trying to view a protected page. Please log in</h3>
            <Login />
        </div>
    );
}

// check if user has confirmed their email
// use authedFetch API to make a request to Netlify Function with the user's JWT token,
// letting your function use the `user` object
// function Dashboard() {
//     const { isConfirmedUser, authedFetch } = useIdentityContext();
//     const [msg, setMsg] = React.useState('Click to load something');
//     const handler = () => {
//         authedFetch.get('/.netlify/functions/authEndPoint').then(setMsg);
//     };
//     return (
//         <div>
//             <h3>This is a Protected Dashboard!</h3>
//             {!isConfirmedUser && (
//                 <pre style={{ backgroundColor: 'papayawhip' }}>
//                     You have not confirmed your email. Please confirm it before you ping
//                     the API.
//                 </pre>
//             )}
//             <hr />
//             <div>
//                 <p>You can try pinging our authenticated API here.</p>
//                 <p>
//                     If you are logged in, you should be able to see a `user` info here.
//                 </p>
//                 <button onClick={handler}>Ping authenticated API</button>
//                 <pre>{JSON.stringify(msg, null, 2)}</pre>
//             </div>
//         </div>
//     );
// }

