import React from 'react';
import RenderResults from './RenderResults';
import SearchInput from './SearchInput';
import MoviesList from './MoviesList'
import Loader from './../layout/Loader';
// import PropTypes from 'prop-types'
import '../../App.css';
import axios from 'axios'
import { db } from '../../Firebase.js'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

class SearchContainer extends React.Component {
  state = {
    movieSearchResult: [],
    loading: false,
    dataResponse: true,
    fetchedDatabase: []
  }
  showLoader() {
    this.setState({ loading: true })
  }

  hideloader() {
    this.setState({ loading: false })
  }

  componentDidMount() {
    this.fetchMoviesCollection()
  }

  getMovies = (searchValue) => {
    this.showLoader()
    axios.get(`http://www.omdbapi.com/?s=${searchValue}&apikey=a56835b9`)
      .then(res => {
        this.hideloader()
        if (res.data.Response !== "False") {
          console.log(res.data)
          this.setState({ movieSearchResult: res.data.Search, dataResponse: true })
        } else {
          this.setState({ dataResponse: false })
        }
      }).catch(err => {
        console.log(err.message);
      })
  }
  fetchMoviesCollection = () => {
    const moviesArr = []
    db.collection('movies').onSnapshot((snapshot) => {

      snapshot.docs.forEach(doc => {
        const film = doc.data()
        film.dbId = doc.id
        moviesArr.push(film)
      })
    }, err => console.log(err.message));
    this.setState({
      fetchedDatabase: moviesArr
    })
  }

  render() {
    return (
      <div className="p1" id="startSearch">
        <SearchInput getMovies={this.getMovies} />
        {(this.state.loading) ? <Loader /> : null}
        {this.state.dataResponse ? <RenderResults movieSearchResult={this.state.movieSearchResult} searchValue={this.state.searchValue} /> : <div>Movie not found!</div>}
        <MoviesList fetchedDatabase={this.state.fetchedDatabase} />
      </div>
    )
  }
}
/* SearchContainer.propTypes = {
    movieSearchResult: PropTypes.array.isRequired
  } */
export default SearchContainer;