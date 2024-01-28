import axios from 'axios';

const Api = axios.create({
    baseURL: 'https://app-o4tlf7ol3q-et.a.run.app/'
});

export default Api;