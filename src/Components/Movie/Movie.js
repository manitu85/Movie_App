import React, { Component } from 'react'
import { VerticleButton as ScrollUpButton } from "react-scroll-up-button";
import { API_URL, API_KEY } from '../../helpers/config'
import Navigation from '../Navigation/Navigation'
import MovieInfo from '../MovieInfo/MovieInfo'
import MovieInfoBar from '../MovieInfoBar/MovieInfoBar'
import Actor from '../Actor/Actor';
import FourColGrid from '../FourColGrid/FourColGrid';
import Spinner from '../Spinner/Spinner';


class Movie extends Component {
  
  state = {
    movie: null,
    actors: null,
    directors: [],
    loading: false
  }

  componentDidMount() {
    const { movieId } = this.props.match.params;
    // Save fatched movie to local storage by movie ID
    if (localStorage.getItem(`${movieId}`)) {
      const state = JSON.parse(localStorage.getItem(`${movieId}`))
      this.setState({ ...state})
    } else {
      this.setState({ loading: false })
      const url = `${API_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`;
      this.getData(url)
    }
  }

  getData = async url => {
    const { movieId } = this.props.match.params;
    
    const response = await fetch(url);
    const data = await response.json();
    // const data = await (await fetch(url)).json()
    try {
      if (data.status_code) {
        this.setState({ loading: false })
      } else {
        this.setState({ movie: data }, () => {
          // then fatch actor in the setState callback function
          const url = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
          fetch(url)
            .then(result => result.json())
            .then(data => {
              const directors = data.crew.filter(member => member.job === 'Director');
              this.setState({
                actors: data.cast,
                directors,
                loading: false
              }, () => {
                localStorage.setItem(`${movieId}`, JSON.stringify(this.state))
              })
            })
        })
      }
    }
    
    catch(err) {
      console.log("There is an error:", err);
    }
  }

  
  render() {
    const { movie,directors, actors, loading } = this.state;
    const { location } = this.props;

    return (
      <div className='rmdb-movie'>
        {movie 
          ? <div>
             <Navigation movie={location.movieName} />
             <MovieInfo 
              movie={movie} 
              directors={directors} 
            />
            <MovieInfoBar 
              time={movie.runtime} 
              budget={movie.budget} 
              revenue={movie.revenue} 
            />
            </div>
          : null
        }
      
        {
          actors 
            ? <div className='rmdb-movie__grid'>
                <FourColGrid header={'Actors'}>
                  {actors.map((el, i) => {
                    return <Actor key={i} actor={el} />
                  })}
                </FourColGrid>
              </div>
            : null
        }

        { !actors && !loading ? <h1>No Movie Found</h1> : null }
        { loading ? <Spinner /> : null}
        <ScrollUpButton ShowAtPosition={600} />
      </div>
    )
  }
}

export default Movie
