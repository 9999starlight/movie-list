import React from 'react';
import Loader from '../../layout/Loader';
import axios from 'axios'
//import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { db } from '../../../Firebase.js'
import './MovieDetails.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointUp } from '@fortawesome/free-solid-svg-icons'

class MovieDetails extends React.Component {
    state = {
        singleMovieDetails: [],
        loading: false
    }
    showLoader() {
        this.setState({ loading: true })
    }

    hideloader() {
        this.setState({ loading: false })
    }

    componentDidMount() {
        this.getMovieDetails()
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.singleMovieDetails !== this.props.singleMovieDetails)
            this.setState({ singleMovieDetails: this.props.singleMovieDetails })
    }

    getMovieDetails = () => {
        console.log('hello')
        this.showLoader()
        axios.get(`http://www.omdbapi.com/?i=${Object.values(this.props).join('')}&apikey=a56835b9`)
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

    // check if item already exists; addMovie to Firebase movies collection
    addMovieToList = () => {
        db.collection('movies').where('movieId', '==', this.state.singleMovieDetails.imdbID).get()
            .then(snapshot => {
                if (snapshot.docs.length) {
                    alert('You have already added that item to the list!')
                } else {
                    db.collection('movies').add({
                        favorite: false,
                        genre: this.state.singleMovieDetails.Genre,
                        imdbLink: `https://www.imdb.com/title/${Object.values(this.props).join('')}`,
                        imdbRate: this.state.singleMovieDetails.imdbRating,
                        movieId: this.state.singleMovieDetails.imdbID,
                        title: this.state.singleMovieDetails.Title,
                        type: this.state.singleMovieDetails.Type,
                        year: this.state.singleMovieDetails.Year,
                        image: this.state.singleMovieDetails.Poster
                    })
                    alert(`Added to your list`);
                }
            }).catch((err) => {
                console.log(err.message);
            });
    }

    render() {
        console.log(this.state.singleMovieDetails)
        return (
            <div className="detailsContainer radius">
                {(this.state.loading) ? <Loader /> : null}
                <div className="film">
                    <div className="info-poster radius">
                        <a href={this.state.singleMovieDetails.Poster} rel="noopener noreferrer" target="_blank">
                            <img src={this.state.singleMovieDetails.Poster} alt="film poster" className="block biggerImage" /></a>
                        <div className="singleMovie">
                            <h2>{this.state.singleMovieDetails.Title}</h2>
                            <h3>Year: {this.state.singleMovieDetails.Year}</h3>
                            <h3>Type: {this.state.singleMovieDetails.Type}</h3>
                            <h3>Genre: {this.state.singleMovieDetails.Genre}</h3>
                            <h3>IMDB Rating: {this.state.singleMovieDetails.imdbRating}</h3>
                            <button className="btn addMovieBtn radius" onClick={this.addMovieToList}>
                                Add to watchlist</button>
                            <HashLink
                                to="/#nav"
                                scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}
                                className="topLink">Back To Top &nbsp; <FontAwesomeIcon icon={faHandPointUp} className="handIcon" /></HashLink >

                        </div>
                    </div>
                    <div className="otherDetails flex">
                        <h4><strong>Actors:</strong> {this.state.singleMovieDetails.Actors}</h4>
                        <h4><strong>Awards:</strong> {this.state.singleMovieDetails.Awards}</h4>
                        <h4><strong>Runtime:</strong> {this.state.singleMovieDetails.Runtime}</h4>
                        <h4><strong>Country:</strong> {this.state.singleMovieDetails.Country}</h4>
                        <p><strong>Plot:</strong> {this.state.singleMovieDetails.Plot}</p>
                        <h4><strong>Writer:</strong> {this.state.singleMovieDetails.Writer}</h4>
                        <h3><strong>Director:</strong> {this.state.singleMovieDetails.Director}</h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieDetails;