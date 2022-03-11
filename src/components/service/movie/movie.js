

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