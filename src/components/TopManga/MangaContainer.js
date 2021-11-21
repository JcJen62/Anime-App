import MangaCard from "./MangaCard";
import React, { useState } from "react";
import { useIdentityContext } from 'react-netlify-identity';
import { Grid } from "@mui/material";
import {useAnimeContext} from '../../context/AnimeContext'
import { Redirect } from "react-router-dom";


const MangaContainer = () => {
  const {isLoggedIn} = useIdentityContext();
  const context = useAnimeContext()
  const [setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(true)
  }

  if(isLoggedIn){
    <Redirect to={'/Login'} />
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
          <MangaCard
            key={anime.mal_id}
            anime={anime}
            handleOpen={handleOpen}
          ></MangaCard>
        );
      })}
    </Grid>
  );
};

export default MangaContainer;
