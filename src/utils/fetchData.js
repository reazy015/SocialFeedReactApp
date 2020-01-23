import axios from 'axios';

const fetchData = (url, params) => {
    return axios.get(url, {params});
};

export default fetchData;