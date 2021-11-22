import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useIdentityContext } from 'react-netlify-identity';
import { Logout } from './Login/Login';
import { createBrowserHistory } from "history";



const Navigation = () => {
    const {isLoggedIn} = useIdentityContext();
    const style ={
        color: "black",
    }
    const history = createBrowserHistory();

    return (<Stack spacing={2} direction="row">
        <Button onClick={() => history.push('/TopAnime')} sx={style} variant="text">Top 50 Anime</Button>
        <Button onClick={() => history.push('/TopManga')} sx={style} variant="text">Top 50 Manga</Button>
        {isLoggedIn ? <Logout /> : null}
    </Stack>)
}


export default Navigation;
