
import { Link, } from "react-router-dom";


const MovieCard = ({ movieInfo }) => {

console.log(movieInfo)
    return (
        <section className="movie">

            <Link to={`/details/${movieInfo.id}`} className="img-container">
                <img src={movieInfo.image? movieInfo.image.original : ""} alt={movieInfo.name} />
            </Link>
            <div className="movie-info">
                <Link to="#" className="movie-title">{movieInfo.name} {movieInfo.premiered? `(${movieInfo.premiered.slice(0,4)})` : ""}</Link>
                <div>
                    <p className="genre">{movieInfo.genres.join(', ')}</p>
                    <p className="duration">{movieInfo.runtime? `${movieInfo.runtime} minutes` : ''}</p>
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

export default MovieCard;