import { useEffect, useState } from "react";
import "./Review.css";
import { useParams } from "react-router";
import ReactStars from "react-rating-stars-component";
import React from "react";
import { addRating } from "../../service/movie";


const Review = () => {

    const { id: movieId } = useParams();
    const [inputComment, setInputComment] = useState('');

    let timeout = null;


    const ratingChanged = (newRating) => {
        console.log(movieId, newRating);
        addRating({ id: movieId, rating: newRating })
            .then((res) =>
                console.log('rating set -> ', res)
            ).catch(err => console.log(err))
    };


    const addComment = (inputComment) => {
        console.log('fetch request to add the comment!')
    }

    const onCommentChange = (e) => {
        setInputComment(e.currentTarget.value);
    }

    useEffect(() => {
        const delayFn = setTimeout(() => {
            addComment(inputComment);
        }, 1000);
        return () => clearTimeout(delayFn);
    }, [inputComment])

    return (

        <div className="review">

            <h2>Your Review</h2>
            <div className="rating-stars">
                <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    activeColor="#ffd700"
                />

            </div>
            <textarea name="" onChange={onCommentChange} value={inputComment} id="" cols="80" rows="10" placeholder="Your private notes and comments about the movie..."></textarea>
        </div>
    )

}

export default Review;