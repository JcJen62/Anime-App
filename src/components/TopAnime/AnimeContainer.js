import AnimeCard from "./AnimeCard";
import { Grid, Typography } from "@mui/material";
import { useIdentityContext } from 'react-netlify-identity-gotrue'
import { Redirect } from "react-router-dom";
import React, { useState, useEffect } from 'react'
import axios from 'axios'


const AnimeContainer = () => {
  const identity = useIdentityContext();
  const [setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(true)
  }

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

  if (!identity.user) {
    return <Redirect to={'/Login'} />;
  }

  if (!identity.user.comfirmed_at) {
    return <Redirect to={'/Dashboard'} />;
  }

  return (
    <div>
      <Typography sx={{color: 'white', marginBottom: '1rem'}} variant="h4">The Top 50 Anime</Typography>

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
      </Grid>
    </div>
  );
};

export default AnimeContainer;
