import React from "react";
import ReactDOM from 'react-dom/client';

function MovieCard(props){
    return(
        <div>
            <form className='form' onSubmit={props.search}>
                <label htmlFor='query' className='label'>Movie Name</label>
                <input type='text' name='query' placeholder='FightClub' className='input' value={props.query}
                    onChange={(e) => props.x(e)} />
                <button className='button' type='sumbit'>Submit</button>
            </form>
            <div className='class-list'>
                {props.movie.filter((x) => x.poster_path).map((mov) => {
                    return (
                        <div className='card' key={mov.id}>
                            <img className='card--image'
                                alt='img here'
                                src={'//image.tmdb.org/t/p/original' + mov.poster_path}
                            />
                            <div className='card--content'>
                                <h3 className='card--title'>{mov.title}</h3>
                                <p>
                                    <small>Release Date: {mov.release_date}</small>
                                </p>
                                <p>
                                    <small>Rating: {mov.vote_average}</small>
                                </p>
                                <p className='card--desc'>
                                    {mov.overview}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default MovieCard;