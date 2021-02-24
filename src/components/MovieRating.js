
const MovieRating = ({score}) => {
    const ratingToColor = (movierating) => {
        if (movierating > 7) {
            return "#11bd72"
        } else if (movierating > 5) {
            return "#ffc800"
        } else {
            return "#d9003a"
        }
    }

    return (
        <div className="movie-rating">
            <div className="movie-score" style={{border: `5px solid ${ratingToColor(score)}`}}>
                {score && score.toFixed(1)}
            </div>
            <div className="user-score">User Score</div>
        </div>
        
    )
}

export default MovieRating
