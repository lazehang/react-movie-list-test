import React from 'react';
import { connect } from 'react-redux';
import {fetchMovies, resetStatus} from '../redux/movie/actions';
import MovieCard from './MovieCard';
import { Row } from 'reactstrap';
import ReactLoading from "react-loading";

class PureMovieList extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            total:0,
            page: 1,
            currentCount:0,
            offset:20,
            list:[],
            isFetching:false
            }
    }
    componentWillMount(){
        this.props.loadMovies(this.state.currentCount, this.state.page);        
    }

    componentDidMount() {
        this.loadInitials();

        window.addEventListener('scroll', this.loadOnScroll);
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.loadOnScroll);
    }

    componentWillReceiveProps() {
        const currentpage = parseInt(this.props.page, 10);
        this.setState({
            page: currentpage + 1,
            currentCount: this.props.movies.length,
            isFetching: false
        })
    }

    loadInitials() {
        let page = this.state.page;
        const movieCount = this.props.movies.length;
        this.setState({
            list: this.props.movies,
            page: page+1,
            currentCount: movieCount,
            total: 54,
            isFetching: false
        })
    }

    loadOnScroll = (e) =>{
        //If all the content loaded
        if(this.state.currentCount === this.state.total || this.props.isSearchShown) return;

        //Get div at the bottom of the content
        var el = document.getElementById('content-end');

        var rect = el.getBoundingClientRect();
        var isAtEnd = (
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
        //User at the end of content. load more content
        if(isAtEnd){
            if(!this.state.isFetching) {
                this.setState({isFetching:true});
                this.props.loadMovies(this.state.currentCount, this.state.page);

                if(!this.props.isLoading) {
                    this.setState({isFetching:false});
                }                
            }
        }
    }
    
    render() {
        let movies = this.props.movies;
        if (this.props.isSearching || this.props.isSearchShown) {
            if (this.props.searchResults.length > 0) {
                movies = this.props.searchResults;
                console.log(movies.length)
            }else{
                movies = [];   
            }
        }
        return (
            <div className="container pt-5 mt-8">
                <Row className="row">
                { this.props.isSearching ? (<small className="mb-2 mx-auto">{movies.length}  results were found.</small>) : null }
                        <hr/>
                    {
                        <div>

                            { 
                                movies.map((movie, i) => (
                                    <MovieCard key={i} movieProp={movie} />
                                ))
                            }
                            { /* Start load more content when this div is visible*/
                                (!this.props.isSearchShown && this.state.currentCount !== this.state.total)?
                                <div id="content-end" className="h-1">
                                    <ReactLoading type="bars" color="#fff" className="mx-auto" width="37px" />
                                </div>: null
                            }
                        </div>
                    }
                </Row>
            </div>
        )
    }
}

const MovieList = connect((rootState) => ({
    movies: rootState.movie.movies,
    total: rootState.movie.total,
    isLoading: rootState.movie.isLoading,
    page: rootState.movie.page,
    searchResults: rootState.movie.search,
    isSearching: rootState.movie.isSearching,
    isSearchShown: rootState.movie.isSearchShown
}), (dispatch) => ({
    loadMovies: (count, page) => {dispatch(fetchMovies(count, page))},
    resetStatus: () => {dispatch(resetStatus())}
}))(PureMovieList);

export default MovieList; 