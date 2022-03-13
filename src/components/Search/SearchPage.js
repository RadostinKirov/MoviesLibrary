import MovieCard from "../SharedComponents/MovieCard";
import SearchBar from "../SharedComponents/SearchBar";
import MovieContext from "../../context/movieContext";
import { useContext, useEffect } from "react";
import "./SearchPage.css";


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
      <div className="title">
        <h2>Search</h2>
        {error ? <p className="error">Connection / Server error</p> : ""}
      </div>
      <SearchBar />
      <div className="movies-list">
        {mainRender()}
      </div>
    </section>

  )
}

export default SearchPage;