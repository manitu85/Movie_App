import React from 'react'
import PropTypes from 'prop-types'

const FourColGrid = props => {

  const renderEl = () => {
    const gridEls = props.children.map((el, i) => (
      <div key={i} className="rmdb-grid-element">
        {el}
      </div>
    ))
    return gridEls;
  }

  return (
    <div className="rmdb-grid">
      {props.header && !props.loading 
        ? <h1>{props.header}</h1>
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


 