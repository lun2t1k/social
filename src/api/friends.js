import { jsonplaceholder } from './axios';

const friends = {
    getFriendsRequest() {
        return jsonplaceholder.get('users').then(response => response.data);
    }
}

export default friends;
