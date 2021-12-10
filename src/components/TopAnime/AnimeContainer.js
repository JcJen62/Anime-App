import AnimeCard from "./AnimeCard";
import { Grid, Typography } from "@mui/material";
import AnimeDetailsModal from "../Details/AnimeDetails";
import { useIdentityContext } from 'react-netlify-identity';
import { Redirect } from "react-router-dom";
import React, { useState, useEffect } from 'react'
import axios from 'axios'


const AnimeContainer = () => {
  const { isLoggedIn, isConfirmedUser } = useIdentityContext();
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => setOpen(false)

  const [anime, setAnime] = useState([]);

  useEffect(() => {
    const fetchAnime = async () => {
      const topAnimeURL = `/.netlify/functions/anime`
      try {
        const animeRes = await axios.get(topAnimeURL)
        console.log(animeRes)
        const anime = animeRes.data.top

        setAnime(anime)
      } catch (err) {
        console.log(err)
      } finally {
        console.log('do something')
      }
    }

    fetchAnime()
  }, [])

  if (!isLoggedIn) {
    return <Redirect to={'/'} />;
  }

  if(!isConfirmedUser){
    return <Redirect to={'/Dashboard'} />;
  }

  return (
    <div>
      <Typography variant="h4">The Top 50 Anime</Typography>
    
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
    </div>
  );
};

export default AnimeContainer;
