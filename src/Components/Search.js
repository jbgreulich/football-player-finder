import React, { Component } from 'react';

import './Components.css';

export default class Search extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    alert('reselect took my job away');
  }

  handleNameChange = (event) => {
    this.props.setName(event.target.value);
  }
  handlePositionChange = (event) => {
    this.props.setPosition(event.target.value);
  }
  handleAgeChange = (event) => {
    this.props.setAge(event.target.value);
  }

  render() {
    const { filters } = this.props;

    return (
      <div id='search'>
        <form onSubmit={this.handleSubmit}>
          <div id='name-search'>
            <input type='text' name='name' id='name-search-input' placeholder='Player Name' value={filters.name} onChange={this.handleNameChange} />
          </div>

          <div>
            <select name='position' id='position-search-select' value={filters.position} onChange={this.handlePositionChange}>
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
            <input type='number' name='age' id='age-seach-input' placeholder='Age' min='18' max='40' value={filters.age} onChange={this.handleAgeChange} />
          </div>

          <input type='submit' id='player-search-button' value='Search' />
        </form>
      </div>
    )
  }
}