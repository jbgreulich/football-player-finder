import { INIT_DISPLAY_PLAYERS, SET_FILTERED_PLAYERS } from './types';

export const fetchPlayers = () => {
  return async (dispatch) => {
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

    dispatch(initDisplayPlayers(data));
    dispatch(setFilteredPlayers(data));
  }
}

export const initDisplayPlayers = (payload) => {
  return {
    type: INIT_DISPLAY_PLAYERS,
    payload,
  }
}

export const setFilteredPlayers = (payload) => {
  return {
    type: SET_FILTERED_PLAYERS,
    payload,
  }
}