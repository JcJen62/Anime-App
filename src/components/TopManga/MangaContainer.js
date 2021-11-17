import MangaCard from "./MangaCard";
import React, { useContext, useState } from "react";
import { Grid } from "@mui/material";
import {useAnimeContext} from '../../context/AnimeContext'
import { UserContext } from "../../context/UserProvider";
import { Navigate } from "react-router-dom";


const MangaContainer = () => {
  const context = useAnimeContext()
  const user = useContext(UserContext)
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(true)
  }

  if(!user.isAuthenticated){
    <Navigate to={'/Login'} />
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
