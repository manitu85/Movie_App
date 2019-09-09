import React, { Component } from 'react'
import { API_URL, API_KEY } from '../../config'
import Navigation from '../elements/Navigation/Navigation'
import MovieInfo from '../elements/MovieInfo/MovieInfo'
import MovieInfoBar from '../elements/MovieInfoBar/MovieInfoBar'
import Actor from '../elements/Actor/Actor';
import FourColGrid from '../elements/FourColGrid/FourColGrid';
import Spinner from '../elements/Spinner/Spinner';


class Movie extends Component {
  
  state = {
    movie: null,
    actors: null,
    directors: [],
    loading: false
  }

  componentDidMount() {
    this.setState({ loading: false })

    // first fetch the movie
    const url = `${API_URL}movie/${this.props.match.params.movieId}?api_key=${API_KEY}&language=en-US`;
    this.getData(url)
    console.log(url);
  }

  getData = url => {
    fetch(url)
      .then(result => result.json())
      .then(data => {
        console.log(data)
        if (data.status_code) {
          this.setState({loading: false})
        } else {
          this.setState({movie: data}, () => {
            // then fatch actor in the setState callback function
            const url = `${API_URL}movie/${this.props.match.params.movieId}/credits?api_key=${API_KEY}`;
            fetch(url)
              .then(result => result.json())
              .then(data => {
                const directors = data.crew.filter( member => member.job === 'Director');
                this.setState({
                  actors: data.cast,
                  directors,
                  loading: false
                })
            })
          })
        }
      })
      .catch(error => console.error('Error:', error))
  }
  
  
  render() {
    return (
      <div className='rmdb-movie'>
        {this.state.movie 
          ? <div>
             <Navigation movie={this.props.location.movieName} />
             <MovieInfo 
              movie={this.state.movie} 
              directors={this.state.directors} 
            />
            <MovieInfoBar 
              time={this.state.movie.runtime} 
              budget={this.state.movie.budget} 
              revenue={this.state.movie.revenue} 
            />
            </div>
          : null
        }
      
        {
          this.state.actors 
            ? <div className='rmdb-movie-grid'>
                <FourColGrid header={'Actors'}>
                  {this.state.actors.map((el, i) => {
                    return <Actor key={i} actor={el} />
                  })}
                </FourColGrid>
              </div>
            : null
        }

        { !this.state.actors && !this.state.loading ? <h1>No Movie Found</h1> : null }
        { this.state.loading ? <Spinner /> : null}
      </div>
    )
  }
}

export default Movie
