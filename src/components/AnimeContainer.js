import { anime } from "../data/anime";
import AnimeCard from "./AnimeCard";
import { useState } from "react";
import { Grid } from "@material-ui/core";
import AnimeDetailsModal from "./AnimeDetails";


const AnimeContainer = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => setOpen(false)

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
            anime={anime}
            handleOpen={handleOpen}
          ></AnimeCard>
        );
      })}
      <AnimeDetailsModal
        open={open}
        onClose={handleClose}
      />
    </Grid>
  );
};

export default AnimeContainer;
