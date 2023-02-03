import { createReducer } from '@reduxjs/toolkit';

let initialState = {
    friends: [
        {
            id: 1,
            name: "Richard Delgado",
            avatar: "https://www.fakepersongenerator.com/Face/male/male1085147990081.jpg",
            status:
                "Perspiciatis culpa, magnam corrupti obcaecati repellendus quidem velit voluptatum iure, deserunt cupiditate.",
        },
        {
            id: 2,
            name: "Shirley Shahan",
            avatar: "https://www.fakepersongenerator.com/Face/female/female1022427571533.jpg",
            status:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        },
        {
            id: 3,
            name: "Trey Coleman",
            avatar: "https://www.fakepersongenerator.com/Face/male/male1085243424652.jpg",
            status: "Maiores qui odit unde corporis.",
        },
        {
            id: 4,
            name: "Tommy McKeever",
            avatar: "https://www.fakepersongenerator.com/Face/male/male20161083867412201.jpg",
            status:
                "Perspiciatis culpa, magnam corrupti obcaecati repellendus quidem velit voluptatum iure, deserunt cupiditate.",
        },
        {
            id: 5,
            name: "Esther Shumpert",
            avatar: "https://www.fakepersongenerator.com/Face/female/female20171026166672180.jpg",
            status:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        },
        {
            id: 6,
            name: "Earl Ross",
            avatar: "https://www.fakepersongenerator.com/Face/male/male108444239368.jpg",
            status: "Maiores qui odit unde corporis.",
        },
        {
            id: 7,
            name: "Matthew Burrows",
            avatar: "https://www.fakepersongenerator.com/Face/male/male20161086669801361.jpg",
            status:
                "Perspiciatis culpa, magnam corrupti obcaecati repellendus quidem velit voluptatum iure, deserunt cupiditate.",
        },
        {
            id: 8,
            name: "Ryan Nixon",
            avatar: "https://www.fakepersongenerator.com/Face/male/male20111086095949554.jpg",
            status:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        },
        {
            id: 9,
            name: "Jose Hagan",
            avatar: "https://www.fakepersongenerator.com/Face/male/male20151083590537109.jpg",
            status: "Maiores qui odit unde corporis.",
        },
    ],
};

// export default function friendsPageReducer(state = initialState, action) {
//     return state;
// }

const friendsPageReducer = createReducer(initialState, (builder) => {
    builder.addDefaultCase((state = initialState, action) => {
        return state;
    });
});

export default friendsPageReducer;
