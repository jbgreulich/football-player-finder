import React, { Component } from 'react';

import './Components.css';

export default class Search extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSearch();
  }

  render() {
    const { nameChange, positionChange, ageChange, name, position, age } = this.props;

    return (
      <div id='search'>
        <form onSubmit={this.handleSubmit}>
          <div id='name-search'>
            <input type='text' id='name-search-input' placeholder='Player Name' value={name} onChange={nameChange} name='name' />
          </div>

          <div>
            <select name='position' id='position-search-select' value={position} onChange={positionChange}>
              <option value=''>Position</option>
              <option value='attacking midfield'>Attacking Midfield</option>
              <option value='central midfield'>Central Midfield</option>
              <option value='centre-back'>Centre-Back</option>
              <option value='centre-forward'>Centre-Forward</option>
              <option value='defensive midfield'>Defensive Midfield</option>
              <option value='keeper'>Keeper</option>
              <option value='left midfield'>Left Midfield</option>
              <option value='left wing'>Left Wing</option>
              <option value='left back'>Left-Back</option>
              <option value='right-back'>Right-Back</option>
            </select>
          </div>

          <div id='age-search'>
            <input type='number' id='age-seach-input' placeholder='Age' min='18' max='40' value={age} onChange={ageChange} />
          </div>

          <input type='submit' id='player-search-button' value='Search' />
        </form>
      </div>
    )
  }
}