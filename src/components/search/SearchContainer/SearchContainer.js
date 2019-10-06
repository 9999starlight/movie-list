import React from 'react'
import RenderResults from '../RenderResults/RenderResults'
import SearchInput from '../SearchInput/SearchInput'
import Loader from '../../layout/Loader'
import axios from 'axios'

class SearchContainer extends React.Component {
  state = {
    movieSearchResult: [],
    loading: false,
    dataResponse: true
  }
  showLoader() {
    this.setState({ loading: true })
  }

  hideloader() {
    this.setState({ loading: false })
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

  render() {
    return (
      <div className="p1" id="startSearch">
        <SearchInput getMovies={this.getMovies} />
        {(this.state.loading) ? <Loader /> : null}
        {this.state.dataResponse ? <RenderResults movieSearchResult={this.state.movieSearchResult} searchValue={this.state.searchValue} /> : <div>Movie not found!</div>}
      </div>
    )
  }
}

export default SearchContainer;