import {useEffect, useState} from 'react';
import CharacterCard from './CharacterCard'

function Characters(){

  const [character, setCharacter] = useState([])

  useEffect( () => {
    fetch("/characters")
    .then((resp)=>resp.json())
    .then((data)=>setCharacter(data))
  }, [] )



  return (
    <div>
      <div className="CharactersHeaderDiv">
        <h1>All Characters</h1>
      </div>
      <div className="Characters">
      </div>
    </div>
  )
}

export default Characters;