import React, { useContext} from 'react';
import Button from '@mui/material/Button';
import { UserContext } from "../../context/UserProvider";


export default function Login() {
    const user = useContext(UserContext)

    const signInWithGoogle = () => {
        user.signInWithGoogle()
    }
    
    return (
        <Button onClick={signInWithGoogle} variant="text">Continue with Google</Button>
    );
}