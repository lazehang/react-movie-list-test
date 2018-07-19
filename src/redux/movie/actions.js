export const ADD_MOVIE = 'ADD_MOVIE';
export const RESET_STATUS = 'RESET_STATUS';

export function fetchMovies(count, page) {
    return (dispatch) => {
        fetch(`API/CONTENTLISTINGPAGE-PAGE${page}.json`)
            .then(function(res) {
                return res.json();
            })
            .then(function(movies) {
                if (count < movies.page["total-content-items"]) {
                    dispatch(addMovie(movies.page));
                }
                return;
            }).then(() => {
                dispatch(resetStatus());
            }).catch(function(err) {
                console.log(JSON.stringify(err));
            });

    }
}

export function addMovie(movies) {
    return {
        movies,
        type: ADD_MOVIE
    }
}

export function resetStatus() {
    return {
        type: RESET_STATUS
    }
}