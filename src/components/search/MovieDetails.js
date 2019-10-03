import React from 'react';
// import PropTypes from 'prop-types'
import '../../App.css';
import Loader from './../layout/Loader';
import axios from 'axios'
import { Link } from 'react-router-dom';
import { db } from '../../Firebase.js'
class MovieDetails extends React.Component {
    state = {
        singleMovieDetails: [],
        loading: false,
/*         listMovie: {

        } */
    } 
    showLoader() {
        this.setState({ loading: true })
    }
  
    hideloader() {
      this.setState({ loading: false })
    } 

    componentDidMount() {
        console.log('did mount')
        this.getMovieDetails()
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.singleMovieDetails !== this.props.singleMovieDetails)
           this.setState({singleMovieDetails: this.props.singleMovieDetails})
    }
    getMovieDetails = () => {
       console.log('hello')
    this.showLoader()
        axios.get(`http://www.omdbapi.com/?i=${this.props.match.params.id}&apikey=a56835b9`)
            .then(res => {
                if (res.data.Response !== "False") {
                    this.hideloader() 
                    this.setState({ singleMovieDetails: res.data })
                } else {
                    alert('none')
                }
             }).catch(err => {
                console.log(err.message);
              })
    }
    
    // addMovie to Firebase movies collection
     addMovieToList = (e) => {
         e.preventDefault();
        db.collection('movies').add({
            comment: '',
            favorite: false,
            genre: this.state.singleMovieDetails.Genre,
            imdbLink: `https://www.imdb.com/title/${this.props.match.params.id}`,
            imdbRate:this.state.singleMovieDetails.imdbRating,
            movieId: this.state.singleMovieDetails.imdbID,
            title: this.state.singleMovieDetails.Title,
            type: this.state.singleMovieDetails.Type,
            year: this.state.singleMovieDetails.Year 
    }).then(() => {
      alert(`Added to your list`);
    }).catch((err) => {
      console.log(err.message);
    });
    }
 
    render() {
        console.log(this.state.singleMovieDetails)
        return (
      <div className="movieDeatils container">
      {(this.state.loading) ? <Loader /> : null}
        <h1>Movie Details</h1>
        <div className = "film">
      <div className = "info-poster">
      <a href={ this.state.singleMovieDetails.Poster } rel="noopener noreferrer" target = "_blank"> 
      <img src = {this.state.singleMovieDetails.Poster} alt = "film poster" className = "block" /></a>
      <div className = "singleMovie">
      <h2>{this.state.singleMovieDetails.Title}</h2>
      <h3>Year: {this.state.singleMovieDetails.Year}</h3>
      <h3>Type: {this.state.singleMovieDetails.Type}</h3>
      <h3>Genre: {this.state.singleMovieDetails.Genre}</h3>
      <h3>IMDB Rating: {this.state.singleMovieDetails.imdbRating}</h3>
 <button className = "addMovieBtn" onClick= {this.addMovieToList}>
      Add to watchlist</button>
      <Link to={"/"}>Back to search</Link>
      </div>
      </div>
      <div className = "otherDetails">
      <h4>Actors: {this.state.singleMovieDetails.Actors}</h4>
      <h4>Awards: {this.state.singleMovieDetails.Awards}</h4>
      <h4>Runtime: {this.state.singleMovieDetails.Runtime}</h4>
      <h4>Country: {this.state.singleMovieDetails.Country}</h4>
      <h5>Plot: {this.state.singleMovieDetails.Plot}</h5>
      <h2>Writer: {this.state.singleMovieDetails.Writer}</h2>
      <h2>Director: {this.state.singleMovieDetails.Director}</h2>
      </div>
      </div>
            </div>
        )
  }
}
// prop types
/* MovieDetails.propTypes = {
    movie: PropTypes.object.isRequired
} */

export default MovieDetails;