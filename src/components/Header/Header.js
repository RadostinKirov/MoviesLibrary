import SearchBar from "../SharedComponents/SearchBar";
import { Link } from "react-router-dom";

const Header = () => {

    return (
        <header>
            <nav>
                <Link to="/">
                    <div className="my-collection">
                        My Movie Collection
                    </div>
                </Link>
                <SearchBar />
            </nav>
        </header>
    )

}

export default Header;