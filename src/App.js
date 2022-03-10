import Header from "./components/Header/Header";
import SearchPage from "./components/Search/SearchPage";
import Home from "./components/Home/Home"
import Details from "./components/Details/Details";


function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <Home />
        <SearchPage />
        <Details />
       
      </main>
    </div>
  );
}

export default App;
