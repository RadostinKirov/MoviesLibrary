import { Link } from "react-router-dom";

const Favorites = () => {

    return (
        <section className="favorites">
            <h2>Your Favorites</h2>
            <section className="movie-image">
                <Link to="/details/1234">
                    <img src="https://m.media-amazon.com/images/I/516DXKVRKKL.jpg" alt="The Pink Panther" />
                </Link>
            </section>

            <section className="movie-image">
                <Link to="/details/1234">
                    <img src="https://m.media-amazon.com/images/I/516DXKVRKKL.jpg" alt="The Pink Panther" />
                </Link>
            </section>

            <section className="movie-image">
                <Link to="/details/1234">
                    <img src="https://m.media-amazon.com/images/I/516DXKVRKKL.jpg" alt="The Pink Panther" />
                </Link>
            </section>

       
        </section>
    )

}

export default Favorites;