export async function getSearchedResults(data) {

    try {
        let response = await fetch(`https://api.tvmaze.com/search/shows?q=${data}`);
        let resultsData = await response.json();
        return resultsData;
    }
    catch (err) {
        throw err;
    }
}

export async function getMovieById(id) {
console.log('service entered')
    try {
        let response = await fetch(`https://api.tvmaze.com/shows/${id}`);
        let resultsData = await response.json();
        return resultsData;
    }
    catch (err) {
        throw err;
    }
}