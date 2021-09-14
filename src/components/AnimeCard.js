import { Grid, Typography } from "@material-ui/core"

const AnimeCard = (props) => {
    const {title, rank, img_url, id} = props

    return (<Grid className="itemFlex" item xs={4} key={id}>
        <img src={img_url} alt="Anime Poster" />
        <div className="infoFlex">
            <Typography>{title}</Typography>
            <Typography>{rank}</Typography>
        </div>
    </Grid>
    )
}

export default AnimeCard