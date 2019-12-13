import { createSelector } from 'reselect';

const playerSelector = state => state.players.players;

const filterSelector = state => state.filters;

export const getFilteredPlayers = createSelector([playerSelector, filterSelector], (players, filters) => {
  let { name, position, age } = filters;
  let filteredPlayers = players;

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
  return filteredPlayers;
});