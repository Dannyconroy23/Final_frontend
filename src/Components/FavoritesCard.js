function FavoritesCard({fav}) {
    return(
        <div className='FavorireCard'>
        <div>
            <img alt={fav.name}src={fav.imageUrl}></img>
            <div className='information-container'>
                <div className='info-div'>
                    <h2 className='title'>{fav.name}</h2>
                </div>
            </div>
        </div>
    </div>
    )
}

export default FavoritesCard;