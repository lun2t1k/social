import axios from 'axios';

export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '1ea63667-7d48-4187-bfcd-ba68cfae3ead'
    }
});

export const jsonplaceholder = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
});
