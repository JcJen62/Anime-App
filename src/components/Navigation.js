import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useIdentityContext } from 'react-netlify-identity';
import { Logout } from './Login/Login';



const Navigation = () => {
    const {isLoggedIn} = useIdentityContext();
    const style ={
        color: "black",
    }

    return (<Stack spacing={2} direction="row">
        <Button sx={style} variant="text">Top 50 Anime</Button>
        <Button sx={style} variant="text">Top 50 Manga</Button>
        {isLoggedIn ? <Logout /> : null}
    </Stack>)
}


export default Navigation;
