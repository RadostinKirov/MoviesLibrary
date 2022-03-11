
const SearchBar = () => {

    return (
        <form className="search-bar">
            <input type="text" placeholder="Search by movie title..." />
            <input type="button" className="search-btn" value="Search"/>
        </form>
    )

}

export default SearchBar;