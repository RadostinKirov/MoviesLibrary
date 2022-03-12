import MovieContext from "../../context/movieContext";
import { Link, useNavigate } from "react-router-dom";
import parse from 'html-react-parser';
import { useContext } from "react";

const MovieCard = ({ movieInfo }) => {
    const { addNewClickedMovie } = useContext(MovieContext);
    const navigate = useNavigate();
    console.log('test')
    console.log(movieInfo);

    const onDetailsClickHandler = (e) => {
        e.preventDefault();
        addNewClickedMovie(movieInfo);
        navigate(`/details/${movieInfo.id}`)
    }


    return (
        <section className="movie">

            <Link to={`/details/${movieInfo.id}`} onClick={onDetailsClickHandler} className="img-container">
                <img src={movieInfo.image ? movieInfo.image.original : ""} alt={movieInfo.name} />
            </Link>
            <div className="movie-info">
                <Link to="#" className="movie-title">{movieInfo.name} {movieInfo.premiered ? `(${movieInfo.premiered.slice(0, 4)})` : ""}</Link>
                <div>
                    <p className="genre">{movieInfo.genres.join(', ')}</p>
                    <p className="duration">{movieInfo.runtime ? `${movieInfo.runtime} minutes` : ''}</p>
                </div>
                <div className="description">
                    {parse(movieInfo.summary)}
                </div>
                <a href={movieInfo.url}>Visit official site</a>

                <Link to="" className="add-to-favorites"> Add to Favorites</Link>



            </div>
        </section>

    )
}

export default MovieCard;