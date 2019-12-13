import { SET_NAME, SET_POSITION, SET_AGE } from './types';

export const setName = (payload) => {
  return {
    type: SET_NAME,
    payload,
  }
}
export const setPosition = (payload) => {
  return {
    type: SET_POSITION,
    payload,
  }
}
export const setAge = (payload) => {
  return {
    type: SET_AGE,
    payload,
  }
}