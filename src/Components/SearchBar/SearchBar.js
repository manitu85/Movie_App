import React, { Component } from 'react'
import { FaSearchengin } from 'react-icons/fa'
import PropTypes from 'prop-types'


class SearchBar extends Component {
  state = {
    value: ''
  }

  // /Must have this because reset
  timeout = null;

  onSearch = (event) => {

    const { callback } = this.props;

    this.setState({ value: event.target.value })
    clearTimeout(this.timeout);
    // Set a timeout to wait for the user to stop writing because unnessesary call
    this.timeout = setTimeout(() => {
      callback(this.state.value);
    }, 500);
  }

  render() {
    return (
      <div className='rmdb-searchbar'>
        <div className='rmdb-searchbar-content'>
          <FaSearchengin className='rmdb-fa-search' />
          <input 
            type='text' 
            name='search' 
            placeholder='Search...' 
            className='rmdb-searchbar-input'
            value={this.state.value}
            onChange={this.onSearch}
            />
        </div>
      </div>
    )
  }
}

SearchBar.propTypes = {
  callback: PropTypes.func
}

export default SearchBar

