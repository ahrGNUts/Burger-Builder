import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-d868b.firebaseio.com/'
});

export default instance;