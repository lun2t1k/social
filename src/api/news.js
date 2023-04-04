import {jsonplaceholder} from './axios'

const news = {
    getNewsRequest() {
        return jsonplaceholder.get('posts')
    }
}

export default news
