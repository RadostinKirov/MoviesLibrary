import MovieCard from "../SharedComponents/MovieCard";
import MovieContext from "../../context/movieContext";
import { useContext, useEffect, useState} from "react";

const Details = () => {
    const { clickedMovie: movieInfo, personalInfo, addPersonalInfo } = useContext(MovieContext);
    const [inputComment, setInputComment] = useState(personalInfo.comment);
    

    
    useEffect(() => {
       

    }, [])
    
    
    
    const onCommentChange = (e) => {
        setInputComment(e.currentTarget.value);
        addPersonalInfo(e.currentTarget.value, 'comment');
    }

    console.log('details entered');
    console.log('movieInfo -> ', movieInfo)
    return (
        <section className="details-page">
            <MovieCard movieInfo={movieInfo} />

            <h2>Your Review</h2>
            <div className="rating-stars"></div>
            <textarea name="" onChange={onCommentChange} value={inputComment} id="" cols="80" rows="10" placeholder="Your private notes and comments about the movie..."></textarea>
        </section>
    )

}

export default Details;