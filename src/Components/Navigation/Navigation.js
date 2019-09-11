import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'


const Navigation = ({movie}) => (
  <div className='rmdb-navigation'>
    <div className='rmdb-navigation__content'>
      <Link to='/'>
        <p className='rmdb-navigation__link rmdb-navigation__link--isHover'>Home</p>
      </Link>
      <p className='rmdb-navigation__link'>/</p>
      <p className='rmdb-navigation__link'>{movie}</p>
    </div>
  </div>
)

Navigation.propTypes = {
  movie: PropTypes.string
}

export default Navigation

