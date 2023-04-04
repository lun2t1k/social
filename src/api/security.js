import {instance} from './axios'

const security = {
    getCaptcha() {
        return instance.get('security/get-captcha-url')
    }
}

export default security
