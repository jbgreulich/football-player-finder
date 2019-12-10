import React, { Component } from 'react';

import PlayerList from './Components/PlayerList';
import Search from './Components/Search';

import './App.css';

export default class App extends Component {
  state = {playerData: []};

  async componentDidMount() {
    const response = await fetch('https://football-players-b31f2.firebaseio.com/players.json');
    const json = await response.json();
    console.log(json);
    this.setState({playerData: json});
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1 className='title'>Football Player Finder</h1>
          <div id='search-container'>
            <Search />
          </div>
        </header>
        <div className='list'>
          <PlayerList playerDataArray={this.state.playerData} />
        </div>
      </div>
    );
  }
}
