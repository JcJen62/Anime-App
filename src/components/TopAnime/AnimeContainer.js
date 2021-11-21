import AnimeCard from "./AnimeCard";
import { Grid } from "@mui/material";
import AnimeDetailsModal from "../Details/AnimeDetails";
import { useIdentityContext } from 'react-netlify-identity';
import {useAnimeContext} from '../../context/AnimeContext'
import { Redirect } from "react-router-dom";
import React, { useState } from "react";


const AnimeContainer = () => {
  const {isLoggedIn} = useIdentityContext();
  const context = useAnimeContext()
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => setOpen(false)
  
  if (isLoggedIn) {
    return <Redirect to={'/Login'} />;
  }

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
