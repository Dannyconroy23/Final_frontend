import {useEffect, useState} from 'react';
import CharacterCard from './CharacterCard'

function Characters({user, characters, addToCollection}){

  const [character, setCharacter] = useState([])

  useEffect( () => {
    fetch("/characters")
    .then((resp)=>resp.json())
    .then((data)=>setCharacter(data.data))
  }, [] )

  

  

  const renderCharacter = character.map(char => <CharacterCard char={char} characters={characters} character={character} setCharacter={setCharacter} key={char._id} addToCollection={addToCollection} user={user} />)



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