import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getSearchedResults } from "../service/movie/movie";



const SearchBar = () => {
    const navigate = useNavigate();


    const onSubmitHandler = (e) => {
        e.preventDefault();
        navigate('/search');
        let data = new FormData(e.currentTarget);
        let searchedInput = data.get('searchInput');

        getSearchedResults(searchedInput)
            .then(res => {
                console.log('results from search bar -> ', res);
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