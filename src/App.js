import React, { Component } from 'react';

import PlayerList from './Components/PlayerList';
import Search from './Components/Search';

import './App.css';

export default class App extends Component {
  state = {
    playerData: [],
    filterResults: [],
    name: '',
    position: '',
    age: '',
  };
        
  handleNameChange = event => this.setState({name: event.target.value});  
  handlePositionChange = event => this.setState({position: event.target.value});
  handleAgeChange = event => this.setState({age: event.target.value});

  async componentDidMount() {
    const response = await fetch('https://football-players-b31f2.firebaseio.com/players.json');
    const data = await response.json();

    data.forEach(obj => {
      const today = new Date();
      const birthday = new Date(obj.dateOfBirth);
      let age = today.getFullYear() - birthday.getFullYear();
      const m = today.getMonth() - birthday.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
        age--;
      }
      obj.age = age;
    });

    this.setState({playerData: data});
  }

  filterPlayerData = () => {
    const { name, position, age, playerData } = this.state;
    let filteredPlayers = [...playerData];

    if (name !== '') {
      filteredPlayers = filteredPlayers.filter(player => {
        return player.name.toLowerCase().includes(name.toLowerCase());
      });
    }
    if (position !== '') {
      filteredPlayers = filteredPlayers.filter(player => {
        return player.position.toLowerCase() === position;
      });
    }
    if (age !== '') {
      filteredPlayers = filteredPlayers.filter(player => {
        return player.age === parseInt(age, 10);
      }); 
    }  

    this.setState({filterResults: filteredPlayers});
  }

  render() {
    const { name, position, age, playerData, filterResults } = this.state;

    return (
      <div className="App">
        <header>
          <h1 className='title'>Football Player Finder</h1>
          <div id='search-container'>
            <Search name={name} position={position} age={age} onSearch={this.filterPlayerData} nameChange={this.handleNameChange} positionChange={this.handlePositionChange} ageChange={this.handleAgeChange} />
          </div>
        </header>
        <div className='list'>
          <PlayerList playerDataArray={filterResults.length ? filterResults : playerData} />
        </div>
      </div>
    );
  }
}
