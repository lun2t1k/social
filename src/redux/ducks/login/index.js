import reducer from './reducers'

export { login, logout, getCaptchaURL, updateUserProfile, updateUserPhoto, updateStatus, addPost } from './thunks'
export { getIsAuth, getAuthorizedUserId, getAuthorizedUserProfile, getAuthorizedUserPosts } from './selectors'
export default reducer
