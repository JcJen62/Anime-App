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
            title={anime.title}
            rank={anime.rank}
            id={anime.mal_id}
            img_url={anime.image_url}
          ></AnimeCard>
        );
      })}
    </Grid>
  );
};

export default AnimeContainer;
