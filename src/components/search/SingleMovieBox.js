import React from 'react';
import PropTypes from 'prop-types'
import '../../App.css';
import { Link } from 'react-router-dom';
class SingleMovieBox extends React.Component {

    render() {
        return (
            <div className="movieBox p1">
                <h3>{this.props.movie.Title}</h3>
                <p>{this.props.movie.Year}</p>
                <Link to={'/movie_details/' + this.props.movie.imdbID}>
            More Details
          </Link>
            </div>
        )
  }
}
// prop types
SingleMovieBox.propTypes = {
    movie: PropTypes.object.isRequired
}

export default SingleMovieBox;