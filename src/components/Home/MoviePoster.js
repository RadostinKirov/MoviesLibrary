import { Link } from "react-router-dom";

const MoviePoster = ({ movieInfo }) => {
console.log('inMoviePoster');
console.log("MovieInfo in Poster -> ", movieInfo);
    return (
        <section className="movie-image">
            <Link to={`/details/${movieInfo.id}`}>
                <img src={movieInfo.image ? movieInfo.image.original : ""} alt={movieInfo.name} />
            </Link>
        </section>
    )
}

export default MoviePoster;