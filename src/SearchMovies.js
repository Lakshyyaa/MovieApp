import React from 'react';
import ReactDOM from 'react-dom/client';
import MovieCard from './MovieCard';

function SearchMovies() {
    const [query, setQuery] = React.useState('');
    const [movie, setMovie] = React.useState([]);
    const search = async (event) => {
        event.preventDefault()
        const url = 'https://api.themoviedb.org/3/search/movie?api_key=48b8ab169d324d7844f85ad05773775a&query=' + query + '&language=en-US';
        try {
            const res = await fetch(url);
            const data = await res.json();
            setMovie(data.results)
            console.log(data.results);
        }
        catch (err) {
            console.error(err)
        }
        console.log(query);
    }
    function x(e) {
        setQuery(e.target.value)
    }
    return (
       <MovieCard search={search} query={query} x={x} movie={movie}/>
    )
}
export default SearchMovies