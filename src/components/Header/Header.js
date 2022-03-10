import SearchBar from "../SharedComponents/SearchBar";

const Header = () => {

    return (
        <header>
            <nav>
                <div className="my-collection">My Movie Collection</div>
                <SearchBar />
            </nav>
        </header>
    )

}

export default Header;