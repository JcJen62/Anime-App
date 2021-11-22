import React, {createContext, useContext, useState} from 'react'
import { useHistory } from 'react-router-dom'

export const AnimeContext = createContext({
  id: null
});

export const AnimeContextProvider = (props) => {
  const history = useHistory();
  const [id, setId] = useState();
  const handleId = (mal_id, type) => {
    setId(mal_id)
    if(type === 'anime'){
      history.push('/AnimeDetails')
    }else{
      history.push('/MangaDetails')
    }
  }
  

  return (
    <AnimeContext.Provider value={{
      id: id,
      handleId: handleId
    }}>
      {props.children}
    </AnimeContext.Provider>
  )

}
export const useAnimeContext = () => useContext(AnimeContext)