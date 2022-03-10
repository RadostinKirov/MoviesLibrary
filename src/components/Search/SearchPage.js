import Movie from "../SharedComponents/Movie";
import SearchBar from "../SharedComponents/SearchBar";


const SearchPage = () => {

return (
    <section className="search-page">
    <h2>Search</h2>
    <SearchBar />
    <div className="movies-list">

    <Movie />
    <Movie />

    </div>
  </section>

)
}

export default SearchPage;