import MovieContext from "../../context/movieContext";
import { Link, useNavigate } from "react-router-dom";
import parse from 'html-react-parser';
import { useContext, useEffect, useState } from "react";

const MovieCard = ({ movieInfo }) => {
    const { addNewClickedMovie, changeFavorites, favorites } = useContext(MovieContext);
    const navigate = useNavigate();
    const [inFavorites, setInFavorites] = useState(false);

    console.log('test')
    console.log(movieInfo);

    useEffect(() => {

        const currentFavorites = favorites.map(x => x.id);
        if (!currentFavorites.includes(movieInfo.id)) {

            setInFavorites(false);
        } else {

            setInFavorites(true);
        }

    }, [])



    const onDetailsClickHandler = (e) => {
        e.preventDefault();
        addNewClickedMovie(movieInfo);
        navigate(`/details/${movieInfo.id}`)
    }

    const onClickFavoritesHandler = (e) => {
        e.preventDefault();
        console.log('favorites clicked');
        const currentFavorites = favorites.map(x => x.id);
        if (!currentFavorites.includes(movieInfo.id)) {
            changeFavorites(movieInfo, 'add');
            setInFavorites(true);
        } else {
            const index = currentFavorites.indexOf(movieInfo.id);
            changeFavorites(index, 'remove');
            setInFavorites(false);
        }
    }

    const inFavoritesCheck = () => {
        if (inFavorites) {
            return 'remove-from-favorites';
        } else {
            return 'add-to-favorites';
        }
    }

    return (
        <section className="movie">

            <Link to={`/details/${movieInfo.id}`} onClick={onDetailsClickHandler} className="img-container">
                <img src={movieInfo.image ? movieInfo.image.original : ""} alt={movieInfo.name} />
            </Link>
            <div className="movie-info">
                <Link to="" onClick={onDetailsClickHandler} className="movie-title">{movieInfo.name} {movieInfo.premiered ? `(${movieInfo.premiered.slice(0, 4)})` : ""}</Link>
                <div>
                    <p className="genre">{movieInfo.genres.join(', ')}</p>
                    <p className="duration">{movieInfo.runtime ? `${movieInfo.runtime} minutes` : ''}</p>
                </div>
                <div className="description">
                    {parse(movieInfo.summary)}
                </div>
                <a href={movieInfo.url}>Visit official site</a>

                <Link to="" onClick={onClickFavoritesHandler} className={inFavoritesCheck()} > Add to Favorites</Link>



            </div>
        </section>

    )
}

export default MovieCard;