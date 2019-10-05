import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Header from './components/layout/Header'
import SearchContainer from './components/search/SearchContainer/SearchContainer'
//library.add(faChevronDown);
import MoviesList from './components/search/MoviesList/MoviesList'
//import MovieDetails from './components/search/MovieDetails'

class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path='/' component={SearchContainer}>
            </Route>
             <Route path='/movies_list/' component={MoviesList}>
            </Route>
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
