import Movie from './Movie'

const Movies = ({movies}) => {
    return (
        <div className="movies">
            {movies.length ? movies.map((movie) => (
                <Movie
                    key={movie.id}
                    movie={movie}
                    id={movie.id}
                    title= {movie.title}
                    release_date = {movie.release_date}
                    overview = {movie.overview}
                    thumb = {movie.poster_path}
                />
            )) : "There are no movies that matched your query."}
        </div>
    )
}

export default Movies
