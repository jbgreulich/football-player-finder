import { INIT_DISPLAY_PLAYERS, SET_FILTERED_PLAYERS } from '../actions/types';

const initState = {
  players: [],
  filteredPlayers: [],
};

export default function(state = initState, action) {
  switch (action.type) {
    case INIT_DISPLAY_PLAYERS:
      return {
        ...state,
        players: action.payload
      };
    case SET_FILTERED_PLAYERS:
      return {
        ...state,
        filteredPlayers: action.payload
      }
    default:  
      return state;
  }
}