import React from 'react';
import PropTypes from 'prop-types'
import MovieDetails from '../MovieDetails/MovieDetails'
import './SingleMovieBox.css'
// import { Link } from 'react-router-dom';

class SingleMovieBox extends React.Component {
    state = {
        on: false
    }

    toggle = () => {
        this.setState({
            on: !this.state.on
        })
    }

    render() {
        return (
            <div className="movieBoxWrapper">
                <div className="movieBox p1 grid">
                    <img src={this.props.movie.Poster} alt="film poster" className="block smallImage" />
                    <div className="movieInfo flex">
                        <p className="movieTitle">{this.props.movie.Title}</p>
                        <p className="movieYear">Year: {this.props.movie.Year}</p>
                        <p className="movieType">Type: {this.props.movie.Type}</p>
                    </div>
                    <div onClick={this.toggle} className="btnDetailsWrapper"><span>&#9660;</span></div>
                </div>
                {this.state.on && <MovieDetails {...this.props.movie.imdbID} />}
            </div>
        )
    }
}
// prop types
SingleMovieBox.propTypes = {
    movie: PropTypes.object.isRequired
}

export default SingleMovieBox;