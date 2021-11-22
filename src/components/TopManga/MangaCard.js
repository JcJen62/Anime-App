import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import {useState} from "react"
import { Typography } from "@mui/material"
import { Grid } from "@mui/material"
import { Button } from '@mui/material';
import { useAnimeContext } from "../../context/AnimeContext";

const MangaCard = (props) => {
    const [added, setAdded] = useState(false)
    const {manga} = props
    const context = useAnimeContext()

    const handleFave = (bool) => {
        setAdded(bool)
    }

    return (<Grid className="itemFlex" item xs={4} key={manga.mal_id}>
        <img src={manga.image_url} alt="Manga Poster" />
        <div className="buttonStuff">
            <Typography variant="h6">{manga.title}</Typography>
            <div className="itemFlex">
                <Button onClick={() => handleFave(!added)}>
                {added ? <PlaylistAddCheckIcon sx={{
                    fontSize: 36,
                    color: "black",
                    }} />: <PlaylistAddIcon sx={{
                        fontSize: 36,
                        color: "black",
                    }} />}</Button>
                <Button onClick={() => context.handleId(manga.mal_id, 'manga')} sx={{
                    color: "black",
                    border: "1px solid black"
                }}
                >Learn More</Button>
            </div>
        </div>
    </Grid>
    )
}

export default MangaCard