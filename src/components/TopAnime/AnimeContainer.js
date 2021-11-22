import AnimeCard from "./AnimeCard";
import { Grid } from "@mui/material";
import AnimeDetailsModal from "../Details/AnimeDetails";
import { useIdentityContext } from 'react-netlify-identity';
import {useAnimeContext} from '../../context/AnimeContext'
import { Redirect } from "react-router-dom";
import React, { useState, useEffect } from "react";


const AnimeContainer = () => {
  const {isLoggedIn, isConfirmedUser, authedFetch} = useIdentityContext();
  const context = useAnimeContext()
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => setOpen(false)
  
  useEffect(() => {
    authedFetch.get('/.netlify/functions/authEndPoint').then((msg) => {
      console.log(msg)
    });
  })
  
  if (isLoggedIn && isConfirmedUser) {
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
