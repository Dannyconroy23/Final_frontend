import {useEffect, useState} from 'react'
import { useParams} from "react-router-dom";
import FavoritesCard from './FavoritesCard'

function Favorites({user, characters}) {
  const { id } = useParams();

  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    fetch(`/favorites/by_user/${user.id}`)
    .then(r => r.json())
    .then(data => setFavorites(data))
    },[id])

    const renderFavorites = favorites.map(fav => <FavoritesCard fav={fav} key={fav.id} characters={characters} setFavorites={setFavorites} user={user} />)

  return (
    <div>
      <div className="FavoritesHeaderDiv">
        <h1>Favorites</h1>
      </div>
      <div>
        {renderFavorites}
      </div>
    </div>
  )
}

export default Favorites;