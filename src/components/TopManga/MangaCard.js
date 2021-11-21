import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import {useState} from "react"
import { Typography } from "@mui/material"
import { Grid } from "@mui/material"
import { Button } from '@mui/material';

const MangaCard = (props) => {
    const [added, setAdded] = useState(false)
    const {anime} = props

    const handleFave = (bool) => {
        setAdded(bool)
    }

    return (<Grid className="itemFlex" item xs={4} key={anime.mal_id}>
        <img src={anime.image_url} alt="Anime Poster" />
        <div className="buttonStuff">
            <Typography variant="h6">{anime.title}</Typography>
            <div className="itemFlex">
                <Button onClick={() => handleFave(!added)}>
                {added ? <PlaylistAddCheckIcon sx={{
                    fontSize: 36,
                    color: "black",
                    }} />: <PlaylistAddIcon sx={{
                        fontSize: 36,
                        color: "black",
                    }} />}</Button>
            </div>
        </div>
    </Grid>
    )
}

export default MangaCard