import MangaCard from "./MangaCard";
import { useIdentityContext } from 'react-netlify-identity';
import { Grid } from "@mui/material";
import { Redirect } from "react-router-dom";
import React, { useState, useEffect } from 'react'
import axios from 'axios'


const MangaContainer = () => {
  const {isLoggedIn, isConfirmedUser} = useIdentityContext();
  const [setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(true)
  }

  const [manga, setManga] = useState([]);

  useEffect(() => {
    const fetchManga = async () => {
      const topMangaURL = `/.netlify/functions/manga`
      try {
        const mangaRes = await axios.get(topMangaURL)
        console.log(mangaRes)
        const manga = mangaRes.data.top

        setManga(manga)
      } catch (err) {
        console.log(err)
      } finally {
        console.log('do something')
      }
    }

    fetchManga()
  }, [])

  if(!isLoggedIn && !isConfirmedUser){
    return <Redirect to={'/'} />
  }

  return (
    <Grid
      container
      sx={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {manga.map((manga) => {
        return (
          <MangaCard
            key={manga.mal_id}
            manga={manga}
            handleOpen={handleOpen}
          ></MangaCard>
        );
      })}
    </Grid>
  );
};

export default MangaContainer;
