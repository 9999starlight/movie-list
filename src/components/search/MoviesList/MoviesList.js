import React from 'react';
import { db } from './../../../Firebase.js'
import './MoviesList.css'
// import PropTypes from './node_modules/prop-types'

class MoviesList extends React.Component {
    state = {
        fetchedDatabase: []
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.fetchedDatabase !== this.state.fetchedDatabase)
            this.setState({ fetchedDatabase: this.state.fetchedDatabase })
    }

    componentDidMount() {
        this.fetchMoviesCollection()
    }

    fetchMoviesCollection = () => {
        const moviesArr = []
        db.collection('movies').onSnapshot((snapshot) => {
            snapshot.docs.forEach(doc => {
                const film = doc.data()
                film.dbId = doc.id
                moviesArr.push(film)
            })
            this.setState({
                fetchedDatabase: moviesArr
            })
        }, err => console.log(err.message));

    }

    sortByAbc = () => {
        this.state.fetchedDatabase.sort((a, b) => {
            return a.title.localeCompare(b.title);
        })
    }

    deleteItem = (e) => {
        let id = e.target.parentElement.parentElement.getAttribute('id');
        console.log(id)
        db.collection('movies').doc(id).delete();
        alert(`List item removed!`)
        console.log(this.state.fetchedDatabase)
        // moram dapozovem ponovo funkciju da bi renderovala novu listu, ne znam šta je
        //this.fetchMoviesCollection()
    }

    addToFavorites = (e) => {
        let id = e.target.parentElement.parentElement.getAttribute('id');
        db.collection('movies').doc(id).update({
            favorite: true
        })
        e.target.nextElementSibling.style.color = 'yellow'
        // ovo menja color i dodaje true u bazi. 
        //treba da se namesti da renderuje žuto ili sivo u zavisnosti od true ili false i dugme da u stvari toggle između true-false 
    }

    render() {
        console.log(this.state.fetchedDatabase)
        const dbCollection = this.state.fetchedDatabase
        return (
            <div className="watchlist p1 flex flexCenter" id="mylist">
                <h1>My List</h1>
                <div className="listContainer">
                    <div className="buttons flex flexCenter">
                        <button onClick={this.sortByAbc} className="listBtn radius">Sort A-Z</button>
                        <button className="listBtn radius">Sort by IMDB rating</button>
                    </div>
                    <ul className="list flex flexCenter">
                        {dbCollection.map((movie) => (
                            <li key={movie.dbId} id={movie.dbId} className="grid listItem">
                                <div className="titlesWrapper flex flexCenter">
                                    <h3>{movie.title}</h3>
                                    <h5>Year: {movie.year}</h5>
                                    <h5>Type: {movie.type}</h5>
                                    <h5>Genre: {movie.genre}</h5>
                                </div>
                                <img src={movie.image} alt="film poster" className="block listImage" />
                                <div className="imdbWrapper flex">
                                    <h4>Imdb Rating: {movie.imdbRate}</h4>
                                    <h5><a href={movie.imdbLink} rel="noopener noreferrer" target="_blank" className="imdbLink">IMDB Link</a></h5>
                                    <p onClick={this.deleteItem} className="delete">&#9932;</p>
                                </div>
                                <div className="favWrapper flex flexCenter">
                                    <p onClick={this.addToFavorites} className="addFav radius">Add to favorites</p>
                                    <p className="star">&#10031;</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}
/* MoviesList.propTypes = {
    movieSearchResult: PropTypes.array.isRequired
} */
export default MoviesList;