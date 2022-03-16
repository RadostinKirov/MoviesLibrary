
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

export async function addRating(body) {

    try {
    console.log('rating body -> ', body);

        const resData = await fetch('http://localhost:3030/rating', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify(body),
        });

        const result = await resData.json();

        if (resData.ok) {
            return result;
        } else {
            throw result;
        }
    } catch (err) {
        throw ("Server error - ", err.message);

    }
}

export async function getReviewById(id){
    try {      
        console.log('in service', id)    
        let response = await fetch(`http://localhost:3030/reviewById/${id}`);
        let resultsData = await response.json();
        console.log(resultsData)
        return resultsData;
    }
    catch (err) {
        throw err;
    }
}

export async function addComment(body){
    console.log('comment body -> ', body);
    try {
        const resData = await fetch('http://localhost:3030/comment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify(body),
        });

        const result = await resData.json();

        if (resData.ok) {
            return result;
        } else {
            throw result;
        }
    } catch (err) {
        throw ("Server error - ", err.message);

    }
}