import instance from './axios';

const authAPI = {
    getAuthStatus() {
        return instance.get('auth/me').then(response => response.data);
    },
}

export default authAPI;
