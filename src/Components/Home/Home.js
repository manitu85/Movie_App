import React, { Component } from 'react'
import {
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE
} from '../../config.js'
import HeroImage from '../elements/HeroImage/HeroImage';
import SearchBar from '../elements/SearchBar/SearchBar';
import FourColGrid from '../elements/FourColGrid/FourColGrid';
import MovieThumb from '../elements/MovieThumb/MovieThumb';
import LoadMoreBtn from '../elements/LoadMore/LoadMoreBtn';
import Spinner from '../elements/Spinner/Spinner';



class Home extends Component {
  state = {
    movies: [],
    HeroImage: null,
    loading: false,
    currentPage: 0,
    totalPages: 0,
    searchTerm: ''
  }

  componentDidMount() {
    this.setState({loading: true})

    const url = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    this.getData(url);
  }


  getData = url => {
    fetch(url)
      .then(result => result.json())
      .then(data => {
        this.setState({
        movies: [...this.state.movies, ...data.results],  // copy movie arr and add new movies
        HeroImage: this.state.HeroImage || data.results[0]   

      })
    })
  }


  loadMoreItems = () => {
    let url = ''; 
    this.setState({ loading: true })

    if (this.state.searchTerm === '') {
      url = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${this.state.currentPage + 1}`;
    } else {
      url = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${this.state.searchTerm}&page=${this.state.currentPage + 1}`;
    }
    this.getData(url)
  }
  

  render() {
    return (
      <div className='rmdb-home'>
        <HeroImage />
        <SearchBar />
        <FourColGrid />
        <MovieThumb />
        <LoadMoreBtn />
        <Spinner />
      </div>
    )
  }
}

export default Home
