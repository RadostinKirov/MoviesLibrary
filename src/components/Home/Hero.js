import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import MovieContext from "../../context/movieContext";
const Hero = () => {
    const { addAllMoviesInfo } = useContext(MovieContext);
    const navigate = useNavigate();

    const onSearchBtnClick = (e) => {
        e.preventDefault();
        addAllMoviesInfo([]);
        navigate('/search');
    }

    return (
        <section className="hero">
            <h1>Looking for a movie ?</h1>
            <p>If so you are on the right way! Just checkout our movie collection and you will find what you are looking
                for!</p>
            <Link to="/search" onClick={onSearchBtnClick}>Search</Link>
        </section>
    )
}

export default Hero;