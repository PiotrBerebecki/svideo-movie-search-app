import axios from 'axios';

import { SET_SEARCH_TERM, ADD_API_DATA } from './constants';

export function setSearchTerm(searchTerm) {
  return {
    type: SET_SEARCH_TERM,
    payload: searchTerm,
  };
}

export function addApiData(apiData) {
  return {
    type: ADD_API_DATA,
    payload: apiData,
  };
}
