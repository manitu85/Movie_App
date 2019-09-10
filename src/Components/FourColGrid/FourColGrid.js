import React from 'react'
import PropTypes from 'prop-types'

const FourColGrid = ({children, header, loading}) => {

  const renderEl = () => {
    const gridEls = children.map((el, i) => (
      <div key={i} className="rmdb-grid-element">
        {el}
      </div>
    ))
    return gridEls;
  }

  return (
    <div className="rmdb-grid">
      {
        header && !loading 
        ? <h1>{header}</h1>
        : null
      }
      <div className='rmdb-grid-content'>
        {renderEl()}
      </div>
    </div>
  )
}
FourColGrid.propTypes = {
  header: PropTypes.string,
  loading: PropTypes.bool
}

export default FourColGrid


 