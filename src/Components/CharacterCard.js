import React, {useState} from 'react';








function CharacterCard({char, setCharacter, user}){
    // const [character, setCharacter] = useState({})
    const [favorite, setFavorite] = useState([])


    const addToFavorites = (newFavorite) => {
        setFavorite(fav => [...fav, newFavorite])
      }
    
   const handleFavorite = () => {
        fetch('/favorites', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                character_id: char._id,
                user_id: user.id,
                name: char.name,
                imageUr: char.imageUrl,
                char
               
            })
        })
        .then(r => r.json())
        .then(data => setFavorite(data))
    }

    return (
        <div className='CharacterCard'>
            <div className='house-card'>
                <img alt={char.name}src={char.imageUrl}></img>
                <div className='information-container'>
                    <div className='info-div'>
                        <h2 className='title'>{char.name}</h2>
                        <p className='subtitle'>{char.tvShows}</p>
                        <div className='more-information'>
                            <p className='description'>{char.films}</p>
                        </div>
                        <button className="FavoriteBtn" onClick={handleFavorite}>Favorite</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CharacterCard;