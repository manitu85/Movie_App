import React from 'react'
import { Link } from 'react-router-dom';
import movie_logo from '../../images/reactMovie_logo.png'
import tmdb_logo from '../../images/tmdb_logo.png'


const Header = () => (
  <div className='rmdb-header'>
    <div className='rmdb-header__content content'>
      <Link to='/'>
        <img
          className='content__rmdb-logo'
          src={movie_logo}
          alt='rmdb-logo' />
      </Link>
      <img
        className='content__rmdb-tmdb-logo'
        src={tmdb_logo}
        alt='rmdb-logo' />
    </div>
  </div>
)


export default Header
