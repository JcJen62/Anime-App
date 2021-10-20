import AnimeCard from "./AnimeCard";
import { useState } from "react";
import { Grid } from "@mui/material";
import AnimeDetailsModal from "./AnimeDetails";
import {useAnimeContext} from '../context/AnimeContext'


const AnimeContainer = () => {
  const context = useAnimeContext()
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
      {context.anime.map((anime) => {
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
