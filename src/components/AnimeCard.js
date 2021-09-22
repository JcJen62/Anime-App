import { Grid, Typography } from "@material-ui/core"
import Button from '@mui/material/Button';

const AnimeCard = (props) => {
    const {title, rank, img_url, id} = props

    return (<Grid className="itemFlex" item xs={4} key={id}>
        <img src={img_url} alt="Anime Poster" />
        <div className="infoFlex">
            <Typography>{title}</Typography>
            <Button sx={{
                color: "black"
            }}
            >Learn More</Button>
        </div>
    </Grid>
    )
}

export default AnimeCard