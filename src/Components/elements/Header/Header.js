import React from 'react'
import movie_logo from '../../../images/reactMovie_logo.png'
import tmdb_logo from '../../../images/tmdb_logo.png'

const Header = () => {
  return (
    <div className='rmdb-header'>
      <div className='rmdb-header__content content'>
        <img
          className='content__rmdb-logo'
          src={movie_logo} 
          alt='rmdb-logo' />
        <img
          className='content__rmdb-tmdb-logo'
          src={tmdb_logo}
          alt='rmdb-logo' />
      </div>
    </div>
  )
}

export default Header
