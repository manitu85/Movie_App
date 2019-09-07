import React, { Component } from 'react'
import HeroImage from '../elements/HeroImage/HeroImage';
import SearchBar from '../elements/SearchBar/SearchBar';
import FourColGrid from '../elements/FourColGrid/FourColGrid';
import MovieThumb from '../elements/MovieThumb/MovieThumb';
import LoadMoreBtn from '../elements/LoadMore/LoadMoreBtn';
import Spinner from '../elements/Spinner/Spinner';
import {
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE
} from '../../config.js'

class Home extends Component {
  state = {
    
  }

  render() {
    return (
      <div class='rmdb-home'>
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
