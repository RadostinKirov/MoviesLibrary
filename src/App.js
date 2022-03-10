import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header/Header";
import SearchPage from "./components/Search/SearchPage";
import Home from "./components/Home/Home"
import Details from "./components/Details/Details";


function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="search" element={<SearchPage />} />
        
          <Route path="details" element={<Details />} />

        </Routes>
      </main>
    </div>
  );
}

export default App;
