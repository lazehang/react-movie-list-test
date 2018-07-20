export const ADD_MOVIE = 'ADD_MOVIE';
export const RESET_STATUS = 'RESET_STATUS';
export const ADD_SEARCHLIST = 'ADD_SEARCHLIST';
export const RESET_SEARCH = 'RESET_SEARCH';

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

export function addSearch(movies) {
    return {
        movies,
        type: ADD_SEARCHLIST
    }
}

export function addMovie(movies) {
    return {
        movies,
        type: ADD_MOVIE
    }
}

export function resetSearch() {
    return {
        type: RESET_SEARCH
    }
}

export function resetStatus() {
    return {
        type: RESET_STATUS
    }
}