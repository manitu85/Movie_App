import React from 'react'
import { Link } from 'react-router-dom'

// const MovieThumb = props => {
//   return (
//     <div className='rmdb-moviethumb'>
//       {props.clickable
//         ? <Link to={{ pathname: `/${props.movieId}`, movieName: `${props.movieName}`}} >
//             <img src={props.image} alt='moviethumb' />
//           </Link>
//         : <img src={props.image} alt='moviethumb' />
//       }
//     </div>
//   )
// }

const MovieThumb = ({ image, movieId, movieName, clickable }) => (
  <div className="rmdb-moviethumb">
    {/* You can send props via the Links "to" object. Here we create our own "movieName" */}
    {clickable ?
      <Link to={{ pathname: `/${movieId}`, movieName: `${movieName}` }}>
        <img className="clickable" src={image} alt="moviethumb" />
      </Link>
      :
      <img src={image} alt="moviethumb" />
    }
  </div>
)

export default MovieThumb
