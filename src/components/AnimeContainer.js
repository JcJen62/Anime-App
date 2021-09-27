import { anime } from "../data/anime";
import AnimeCard from "./AnimeCard";
import { Grid } from "@material-ui/core";

const AnimeContainer = () => {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {anime.map((anime) => {
        return (
          <AnimeCard
            key={anime.mal_id}
            title={anime.title}
            id={anime.mal_id}
            img_url={anime.image_url}
          ></AnimeCard>
        );
      })}
    </Grid>
  );
};

export default AnimeContainer;
