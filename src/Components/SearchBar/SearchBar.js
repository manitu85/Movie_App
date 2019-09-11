import React, { Component } from 'react'
import { FaSearchengin } from 'react-icons/fa'
import PropTypes from 'prop-types'


class SearchBar extends Component {
  state = {
    value: ''
  }

  // /Must have  because reset
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
        <div className='rmdb-searchbar__content'>
          <FaSearchengin className='rmdb-searchbar__fa-search' />
          <input 
            type='text' 
            name='search' 
            placeholder='Search...' 
            className='rmdb-searchbar__input'
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

