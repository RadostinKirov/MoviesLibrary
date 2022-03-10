import { Link } from "react-router-dom";

const Hero = () => {

    return (
        <section className="hero">
            <h1>Looking for a movie ?</h1>
            <p>If so you are on the right way! Just checkout our movie collection and you will find what you are looking
                for!</p>
            <Link to="/search">Search</Link>
        </section>
    )
}

export default Hero;