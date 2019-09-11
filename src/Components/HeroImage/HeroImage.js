import React from 'react'
import PropTypes from 'prop-types'


const HeroImage = ({image, title, text}) => (
  <div className='rmdb-heroimage' 
    style={{
      background:
       `linear-gradient(to bottom, rgba(0,0,0,0)
        39%,rgba(0,0,0,0)
        41%,rgba(0,0,0,0.65)
        100%),
        url('${image}'), #1c1c1c`
    }}
   >
   <div className='rmdb-heroimage__content'>
     <div className='rmdb-heroimage__text text'>
       <h1 className='text__title'>{title}</h1>
       <p className='text__description'>{text}</p>
     </div>
   </div>
  </div>
 )


HeroImage.propTypes = {
  image: PropTypes.string,
  title:PropTypes.string,
  text: PropTypes.string
}


export default HeroImage

