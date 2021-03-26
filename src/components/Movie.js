import alt from '../images/NotFoundAlt200.png'
import { Link } from 'react-router-dom'

const Movie = ({id, movie}) => {
    return (
        <div className="movie">
            <Link to={`/movie/${id}`}> 
                <img src={(movie.poster_path) ? `https://image.tmdb.org/t/p/w200/${movie.poster_path}` : alt} alt={movie.title}/>
            </Link>
            <h3 className="movie-title"> {movie.title} </h3>
            <div className="release-date"> {movie.release_date} </div>
        </div>
    )
}

export default Movie
