import React from 'react'
import './SearchInput.css'

class SearchInput extends React.Component {
    state = {
        searchValue: ''
    }
    onChange = (e) => this.setState({ searchValue: e.target.value })
    onSubmit = (e) => {
        e.preventDefault()
        this.props.getMovies(this.state.searchValue)
    }
    render() {
        return (
            <div className="searchBox flex flexCenter p1" >
                <div className="search" >
                    <h1 className="mb1">Search for movies or tv shows</h1>
                    <h3 className="mb1">Add movies to watchlist and mark your favorites</h3>
                    <form onSubmit={this.onSubmit} className="flexCenter">
                        <input type="text" id="search" className="radius mb1 searchArea shadow"
                            value={this.state.searchValue}
                            onChange={this.onChange}
                            autoFocus
                            placeholder="Enter title or keyword" />
                        <input type="submit"
                            value="Search"
                            className="btn btnSearch"
                        />
                    </form>
                </div >
            </div>
        )
    }
}

export default SearchInput;