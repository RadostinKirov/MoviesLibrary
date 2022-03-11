import MovieCard from "../SharedComponents/MovieCard";
import SearchBar from "../SharedComponents/SearchBar";
import MovieContext from "../../context/movieContext";
import { useContext, useEffect } from "react";

const SearchPage = () => {
 const  { allMovies, addAllMoviesInfo } = useContext(MovieContext);
  console.log(allMovies);

  useEffect(() => {
    addAllMoviesInfo([]);
  }, [])


  return (
    <section className="search-page">
      <h2>Search</h2>
      <SearchBar />
      <div className="movies-list">
        {
          allMovies.length > 0
            ? allMovies.map(x => <MovieCard key={x.show.id} movie={x.show} />)
            : <h4 className='no-movies-found'>No movies found!</h4>
        }


      </div>
    </section>

  )
}

export default SearchPage;