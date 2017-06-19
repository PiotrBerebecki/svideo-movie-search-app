import axios from 'axios';
import { addApiData } from './actions';

export default function getApiDetails(imdbID) {
  return dispatch => {
    axios
      .get(`http://localhost:3000/${imdbID}`)
      .then(response => {
        dispatch(addApiData(response.data));
      })
      .catch(err => {
        console.error('axios error', err);
      });
  };
}
