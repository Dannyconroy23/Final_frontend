import {useEffect, useState} from 'react'
import { useParams, useNavigate} from "react-router-dom";
import FavoritesCard from './FavoritesCard'

function Favorites({user, characters}) {
  const { id } = useParams();
  const [requestData, setRequestData] = useState(new Date());
 

  const [favorites, setFavorites] = useState([])
  

  // useEffect(() => {
  //   fetch(`/favorites/by_user/${user.id}`)
  //   .then(r => r.json())
  //   .then(data => setFavorites(data))
  //   },[])
  useEffect(()=> {
    console.log('hello')
    fetch(`/favorites/by_user/${user.id}`)
    .then(r => r.json())
    .then(data => setFavorites(data))
    

  },[])

    const renderFavorites = favorites.map(fav => <FavoritesCard fav={fav} key={fav.id} characters={characters} setFavorites={setFavorites} favorites={favorites} user={user} />)

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