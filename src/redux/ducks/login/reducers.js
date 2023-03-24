import { createReducer, combineReducers } from '@reduxjs/toolkit'
import { setUserData, setUserProfile, setUserPhoto, setUserStatus, addNewPost } from './actions'

// const initialLoginState = {
//     userId: null,
//     login: null,
//     email: null,
//     isAuth: false
// }

// const initialProfileState = {
//     userId: null,
//     lookingForAJob: null,
//     lookingForAJobDescription: null,
//     fullName: null,
//     contacts: {
//         github: null,
//         vk: null,
//         facebook: null,
//         instagram: null,
//         twitter: null,
//         website: null,
//         youtube: null,
//         mainLink: null
//     },
//     photos: {
//         small: null,
//         large: null
//     }
// }

const initialLoginState = {
    userId: 27904,
    login: 'lun2t1k@gmail.com',
    email: 'lun2t1k@gmail.com',
    isAuth: true
}

const initialProfileState = {
    userId: 27904,
    fullName: 'Dmitry Krutkin',
    status: 'Hello',
    birthday: '25.07.2000',
    location: 'Russia, Omsk',
    education: 'Technical college',
    lookingForAJob: null,
    lookingForAJobDescription: null,
    contacts: {
        github: '@lun2t1k',
        vk: null,
        facebook: null,
        instagram: null,
        twitter: null,
        website: null,
        youtube: null,
        mainLink: null
    },
    photos: {
        small: 'https://sun4-15.userapi.com/s/v1/ig2/hr1Xf-A3Nzmvvbsguaj-6SnjqeiWUtDhn19P_OC9jFLdKbtuTOM7xNHkTvUz-nRBRTDypWXBHt-Vsdtt1BBX3OsD.jpg?size=200x200&quality=95&crop=0,144,1279,1279&ava=1',
        large: 'https://sun4-15.userapi.com/s/v1/ig2/hr1Xf-A3Nzmvvbsguaj-6SnjqeiWUtDhn19P_OC9jFLdKbtuTOM7xNHkTvUz-nRBRTDypWXBHt-Vsdtt1BBX3OsD.jpg?size=200x200&quality=95&crop=0,144,1279,1279&ava=1',
        cover: 'https://media4.giphy.com/media/kjETcOXKdbYLS/giphy.webp?cid=ecf05e47wgys6eq5i7pdkjo68cqjbykiw68fcl955uax8ywm&rid=giphy.webp&ct=g'
    },
    posts: [
        {
            id: 'post' + 1,
            userId: 1,
            title: '',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porta ex ut suscipit euismod. In ultricies pharetra purus. Aliquam elementum leo vitae ultrices ullamcorper. In in egestas dolor. Donec pellentesque egestas diam vitae egestas. Maecenas a aliquam sem. Nam mattis fringilla eros, eu tristique ex interdum id. Donec ut porttitor magna.',
            likesAmount: 374
        },
        {
            id: 'post' + 2,
            userId: 1,
            title: '',
            body: 'Duis rutrum mattis odio, sit amet consequat ipsum mollis convallis. Nulla consectetur metus nec finibus blandit. Fusce sapien orci, commodo at euismod quis, varius ut tortor.',
            likesAmount: 923
        },
        {
            id: 'post' + 3,
            userId: 1,
            title: '',
            body: 'Nulla venenatis, lectus vitae fermentum vestibulum, tortor libero eleifend mi, nec rutrum purus erat congue ex. Morbi venenatis non enim nec fringilla. Ut convallis pellentesque ante, a sollicitudin tellus malesuada nec. Nunc mauris erat, gravida nec vestibulum ut, iaculis ut nisi. Nulla eu finibus urna. Pellentesque sed odio et lorem ullamcorper consectetur in id nisi. Donec egestas volutpat pharetra. Curabitur a leo nec sapien consequat maximus. Integer nec lectus felis. Ut eget interdum augue. Aenean tincidunt lorem eget accumsan sodales. Aliquam ultrices erat sed risus tincidunt rutrum. Proin ut dictum est. Ut luctus enim massa, a mollis ligula efficitur et. Vivamus nec placerat velit, vel auctor nunc.',
            likesAmount: 756
        }
    ]
}

const loginReducer = createReducer(initialLoginState, builder => {
    builder
        .addCase(setUserData, (state = initialLoginState, action) => {
            return {
                ...state,
                ...action.payload
            }
        })
        .addDefaultCase((state = initialLoginState) => {
            return state
        })
})

const setProfileReducer = createReducer(initialProfileState, builder => {
    builder
        .addCase(setUserProfile, (state = initialProfileState, action) => {
            return {
                ...state,
                ...action.payload.profile
            }
        })
        .addCase(setUserPhoto, (state = initialProfileState, action) => {
            return { ...state, photos: action.payload.photos }
        })
        .addCase(setUserStatus, (state = initialProfileState, action) => {
            return { ...state, status: action.payload.status }
        })
        .addCase(addNewPost, (state = initialProfileState, action) => {
            let newPost = {
                id: 'post' + (state.posts.length + 1),
                title: '',
                body: action.payload.text,
                likesAmount: 0
            }
            return { ...state, posts: [...state.posts, newPost] }
        })
        .addDefaultCase((state = initialProfileState) => {
            return state
        })
})

export default combineReducers({
    login: loginReducer,
    userProfile: setProfileReducer
})
