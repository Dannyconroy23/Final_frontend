import { useParams} from "react-router-dom";

function FavoritesCard({fav, setFavorites, favorites}) {
    

   

    const handleDelete = () => {
        fetch(`/favorites`, {
            method: 'DELETE',
            
           
        })
        .then(r => r.json())
        .then(data => setFavorites(data))
    }
    
    
    return(
        <div className='FavoritesCard'>
        <div>
            <h1>{fav.character_id}</h1>
            <img alt={fav.name}src={fav.imageUrl}></img>
            <div className='information-container'>
                <div className='info-div'>
                    <h2 className='title'>{fav.name}</h2>
                </div>
                <button onClick={handleDelete}>Delete</button>
            </div>
        </div>
    </div>
    )
}

export default FavoritesCard;