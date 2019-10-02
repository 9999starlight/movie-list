import React from 'react';
import PropTypes from 'prop-types'
import '../../App.css';
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
            <div className = "searchBox p1" >
                <div className="search" >
                    <form onSubmit = {this.onSubmit}>
                    <input type="text" id="search"
                        value={this.state.searchValue}
                        onChange = {this.onChange}
                        autoFocus
                            placeholder="Enter title or keyword" />
                        <input type="submit"
                            value="Search"
                            className="btn"
                        />
                        </form>
                <p> Start typing to search </p>
                </div >
                </div>
        )
    }
}
// prop types
SearchInput.propTypes = {
    getMovies: PropTypes.func.isRequired
}

export default SearchInput;