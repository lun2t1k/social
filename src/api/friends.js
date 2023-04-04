import {jsonplaceholder} from './axios'

const friends = {
    getFriendsRequest() {
        return jsonplaceholder.get('users')
    }
}

export default friends
