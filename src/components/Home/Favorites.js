import { useContext } from "react";
import { Link } from "react-router-dom";
import MovieContext from "../../context/movieContext";
import MoviePoster from "./MoviePoster";

const Favorites = () => {
const {favorites} = useContext(MovieContext);

    return (
        <section className="favorites">
            <h2>Your Favorites</h2>
                 
            {
                favorites.length > 0
                ? favorites.map(x=> <MoviePoster key={x.id}  movieInfo={x}/> )
                : <h1>No Movies in Favorites yet</h1>
            }
       
        </section>
    )

}

export default Favorites;