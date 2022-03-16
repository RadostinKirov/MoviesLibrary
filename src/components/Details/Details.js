import MovieCard from "../SharedComponents/MovieCard";
import { useEffect, useState } from "react";
import { getMovieById, getReviewById } from "../../service/movie";
import { useParams } from "react-router";
import Review from "./Review";

const Details = () => {
    const [movieInfo, setMovieInfo] = useState({});
    const [movieRating, setMovieRating] = useState(undefined);
    const { id: movieId } = useParams();

    useEffect(() => {
        getMovieById(movieId)
            .then(res => {
                setMovieInfo(res);
            })
            .catch(err => {
                console.log(err);
            })

        getReviewById(movieId)
            .then(res => {
                if (res == 0) {
                    console.log('Movie was not rated up to now');
                } else {
                    console.log("Movie was already rated -> ", res);
                    setMovieRating(res);
                }
            })
            .catch(err => {
                console.log(err)
            })
    }
        , []);


    return (
        <section className="details-page">

            {
                movieInfo.id
                    ? <MovieCard movieInfo={movieInfo} />
                    : ''
            }

            <Review />

        </section>
    )

}

export default Details;