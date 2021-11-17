import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { UserContext } from "../context/UserProvider";
import React, { useContext, useState } from "react";



const Navigation = () => {
    const user = useContext(UserContext)
    const logOut = () => {
        user.logout()
    }

    return (<Stack spacing={2} direction="row">
        <Button variant="text">Top 50 Anime</Button>
        <Button variant="text">Top 50 Manga</Button>
        <Button variant="text">Home</Button>
        <Button onClick={logOut} variant="text">Logout</Button>
    </Stack>)
}


export default Navigation;
