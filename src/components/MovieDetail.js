import {useState, useEffect} from 'react'
import alt300 from '../images/NotFoundAlt300.png'
import MovieRating from './MovieRating'


const MovieDetail = (props) => {
    const api_key = process.env.REACT_APP_TMDB_API_KEY

    const id = props.match.params.id
    const [movie, setmovie] = useState(async () => {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=en-US`)
        const movie = await res.json()

        setmovie(movie)
        return movie
    })

    const movieRuntime = (totalminutes) => {
        const hours = Math.floor(totalminutes / 60)
        const minutes = totalminutes % 60

        return `${hours}h ${minutes}m`
    }
    
    return (
        <div className="movie-detail-page" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`}} >
            <div className="movie-detail-contents">
                <div className="movie-thumbnail">
                <img src={(movie.poster_path) ? `https://image.tmdb.org/t/p/w300/${movie.poster_path}` : alt300} alt={movie.title}/>
                </div>
                <div className="movie-info">
                    <h1 className="movie-title">{movie.title} </h1>
                    <h2 className="movie-release-date">{movie.release_date} <span>&bull;</span> <span>{movieRuntime(movie.runtime)}</span></h2>
                    <MovieRating score={movie.vote_average}/>
                    <p className="movie-overview">{movie.overview}</p>
                    <div className="movie-rating"></div>
                </div>
            </div>
            
        </div>
    )
}

export default MovieDetail
