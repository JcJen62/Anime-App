import React, {createContext, useState, useEffect, useContext} from 'react'
import axios from 'axios'

const AnimeContext = createContext({
  anime: []
});

export const AnimeContextProvider = (props) => {
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

  return (
    <AnimeContext.Provider value={{
      anime
    }}>
      {props.children}
    </AnimeContext.Provider>
  )

}
export const useAnimeContext = () => useContext(AnimeContext)