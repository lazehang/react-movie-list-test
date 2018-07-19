import React, { Component } from 'react';
import './App.css';
import{ Route, Switch } from 'react-router-dom';
import MovieList from './components/MovieList';
import Navigation from './components/partials/Navbar';
import {store} from './redux/store';
import {Provider} from 'react-redux';

class App extends Component {
  render() {
    return ( 
      <Provider store={store}>
        <div className="App">
          <Navigation />
          <Switch>
            <Route exact={true} path="/" component={MovieList} />
            <Route path="/movie" component={MovieList} /> 
          </Switch>
        </div>
      </Provider>
    );
  }
}

export default App;
