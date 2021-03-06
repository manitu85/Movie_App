import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'


/* Send props via the Links 'to' object. Here we create  own 'movieName' */
const MovieThumb = ({ image, movieId, movieName, clickable }) => (
  <div className='rmdb-moviethumb'>
    {
      clickable 
      ? <Link to={{ pathname: `/${movieId}`, movieName: `${movieName}` }}>
          <img className='rmdb-moviethumb__image rmdb-moviethumb__image--isClickable' src={image} alt='moviethumb' />
        </Link>
      : <img
          className='rmdb-moviethumb__image' 
          src={image} alt='moviethumb' />
    }
  </div>
)

MovieThumb.propTypes = {
  image: PropTypes.string,
  movieId: PropTypes.number,
  moviName: PropTypes.string
}

export default MovieThumb
