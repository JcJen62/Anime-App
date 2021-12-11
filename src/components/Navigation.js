import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useIdentityContext } from 'react-netlify-identity';
import { Logout } from './Login/Login';
import { useHistory } from 'react-router-dom'



const Navigation = () => {
    const {isLoggedIn} = useIdentityContext();
    const style ={
        color: "white",
    }
    const history = useHistory();
    const handleNav = (path) => {
        history.push(path)
    }

    return (<Stack spacing={2} direction="row">
        <Button onClick={() => handleNav('/')} sx={style} variant="text">Top 50 Anime</Button>
        <Button onClick={() => handleNav('/TopManga')} sx={style} variant="text">Top 50 Manga</Button>
        {isLoggedIn ? <Logout /> : null}
    </Stack>)
}


export default Navigation;
