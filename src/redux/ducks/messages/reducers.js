import { createReducer } from '@reduxjs/toolkit'
import { sendNewMessage, setMessages } from './actions'

const initialState = {
    selectedChat: null,
    chats: [
        {
            id: 1,
            name: 'Richard Delgado',
            avatar: 'https://www.fakepersongenerator.com/Face/male/male1085147990081.jpg',
            lastMessage:
                'Perspiciatis culpa, magnam corrupti obcaecati repellendus quidem velit voluptatum iure, deserunt cupiditate.',
        },
        {
            id: 2,
            name: 'Shirley Shahan',
            avatar: 'https://www.fakepersongenerator.com/Face/female/female1022427571533.jpg',
            lastMessage:
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        },
        {
            id: 3,
            name: 'Trey Coleman',
            avatar: 'https://www.fakepersongenerator.com/Face/male/male1085243424652.jpg',
            lastMessage: 'Maiores qui odit unde corporis.',
        },
        {
            id: 4,
            name: 'Tommy McKeever',
            avatar: 'https://www.fakepersongenerator.com/Face/male/male20161083867412201.jpg',
            lastMessage:
                'Perspiciatis culpa, magnam corrupti obcaecati repellendus quidem velit voluptatum iure, deserunt cupiditate.',
        },
        {
            id: 5,
            name: 'Esther Shumpert',
            avatar: 'https://www.fakepersongenerator.com/Face/female/female20171026166672180.jpg',
            lastMessage:
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        },
        {
            id: 6,
            name: 'Earl Ross',
            avatar: 'https://www.fakepersongenerator.com/Face/male/male108444239368.jpg',
            lastMessage: 'Maiores qui odit unde corporis.',
        },
        {
            id: 7,
            name: 'Matthew Burrows',
            avatar: 'https://www.fakepersongenerator.com/Face/male/male20161086669801361.jpg',
            lastMessage:
                'Perspiciatis culpa, magnam corrupti obcaecati repellendus quidem velit voluptatum iure, deserunt cupiditate.',
        },
        {
            id: 8,
            name: 'Ryan Nixon',
            avatar: 'https://www.fakepersongenerator.com/Face/male/male20111086095949554.jpg',
            lastMessage:
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        },
        {
            id: 9,
            name: 'Jose Hagan',
            avatar: 'https://www.fakepersongenerator.com/Face/male/male20151083590537109.jpg',
            lastMessage: 'Maiores qui odit unde corporis.',
        },
    ],
    messages: [
        {
            id: 'message' + 1,
            type: 'contact',
            text: 'Lorem ipsum',
            time: '12:47'
        },
        {
            id: 'message' + 2,
            type: 'contact',
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores qui odit unde corporis.',
            time: '12:47'
        },
        {
            id: 'message' + 3,
            type: 'user',
            text: 'Lorem ipsum dolor sit amet consectetur',
            time: '12:47'
        },
        {
            id: 'message' + 4,
            type: 'contact',
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
            time: '12:47'
        },
        {
            id: 'message' + 5,
            type: 'user',
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores qui odit unde corporis. Perspiciatis culpa, magnam corrupti obcaecati repellendus quidem velit voluptatum iure, deserunt cupiditate.',
            time: '12:47'
        },
        {
            id: 'message' + 6,
            type: 'contact',
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores qui odit unde corporis.',
            time: '12:47'
        },
        {
            id: 'message' + 7,
            type: 'user',
            text: 'Lorem ipsum dolor sit amet consectetur',
            time: '12:47'
        },
        {
            id: 'message' + 8,
            type: 'Contact',
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
            time: '12:47'
        },
        {
            id: 'message' + 9,
            type: 'user',
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores qui odit unde corporis. Perspiciatis culpa, magnam corrupti obcaecati repellendus quidem velit voluptatum iure, deserunt cupiditate.',
            time: '12:47'
        },
        {
            id: 'message' + 10,
            type: 'contact',
            text: 'Lorem ipsum',
            time: '12:47'
        },
        {
            id: 'message' + 11,
            type: 'user',
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores qui odit unde corporis.',
            time: '12:47'
        },
        {
            id: 'message' + 12,
            type: 'contact',
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
            time: '12:47'
        },
        {
            id: 'message' + 13,
            type: 'user',
            text: 'Perspiciatis culpa, magnam corrupti obcaecati repellendus quidem velit voluptatum iure, deserunt cupiditate.',
            time: '12:47'
        }
    ]
}

const messagesReducer = createReducer(initialState, builder => {
    builder
        .addCase(setMessages, (state = initialState, action) => {
            return { ...state, selectedChat: action.payload.userID }
        })
        .addCase(sendNewMessage, (state = initialState, action) => {
            let newMessage = {
                id: 'message' + (state.messages.length + 1),
                type: 'user',
                text: action.payload.messageText,
                time: action.payload.messageTime
            }
            return { ...state, messages: [...state.messages, newMessage] }
        })
        .addDefaultCase((state = initialState) => {
            return state
        })
})

export default messagesReducer
