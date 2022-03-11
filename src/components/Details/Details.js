import Movie from "../SharedComponents/Movie";

const Details = () => {

    return (
        <section className="details-page">
            <Movie />

            <h2>Your Review</h2>
            <div className="rating-stars"></div>
            <textarea name="" id="" cols="80" rows="10" placeholder="Your private notes and comments about the movie..."></textarea>
        </section>
    )

}

export default Details;