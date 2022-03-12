import MovieCard from "../SharedComponents/MovieCard";
import MovieContext from "../../context/movieContext";
import { useContext } from "react";

const Details = () => {
    const { clickedMovie: movieInfo } = useContext(MovieContext);

    console.log('details entered');
    console.log('movieInfo -> ', movieInfo)
    return (
        <section className="details-page">
            <MovieCard movieInfo={movieInfo} />

            <h2>Your Review</h2>
            <div className="rating-stars"></div>
            <textarea name="" id="" cols="80" rows="10" placeholder="Your private notes and comments about the movie..."></textarea>
        </section>
    )

}

export default Details;