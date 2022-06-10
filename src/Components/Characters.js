import {useEffect, useState} from 'react';
import CharacterCard from './CharacterCard'
import Grid from '@mui/material/Grid';

function Characters(){

  const [character, setCharacter] = useState([])

  useEffect( () => {
    fetch("/characters")
    .then((resp)=>resp.json())
    .then((data)=>setCharacter(data.data))
  }, [] )

  const renderCharacter = character.map(char => <CharacterCard char={char} key={char._id} />)



  return (
    <div className="CharactersPage">
      <div className="CharactersHeaderDiv">
        <h1>All Characters</h1>
      </div>
      
      <ul className="Characters">
        {renderCharacter}
      </ul>
      
    </div>
  )
}

export default Characters;