import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-react-burger-becd9.firebaseio.com/'
});

export default instance;



