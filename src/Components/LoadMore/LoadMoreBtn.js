import React from 'react'
import PropTypes from 'prop-types'


const LoadMoreBtn = ({onClick, text}) => (
  <div 
    className='rmdb-loadmorebtn'
    onClick={onClick}
  >
    <p className='rmdb-loadmorebtn__text'>{text}</p>
  </div>
)


LoadMoreBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string
}

export default LoadMoreBtn
