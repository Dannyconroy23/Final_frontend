import {useEffect, useState} from 'react';
import CharacterCard from './CharacterCard'

function Characters(){

  const [character, setCharacter] = useState([])

  useEffect( () => {
    fetch("/characters")
    .then((resp)=>resp.json())
    .then((data)=>setCharacter(data.data))
  }, [] )

  const renderCharacter = character.map(char => <CharacterCard char={char} key={char._id} />)



  return (
    <div>
      <div className="CharactersHeaderDiv">
        <h1>All Characters</h1>
      </div>
      
      <div className="Characters">
        {renderCharacter}
      </div>
      
    </div>
  )
}

export default Characters;