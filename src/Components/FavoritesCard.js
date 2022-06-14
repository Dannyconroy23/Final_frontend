function FavoritesCard({fav}) {
    return(
        <div className='FavorireCard'>
        <div>
            <img alt={fav.name}src={fav.imageUrl}></img>
            <div className='information-container'>
                <div className='info-div'>
                    <h2 className='title'>{fav.name}</h2>
                    <p className='subtitle'>{fav.tvShows}</p>
                    <div className='more-information'>
                        <p className='description'>{fav.films}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default FavoritesCard;