import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header/Header";
import SearchPage from "./components/Search/SearchPage";
import Home from "./components/Home/Home"
import Details from "./components/Details/Details";
import MovieContext from './context/movieContext';
import { useState } from 'react';


function App() {
  const [allMovies, setAllMovies] = useState([]);
  const [favorites, setToFavorites] = useState([]);
  const [error, setEror] = useState(false);

  const addAllMoviesInfo = (info) => {

    setAllMovies(info)
  }

  const changeFavorites = (info, change) => {
    let tempFavoritesArray = [];
    tempFavoritesArray = favorites;

    if (change === 'add') {
      tempFavoritesArray.push(info);
      setToFavorites(tempFavoritesArray);

      console.log(favorites)
    } else {
      const index = info;
      console.log('index for splice -> ', index)
      tempFavoritesArray.splice(index, 1);
      setToFavorites(tempFavoritesArray);
    }
  }

  const setErrorState = (state) => {
    setEror(state)
  }


  return (
    <div className="container">

      <MovieContext.Provider value={{
        allMovies, addAllMoviesInfo,
        favorites, changeFavorites,
        error, setErrorState
      }}>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="details/:id" element={<Details />} />
          </Routes>
        </main>
      </MovieContext.Provider>
    </div>
  );
}

export default App;
