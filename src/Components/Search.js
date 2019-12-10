import React, { Component } from 'react';

import './Components.css';

export default class Search extends Component {

  render() {
    return (
      <div id='search'>
        <form onSubmit={this.handleSubmit}>
          <div id='name-search'>
            <input type='text' id='name-search-input' placeholder='Player Name' />
          </div>
          <div>
          <select name='position' id='position-search-select'>
            <option value=''>Position</option>
            <option value='attack-mid'>Attacking Midfield</option>
            <option value='center-mid'>Central Midfield</option>
            <option value='center-back'>Centre-Back</option>
            <option value='center-forward'>Centre-Forward</option>
            <option value='defense-mid'>Defensive Midfield</option>
            <option value='keeper'>Keeper</option>
            <option value='left-mid'>Left Midfield</option>
            <option value='left-wing'>Left Wing</option>
            <option value='left-back'>Left-Back</option>
            <option value='right-back'>Right-Back</option>
          </select>
          </div>

          <div id='age-search'>
            <input type='number' id='age-seach-input' placeholder='Age' min='18' max='40' />
          </div>

          <input type='submit' id='player-search-button' value='Search' />
        </form>
      </div>
    )
  }
}