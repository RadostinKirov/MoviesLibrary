import { useNavigate } from "react-router-dom";
import { getSearchedResults } from "../../service/movie";
import MovieContext from "../../context/movieContext";
import { useContext, useState } from "react";


const SearchBar = () => {
    const { addAllMoviesInfo } = useContext(MovieContext);
    const navigate = useNavigate();
    const [searchInput, setSearchInput] = useState('')

    const onSubmitHandler = (e) => {
        e.preventDefault();
        navigate('/search');
        let data = new FormData(e.currentTarget);
        let searchedInput = data.get('searchInput');

        getSearchedResults(searchedInput)
            .then(res => {
                if (res.length == 0) {
                    addAllMoviesInfo(['empty']);
                } else {
                    addAllMoviesInfo(res);
                }
                setSearchInput('');
                console.log(res);
            })
            .catch(err => {
                console.log('Server errpr -> ', err);
            })

    }

    const onChangeHandler = (e) => {
        setSearchInput(e.currentTarget.value);

    }

    return (

        <form className="search-bar" onSubmit={onSubmitHandler}>
            <input type="text" value={searchInput} onChange={onChangeHandler} name="searchInput" placeholder="movie name...." />
            <input type="submit" className="search-btn" value="Search" />
        </form>

    )

}

export default SearchBar;