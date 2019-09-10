import React from 'react'
import PropTypes from 'prop-types'
import { IMAGE_BASE_URL } from '../../helpers/config';
import noPoster from '../../images/no_image.jpg'

const Actor = ({actor}) => {
  const POSTER_SIZE = 'w154'
  return (
    <div className='rmdb-actor'>
      <img 
        src={actor.profile_path 
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}/${actor.profile_path}` 
              : noPoster
            }
        alt='actor-thumb'
      />
      <span className='rmdb-actor-name'>{actor.name}</span>
      <span className='rmdb-actor-character'>{actor.character}</span>
    </div>
  )
}

Actor.propTypes = {
  actor: PropTypes.object
}

export default Actor
