import alt from '../images/NotFoundAlt.png'

const Movie = ({id, movie}) => {
    return (
        <div className="movie">
            <a href={`movie-finder-react/movie/${id}`}>
                <img src={(movie.poster_path) ? `https://image.tmdb.org/t/p/w200/${movie.poster_path}` : alt} alt={movie.title}/>
            </a>
            <h3 className="movie-title"> {movie.title} </h3>
            <div className="release-date"> {movie.release_date} </div>
        </div>
    )
}

export default Movie
