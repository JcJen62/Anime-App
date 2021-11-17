import AnimeCard from "./AnimeCard";
import { Grid } from "@mui/material";
import AnimeDetailsModal from "../Details/AnimeDetails";
import {useAnimeContext} from '../../context/AnimeContext'
import { UserContext } from  "../../context/UserProvider";
import { Navigate } from "react-router-dom";
import React, { useContext, useState } from "react";


const AnimeContainer = () => {
  const user = useContext(UserContext);
  const [redirect, setredirect] = useState(null);
  const context = useAnimeContext()
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => setOpen(false)
  
  if (redirect) {
    return <Navigate to={'/Login'} />;
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
