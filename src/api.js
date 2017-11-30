import axios from 'axios'
//should hold all api logic

export const fetchASingleContest = id => {
  return axios.get(`/api/contests/${id}`)
    .then( response => response.data)
};
