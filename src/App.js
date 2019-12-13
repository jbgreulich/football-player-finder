import React, { Component } from 'react';
import { Provider } from 'react-redux';

import PlayerListContainer from './Components/PlayerListContainer';
import SearchContainer from './Components/SearchContainer';
import store from './store';

import './App.css';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header>
            <h1 className='title'>Football Player Finder</h1>
            <div id='search-container'>
              <SearchContainer />
            </div>
          </header>
          <div className='list'>
            <PlayerListContainer />
          </div>
        </div>
      </Provider>
    );
  }
}
