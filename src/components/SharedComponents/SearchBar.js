import { useNavigate } from "react-router-dom";
import { getSearchedResults } from "../../service/movie";
import MovieContext from "../../context/movieContext";
import { useContext } from "react";


const SearchBar = () => {
    const { addAllMoviesInfo } = useContext(MovieContext);
    const navigate = useNavigate();


    const onSubmitHandler = (e) => {
        e.preventDefault();
        navigate('/search');
        let data = new FormData(e.currentTarget);
        let searchedInput = data.get('searchInput');

        getSearchedResults(searchedInput)
            .then(res => {
                console.log('results from search bar -> ', res);
                addAllMoviesInfo(res);
            })
            .catch(err => {
                console.log('Server errpr -> ', err);
            })

    }

    return (

        <form className="search-bar" onSubmit={onSubmitHandler}>
            <input type="text" name="searchInput" placeholder="movie name...." />
            <input type="submit" className="search-btn" value="Search" />
        </form>

    )

}

export default SearchBar;