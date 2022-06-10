import React from 'react';


function CharaceterCard({char}){
    // return (
    //     <div className="CharacterCard">
    //         <div>
    //         <h1>{char.name}</h1>
    //         </div>
    //         <img src={char.imageUrl}></img>
    //     </div>
    // )
    return (
        <div className='CharacterCard'>
            <div className='house-card'>
                <img src={char.imageUrl}></img>
                <div className='information-container'>
                    <div className='info-div'>
                        <h2 className='title'>{char.name}</h2>
                        <p className='subtitle'>{char.tvShows}</p>
                        <div className='more-information'>
                            <p className='description'>{char.films}</p>
                        </div>
                        <button className="FavoriteBtn">Favorite</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CharaceterCard;