import Movie from "../SharedComponents/Movie";
import SearchBar from "../SharedComponents/SearchBar";
import MovieContext from "../../context/movieContext";
import { useContext } from "react";

const SearchPage = () => {
  const { allMovies } = useContext(MovieContext);
  console.log(allMovies);

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