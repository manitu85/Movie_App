import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE
} from '../../helpers/config'
import { VerticleButton as ScrollUpButton } from 'react-scroll-up-button'; 
import HeroImage from '../HeroImage/HeroImage'
import SearchBar from '../SearchBar/SearchBar'
import FourColGrid from '../FourColGrid/FourColGrid'
import MovieThumb from '../MovieThumb/MovieThumb'
import LoadMoreBtn from '../LoadMore/LoadMoreBtn'
import Spinner from '../Spinner/Spinner'
import noPoster from '../../images/no_image.jpg'


class Home extends Component {
  state = {
    movies: [],
    heroImage: null,
    loading: false,
    currentPage: 0,
    totalPages: 0,
    searchTerm: ''
  }

  // ES7 static propTypes class
  static propTypes = {
    movies:  PropTypes.array,
    heroImage:  PropTypes.string,
    loading:  PropTypes.bool,
    currentPage:  PropTypes.number,
    totalPages:  PropTypes.number,
    searchTerm:  PropTypes.string
  }


  componentDidMount() {
    // Save fatched data to local storage
    if (localStorage.getItem('HomeState')) {
      const state = JSON.parse(localStorage.getItem('HomeState'))
      this.setState({ ...state })
    } else {
      this.setState({loading: true})
      const url = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
      this.getData(url);
    }  
  }


  getData = async url => {
    const { movies, heroImage, searchTerm } = this.state;

    const response = await fetch(url);
    const data = await response.json();
    
    try {
      this.setState({
        movies: [...movies, ...data.results],  // copy movie arr and add new movies
        heroImage: heroImage || data.results[5],
        loading: false,
        currentPage: data.page,
        totalPages: data.total_pages   
        }, () => {
          if (searchTerm === '') {
            localStorage.setItem('HomeState', JSON.stringify(this.state))
          }
        }) 
      }

     catch(err) {
        console.log('There is an error:', err);
     }
  }


  searchItems = searchTerm => {
    
    let url = '';
    this.setState({
      movies: [],
      loading: false,
      searchTerm
    })

    if (searchTerm === '') {
      url = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    } else {
      url = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}`;
    }

    this.getData(url)
  }


  loadMoreItems = () => {

    const { searchTerm, currentPage } = this.state;

    let url = '';
    this.setState({ loading: true })

    if (searchTerm === '') {
      url = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${currentPage + 1}`;
    } else {
      url = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}&page=${currentPage + 1}`;
    }

    this.getData(url);
  }

 
  render() {
    const { heroImage, searchTerm, loading, movies, currentPage, totalPages } = this.state;

    return (
      <div className='rmdb-home'>
        {
          heroImage 
            ? <div>
                <HeroImage 
                  image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`}
                  title={heroImage.original_title}
                  text={heroImage.overview}
                />
                <SearchBar callback={this.searchItems} />
            </div> 
            : null 
        }
        <div className='rmdb-home__grid'>
          <FourColGrid
            header={searchTerm ? 'Search result' : 'Popular movies 2019' }
            loading={loading}
          >
          {
            movies.map((el, i) => {
              return <MovieThumb 
                        key={i}
                        clickable={true}
                        image={el.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${el.poster_path}` :  noPoster }
                        movieId={el.id}
                        movieName={el.original_title}
                      />
            })
          }
          </FourColGrid>
          {loading ? <Spinner /> : null }
          {(currentPage <= totalPages && !loading)
            ? <LoadMoreBtn text='Load more' onClick={this.loadMoreItems} />
            : null
          }
        </div>
        <ScrollUpButton ShowAtPosition={600}/>
      </div>
      )
    }
  }
    
  export default Home
