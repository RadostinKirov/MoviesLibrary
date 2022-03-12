
import { Link } from "react-router-dom";
import parse from 'html-react-parser';

const MovieCard = ({ movieInfo }) => {
    

    console.log(movieInfo)
    return (
        <section className="movie">

            <Link to={`/details/${movieInfo.id}`} className="img-container">
                <img src={movieInfo.image ? movieInfo.image.original : ""} alt={movieInfo.name} />
            </Link>
            <div className="movie-info">
                <Link to="#" className="movie-title">{movieInfo.name} {movieInfo.premiered ? `(${movieInfo.premiered.slice(0, 4)})` : ""}</Link>
                <div>
                    <p className="genre">{movieInfo.genres.join(', ')}</p>
                    <p className="duration">{movieInfo.runtime ? `${movieInfo.runtime} minutes` : ''}</p>
                </div>
                <div>
                    {parse(movieInfo.summary)}
                </div>
                <a href={movieInfo.url}>Visit official site</a>

                <Link to="" className="add-to-favorites"> Add to Favorites</Link>



            </div>
        </section>

    )
}

export default MovieCard;