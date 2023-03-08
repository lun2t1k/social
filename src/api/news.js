import { jsonplaceholder } from './axios';

const news = {
    getNewsRequest() {
        return jsonplaceholder.get('posts').then(response => response.data);
    }
}

export default news;
