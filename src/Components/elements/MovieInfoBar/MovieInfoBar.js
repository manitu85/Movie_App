import React from 'react'
import { FaHistory, FaMoneyBillAlt, FaTicketAlt } from 'react-icons/fa'
import { calcTime, convertMoney } from '../../../helpers'


const MovieInfoBar = props => {
  return (
    <div className='rmdb-movieinfobar'>
      <div className='rmdb-movieinfobar-content'>

        <div className='rmdb-movieinfobar-content-col'>
          <FaHistory className='fa-time' name='clock-0' />
          <span className='rmdb-movieinfobar-info'>Running time: {calcTime(props.time)} </span>
        </div>

        <div className="rmdb-movieinfobar-content-col">
          <FaMoneyBillAlt className="fa-budget" name="money" />
          <span className="rmdb-movieinfobar-info">Budget:  {convertMoney(props.budget)}</span>
        </div>

        <div className="rmdb-movieinfobar-content-col">
          <FaTicketAlt className="fa-revenue" name="ticket" />
          <span className="rmdb-movieinfobar-info">Revenue:  {convertMoney(props.revenue)}</span>
        </div>

      </div>
    </div>
  )
}

export default MovieInfoBar
