import MovieCard from "../SharedComponents/MovieCard";
import SearchBar from "../SharedComponents/SearchBar";
import MovieContext from "../../context/movieContext";
import { useContext, useEffect } from "react";

const SearchPage = () => {
  const { allMovies, error, setErrorState } = useContext(MovieContext);

  useEffect(() => {
    setTimeout(() => {
      setErrorState(false);
    }, 5000);
  }, [error])

  const mainRender = () => {

    if (allMovies.length === 0) {
      return '';
    } else if (allMovies[0] === 'empty') {
      return <h4 className='no-movies-found'>No movies found!</h4>;
    } else {
      return allMovies.map(x => <MovieCard key={x.show.id} movieInfo={x.show} />);
    }


  }

  return (
    <section className="search-page">
      <h2>Search</h2>
      <SearchBar />
      <div className="movies-list">
        {error ? <p>Errordadasdasdasdasdasasdasdasdasd</p> : ""}
        {mainRender()}
      </div>
    </section>

  )
}

export default SearchPage;