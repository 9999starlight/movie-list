import React from 'react';
import SingleMovieBox from './SingleMovieBox';
import PropTypes from 'prop-types'
import './RenderResults.css';
class RenderResults extends React.Component {
    state = {
        movieSearchResult: this.props.movieSearchResult
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.movieSearchResult !== this.props.movieSearchResult)
            this.setState({ movieSearchResult: this.props.movieSearchResult })
    }

    render() {
        return (
            <div className="renderResult">
                {this.state.movieSearchResult.map((movie) => {
                    return <SingleMovieBox key={movie.imdbID} movie={movie} searchValue={this.props.searchValue} />
                })}
            </div>
        )
    }
}

RenderResults.propTypes = {
    movieSearchResult: PropTypes.array.isRequired
}

export default RenderResults;