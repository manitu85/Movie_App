import React, { Component } from 'react'
import {
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE
} from '../../config.js'
import HeroImage from '../elements/HeroImage/HeroImage'
import SearchBar from '../elements/SearchBar/SearchBar'
import FourColGrid from '../elements/FourColGrid/FourColGrid'
import MovieThumb from '../elements/MovieThumb/MovieThumb'
import LoadMoreBtn from '../elements/LoadMore/LoadMoreBtn'
import Spinner from '../elements/Spinner/Spinner'
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
        heroImage: this.state.heroImage || data.results[5],
        loading: false,
        currentPage: data.page,
        totalPages: data.total_pages   
      })
    })
      .catch(error => console.error('Error:', error))
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
    // ES6 Destructuring the state
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
    return (
      <div className='rmdb-home'>
        {
          this.state.heroImage 
          ? <div>
              <HeroImage 
                image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${this.state.heroImage.backdrop_path}`}
                title={this.state.heroImage.original_title}
                text={this.state.heroImage.overview}
              />
              <SearchBar callback={this.searchItems} />
          </div> 
          : null 
        }
        <div className='rmdb-home-grid'>
          <FourColGrid
            header={this.state.searchTerm ? 'Search result' : 'Popular movies 2019' }
            loading={this.state.loading}
          >
          {
            this.state.movies.map((el, i) => {
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
          {this.state.loading ? <Spinner /> : null }
          {(this.state.currentPage <= this.state.totalPages && !this.state.loading)
            ? <LoadMoreBtn text='Load more' onClick={this.loadMoreItems} />
            : null
          }
        </div>
      </div>
    )
      }
    }
    
    export default Home
