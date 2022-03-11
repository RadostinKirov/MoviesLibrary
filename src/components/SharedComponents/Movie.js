
import { Link, } from "react-router-dom";


const Movie = () => {


    return (
        <section className="movie">

            <Link to="/details" className="img-container">
                <img src="https://m.media-amazon.com/images/I/516DXKVRKKL.jpg" alt="The Pink Panther" />
            </Link>
            <div className="movie-info">
                <Link to="#" className="movie-title">Movie Title (2009)</Link>
                <div>
                    <p className="genre">Drama, Thriller, Comedy</p>
                    <p className="duration">90minutes</p>
                </div>
                <p className="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et recusandae
                    beatae esse cupiditate, quae aspernatur aliquam provident similique quas. Vitae quos nihil
                    pariatur magnam perspiciatis numquam doloribus voluptate, error saepe?</p>
                <Link to="#" className="official-site">Visit official site</Link>
                <Link to="" className="add-to-favorites"> Add to Favorites</Link>



            </div>
        </section>

    )
}

export default Movie;