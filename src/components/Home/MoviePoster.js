import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import MovieContext from "../../context/movieContext";
import { getMovieById } from "../../service/movie";


const MoviePoster = ({ movieInfo }) => {
    const { addNewClickedMovie } = useContext(MovieContext);
    const navigate = useNavigate();


    const onDetailsClickHandler = (e) => {
        e.preventDefault();
      //  addNewClickedMovie(movieInfo);
      
        navigate(`/details/${movieInfo.id}`)
    }

    return (
        <section className="movie-image">
            <Link to={`/details/${movieInfo.id}`} onClick={onDetailsClickHandler} >
                <img src={movieInfo.image ? movieInfo.image.original : ""} alt={movieInfo.name} />
            </Link>
        </section>
    )
}

export default MoviePoster;