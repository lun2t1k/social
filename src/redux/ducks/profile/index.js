import reducer from './reducers'

export { setProfile, setStatus, updateStatus, addPost } from './thunks'
export { getAuthorizedUserId, getProfile, getStatus } from './selectors'
export default reducer
