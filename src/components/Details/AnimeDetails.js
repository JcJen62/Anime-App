import { Typography, Box } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from 'react'
import { useAnimeContext } from "../../context/AnimeContext";

const styles = {
  textAlign: 'center'
}


const AnimeDetails = (props) => {
  const [AnimeDetails, setAnimeDetails] = useState();
  const context = useAnimeContext()
  useEffect(() => {
    async function getAnimeDetails(id) {
      const { data } = await axios.get(`https://api.jikan.moe/v3/anime/${id}`)
      console.log(data)
      setAnimeDetails(data)
    }
    getAnimeDetails(context.id)
  }, [setAnimeDetails, AnimeDetails, context.id])

  if (!AnimeDetails) {
    return <div>Loading...</div>
  }

  return (
    <Box>
      <Typography sx={styles} variant="h6">{AnimeDetails?.title_english}</Typography>
      <div className="details">
        <img className="detailsImg" src={AnimeDetails.image_url} alt="Anime Poster" />
        <Typography sx={{margin: '2rem', textAlign: 'left'}} variant="p">{AnimeDetails?.synopsis}</Typography>
      </div>
      <Typography sx={{margin: '2rem'}} variant="p">Score: {AnimeDetails?.score} Episodes: {AnimeDetails?.episodes}</Typography>
    </Box>
  )
}

export default AnimeDetails