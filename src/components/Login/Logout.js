import { useIdentityContext } from 'react-netlify-identity-gotrue';
import React from "react";
import Button from '@mui/material/Button';

export function Logout() {
    const style = {
        color: "white",
    }
    const identity = useIdentityContext();
    return <Button sx={style} onClick={identity.logout}>Logout</Button>;
}