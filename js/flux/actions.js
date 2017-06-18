import { SET_SEARCH_TERM } from './constants';

export function setSearchTerm(searchTerm) {
  return {
    type: SET_SEARCH_TERM,
    payload: searchTerm,
  };
}

export function setSearchTermming(searchTerm) {
  return {
    type: 'SET_SEARCH_TERMING',
    payload: searchTerm,
  };
}
