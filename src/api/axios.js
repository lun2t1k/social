import axios from 'axios'

export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'api-key': 'add7593c-9aef-4c09-ac23-f0a8ab55a150'
    }
})

export const jsonplaceholder = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
})
