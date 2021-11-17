import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { UserContext } from "../context/UserProvider";
import React, { useContext } from "react";



const Navigation = () => {
    const user = useContext(UserContext)
    const logOut = () => {
        user.logout()
    }
    const style ={
        color: "black",
    }
    const styleLog ={
        color: "black",
    }

    return (<Stack spacing={2} direction="row">
        <Button sx={style} variant="text">Top 50 Anime</Button>
        <Button sx={style} variant="text">Top 50 Manga</Button>
        <Button sx={styleLog} onClick={logOut} variant="text">Logout</Button>
    </Stack>)
}


export default Navigation;
