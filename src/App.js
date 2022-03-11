import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header/Header";
import SearchPage from "./components/Search/SearchPage";
import Home from "./components/Home/Home"
import Details from "./components/Details/Details";
import MovieContext from './context/movieContext';
import { useState } from 'react';


function App() {

  const [allMovies, setAllMovies] = useState([]);


  const addAllMoviesInfo = (info) => {
    setAllMovies(info);
  }

  return (
    <div className="container">

      <MovieContext.Provider value={{
        allMovies, addAllMoviesInfo
      }}>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="details/:123" element={<Details />} />
          </Routes>
        </main>
      </MovieContext.Provider>
    </div>
  );
}

export default App;
