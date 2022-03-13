import MovieCard from "../SharedComponents/MovieCard";

import { useEffect, useState } from "react";
import { getMovieById } from "../../service/movie";
import { useParams } from "react-router";

const Details = () => {
    const [movieInfo, setMovieInfo] = useState({});
    const { id: movieId } = useParams();

    const [inputComment, setInputComment] = useState('');

    useEffect(() => {
        getMovieById(movieId)
            .then(res => {
                setMovieInfo(res);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    const onCommentChange = (e) => {
        setInputComment(e.currentTarget.value);
    }

    return (
        <section className="details-page">
            {
                movieInfo.id
                    ? <MovieCard movieInfo={movieInfo} />
                    : ''
            }


            <h2>Your Review</h2>
            <div className="rating-stars"></div>
            <textarea name="" onChange={onCommentChange} value={inputComment} id="" cols="80" rows="10" placeholder="Your private notes and comments about the movie..."></textarea>
        </section>
    )

}

export default Details;