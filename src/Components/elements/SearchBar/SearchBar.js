import React, { Component } from 'react'
import { FaSearchengin } from 'react-icons/fa'


class SearchBar extends Component {
  state = {
    value: ''
  }

  timeout = null;

  // /Must have this here so we can reset it
  timeout = null;

  onSearch = (event) => {
    // ES6 Destructuring prop
    // const { callback } = this.props;

    this.setState({ value: event.target.value })
    clearTimeout(this.timeout);
    // Set a timeout to wait for the user to stop writing
    // So we don´t have to make unnessesary calls
    this.timeout = setTimeout(() => {
      this.props.callback(this.state.value);
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

export default SearchBar

