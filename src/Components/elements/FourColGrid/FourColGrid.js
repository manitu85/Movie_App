import React from 'react'

const FourColGrid = props => {

  const renderEl = () => {
    const gridels = props.children.map((el, i) => (
      <div key={i} className="rmdb-grid-el">
        {el}
      </div>
    ))
    return gridels;
  }

  return (
    <>
      {props.header && !props.loading 
        ? <h1>{props.header}</h1>
        : null
      }
      <div className='rmdb-grid-content'>
        {renderEl()}
      </div>
    </>
  )
}

export default FourColGrid


