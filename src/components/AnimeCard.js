import { Grid, Typography } from "@material-ui/core"
import Button from '@mui/material/Button';

const AnimeCard = (props) => {
    const {title, img_url, id} = props

    return (<Grid className="itemFlex" item xs={4} key={id}>
        <img src={img_url} alt="Anime Poster" />
        <div className="infoFlex">
            <Typography variant="h6">{title}</Typography>
            <Button sx={{
                color: "black",
                marginBottom: 3
            }}
            >Learn More</Button>
        </div>
    </Grid>
    )
}

export default AnimeCard