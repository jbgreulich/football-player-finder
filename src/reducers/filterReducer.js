import { SET_NAME, SET_POSITION, SET_AGE } from '../actions/types';

const initState = {
  name: '',
  position: '',
  age: '',
};

export default function(state = initState, action) {
  switch (action.type) {
    case SET_NAME:
      return {
        ...state,
        name: action.payload
      };
    case SET_POSITION:
      return {
        ...state,
        position: action.payload
    };
    case SET_AGE:
      return {
        ...state,
        age: action.payload
    };
    default:
      return state;
  }
}