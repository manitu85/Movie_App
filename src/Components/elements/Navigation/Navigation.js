import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = props => {
  console.log("Movie Navigation:", props.movie)
  return (
    <div className='rmdb-navigation'>
      <div className='rmdb-navigation-content'>
        <Link to='/'>
          <p>Home</p>
        </Link>
        <p>/</p>
        <p>{props.movie}</p>
      </div>
    </div>
  )
}

export default Navigation