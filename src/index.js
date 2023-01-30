import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let chatsData = [
    {
        id: 1,
        name: "Richard Delgado",
        avatar: "https://www.fakepersongenerator.com/Face/male/male1085147990081.jpg",
        lastMessage:
            "Perspiciatis culpa, magnam corrupti obcaecati repellendus quidem velit voluptatum iure, deserunt cupiditate.",
    },
    {
        id: 2,
        name: "Shirley Shahan",
        avatar: "https://www.fakepersongenerator.com/Face/female/female1022427571533.jpg",
        lastMessage:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
    {
        id: 3,
        name: "Trey Coleman",
        avatar: "https://www.fakepersongenerator.com/Face/male/male1085243424652.jpg",
        lastMessage: "Maiores qui odit unde corporis.",
    },
    {
        id: 4,
        name: "Tommy McKeever",
        avatar: "https://www.fakepersongenerator.com/Face/male/male20161083867412201.jpg",
        lastMessage:
            "Perspiciatis culpa, magnam corrupti obcaecati repellendus quidem velit voluptatum iure, deserunt cupiditate.",
    },
    {
        id: 5,
        name: "Esther Shumpert",
        avatar: "https://www.fakepersongenerator.com/Face/female/female20171026166672180.jpg",
        lastMessage:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
    {
        id: 6,
        name: "Earl Ross",
        avatar: "https://www.fakepersongenerator.com/Face/male/male108444239368.jpg",
        lastMessage: "Maiores qui odit unde corporis.",
    },
    {
        id: 7,
        name: "Matthew Burrows",
        avatar: "https://www.fakepersongenerator.com/Face/male/male20161086669801361.jpg",
        lastMessage:
            "Perspiciatis culpa, magnam corrupti obcaecati repellendus quidem velit voluptatum iure, deserunt cupiditate.",
    },
    {
        id: 8,
        name: "Ryan Nixon",
        avatar: "https://www.fakepersongenerator.com/Face/male/male20111086095949554.jpg",
        lastMessage:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
    {
        id: 9,
        name: "Jose Hagan",
        avatar: "https://www.fakepersongenerator.com/Face/male/male20151083590537109.jpg",
        lastMessage: "Maiores qui odit unde corporis.",
    },
];
let messagesData = [
    {
        id: 1,
        messageType: "contact",
        messageText: "Lorem ipsum",
    },
    {
        id: 2,
        messageType: "contact",
        messageText:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores qui odit unde corporis.",
    },
    {
        id: 3,
        messageType: "user",
        messageText: "Lorem ipsum dolor sit amet consectetur",
    },
    {
        id: 4,
        messageType: "contact",
        messageText:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
    {
        id: 5,
        messageType: "user",
        messageText:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores qui odit unde corporis. Perspiciatis culpa, magnam corrupti obcaecati repellendus quidem velit voluptatum iure, deserunt cupiditate.",
    },
    {
        id: 6,
        messageType: "contact",
        messageText:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores qui odit unde corporis.",
    },
    {
        id: 7,
        messageType: "user",
        messageText: "Lorem ipsum dolor sit amet consectetur",
    },
    {
        id: 8,
        messageType: "Contact",
        messageText:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
    {
        id: 9,
        messageType: "user",
        messageText:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores qui odit unde corporis. Perspiciatis culpa, magnam corrupti obcaecati repellendus quidem velit voluptatum iure, deserunt cupiditate.",
    },
    {
        id: 10,
        messageType: "contact",
        messageText: "Lorem ipsum",
    },
    {
        id: 11,
        messageType: "user",
        messageText:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores qui odit unde corporis.",
    },
    {
        id: 12,
        messageType: "contact",
        messageText:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
    {
        id: 13,
        messageType: "user",
        messageText:
            "Perspiciatis culpa, magnam corrupti obcaecati repellendus quidem velit voluptatum iure, deserunt cupiditate.",
    },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App chatsData={chatsData} messagesData={messagesData} />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
