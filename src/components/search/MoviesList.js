import React from 'react';
// import PropTypes from './node_modules/prop-types'
import '../../App.css';

class MoviesList extends React.Component {
    /*       state = {
            fetchedDatabase: []
        } */
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.fetchedDatabase !== this.props.fetchedDatabase)
            this.setState({ fetchedDatabase: this.props.fetchedDatabase })
    }

    render() {
        console.log(this.props.fetchedDatabase)
        const dbCollection = this.props.fetchedDatabase
        return (
            <div className="watchlist p1" id="mylist">
                <h1>My List</h1>
                <ul>
                    {dbCollection.map((movie) => (
                        <li key={movie.dbId}>
                            <h3>{movie.title}</h3>
                            <h3>{movie.year}</h3>
                            <h3>{movie.type}</h3>
                        </li>
                    ))}
                </ul>

            </div>
        )
    }
}
/* MoviesList.propTypes = {
    movieSearchResult: PropTypes.array.isRequired
} */
export default MoviesList;