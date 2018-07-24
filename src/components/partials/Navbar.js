import React from 'react';
import { connect } from 'react-redux';
import {addSearch, resetSearch, startSearching} from '../../redux/movie/actions'

const navStyle = {
    'backgroundImage': 'url(/images/nav_bar.png)',
    'backgroundSize': '100% 100%'
}

class PureNavigation extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            navMenuDisplay: "hidden",
            search: ""
        }
    }

    toggle() {
        let displayClass = "";
        if (this.state.navMenuDisplay === "hidden") {
            displayClass = "block";
            this.props.startSearch()

        } else {
            displayClass = "hidden"
            this.props.resetSearch();
        }

        this.setState({
            navMenuDisplay: displayClass
        })

        
    }

    search = (e) => {
        e.preventDefault();
        const movies = this.props.movies;
        const query = this.state.search.toLowerCase();
        let searchResults = [];
        movies.map((movie) => {
            const movie_title = movie.name.toLowerCase();
            if (movie_title.search(query) !== -1) {
                searchResults.push(movie);
            }
            return searchResults;
        });

        if (searchResults.length === 0) {
            this.props.pushToSearchResult([])
        } else {
            this.props.pushToSearchResult(searchResults)
        }

    }

    cancelSearch() {
        this.props.resetSearch();
        this.toggle();
    }

    handleSearchChange(e) {
        this.setState({
            search: e.target.value
        })
    }

    render() {
        return (
            <nav className="flex items-center fixed pin-t pin-x justify-between flex-wrap pt-3 px-2" style={navStyle}>
                <div className={'items-center flex-no-shrink text-white mr-6 ' + (this.state.navMenuDisplay === "hidden" ? "block": "hidden")}>
                    <img src="/images/Back.png" className="h-5" alt="search icon" /> 
                    <span className="font-semibold text-xl tracking-tight ml-2"> Romactic Comedy</span>
                </div>
                <div className={"block lg:hidden " + (this.state.navMenuDisplay === "hidden" ? "block": "hidden")}>
                    <button className="inline-block items-center px-3 py-2 ml-2 text-lighter hover:text-white hover:border-white"
                    onClick={this.toggle.bind(this)}>
                    <img src="/images/search.png" className="h-5" alt="search icon" />
                    </button>
                </div>
                <div className={`mx-auto col-xs-12 ${this.state.navMenuDisplay === 'block' ? 'fadeInRight' : 'hidden' }`}>
                    <form className="w-full max-w-sm">
                        <div className="flex items-center py-2">
                            <button onClick={this.cancelSearch.bind(this)}
                            className="flex-no-shrink border-transparent border-4 text-white hover:text-teal-darker text-sm py-1 px-2 rounded" type="button" >
                                Cancel
                            </button>
                            <input onChange={this.handleSearchChange.bind(this)} className="appearance-none bg-transparent border-none w-full text-grey-darker mr-3 py-1 px-2 leading-tight all:w-1" type="text" placeholder="Search" value={this.state.search} aria-label="Full name" />
                            <button onClick={this.search.bind(this)} className="flex-no-shrink bg-black hover:bg-black-dark border-black text-sm border-4 text-white py-1 px-2 rounded" type="button">
                                Search
                            </button>
                            
                        </div>
                    </form>
                </div>
            </nav>
        )
    }
}

const Navigation = connect((rootState) => ({
    movies: rootState.movie.movies
}), (dispatch) => ({
    pushToSearchResult: (results) => {dispatch(addSearch(results))},
    resetSearch: () => {dispatch(resetSearch())},
    startSearch: () => {dispatch(startSearching())}
}))(PureNavigation);

export default Navigation;