import React from 'react'
import PropTypes from 'prop-types'
import { FaHistory, FaMoneyBillAlt, FaTicketAlt } from 'react-icons/fa'
import { calcTime, convertMoney } from '../../helpers/helpers'


const MovieInfoBar = ({time, budget, revenue}) => (

  <div className='rmdb-movieinfobar'>
    <div className='rmdb-movieinfobar-content'>

      <div className='rmdb-movieinfobar-content-col'>
        <FaHistory className='fa-time' name='clock-0' />
        <span className='rmdb-movieinfobar-info'>Running time: {calcTime(time)} </span>
      </div>

      <div className="rmdb-movieinfobar-content-col">
        <FaMoneyBillAlt className="fa-budget" name="money" />
        <span className="rmdb-movieinfobar-info">Budget:  {convertMoney(budget)}</span>
      </div>

      <div className="rmdb-movieinfobar-content-col">
        <FaTicketAlt className="fa-revenue" name="ticket" />
        <span className="rmdb-movieinfobar-info">Revenue:  {convertMoney(revenue)}</span>
      </div>

    </div>
  </div>
)


MovieInfoBar.propTypes = {
  time: PropTypes.number,
  budget: PropTypes.number,
  revenue: PropTypes.number
}

export default MovieInfoBar
