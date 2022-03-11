
const SearchBar = () => {
 
    const onSubmitHandler = (e) => {
        e.preventDefault();
        let data = new FormData(e.currentTarget);
        let searchedInput = data.get('searchInput');
        console.log(searchedInput);
    }

    return (
        <form className="search-bar" onSubmit={onSubmitHandler}>
            <input type="text" name="searchInput" placeholder="movie name...." />
            <input type="submit" className="search-btn" value="Search" />
        </form>
    )

}

export default SearchBar;