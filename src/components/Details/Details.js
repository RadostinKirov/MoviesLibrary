import MovieCard from "../SharedComponents/MovieCard";
import { useEffect, useState } from "react";
import { getMovieById } from "../../service/movie";
import { useParams } from "react-router";
import Review from "./Review";

const Details = () => {
    const [movieInfo, setMovieInfo] = useState({});
    const { id: movieId } = useParams();

    useEffect(() => {
        getMovieById(movieId)
            .then(res => {
                setMovieInfo(res);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);


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