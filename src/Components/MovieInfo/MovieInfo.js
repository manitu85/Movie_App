import React from 'react'
import PropTypes from 'prop-types'
import {
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE
} from '../../helpers/config'
import { FaFilm } from 'react-icons/fa';
import MovieThumb from '../MovieThumb/MovieThumb.js';
import noPoster from '../../images/no_image.jpg'



const MovieInfo = ({movie, directors}) => {
  return (
    <div className='rmdb-movieinfo'
         style={{
           background: movie.backdrop_path 
            ? `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${movie.backdrop_path}')`
            : '#000'
         }}
    >
      <div className='rmdb-movieinfo__content'>
        <div className='rmdb-movieinfo__thumb'>
          <MovieThumb 
            image={
              movie.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                : noPoster 
            } 
          />
        </div>
        <div className='rmdb-movieinfo__text'>
          <h1>{movie.title}</h1>
          <h3>PLOT</h3>
          <p>{movie.overview}</p>
          <h1>IMDB RATING</h1>
          <div className='rmdb-movieinfo__rating'>
            <meter 
              min="0" 
              max="100" 
              optimum="100" 
              low="40" 
              high="70" 
              value={movie.vote_average * 10}>
            </meter>
            <p className="rmdb-movieinfo__score">{movie.vote_average}</p>
          </div>
          {directors.length > 1 ? <h3>DIRECTORS</h3> : <h3>DIRECTOR</h3>}
          {
            directors.map((el, i) => {
              return <p key={i} className='rmdb-movieinfo__director' >{el.name}</p>
            })
          }
        </div>
        <FaFilm className='fa-film' name='film' />
      </div>
    </div>
  )
}

MovieInfo.propTypes = {
  movie: PropTypes.object.isRequired,
  directors: PropTypes.array,
}

export default MovieInfo
