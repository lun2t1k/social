let store = {
    _state: {
        profilePage: {
            newPostText: '',
            posts: [
                {
                    id: 1,
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porta ex ut suscipit euismod. In ultricies pharetra purus. Aliquam elementum leo vitae ultrices ullamcorper. In in egestas dolor. Donec pellentesque egestas diam vitae egestas. Maecenas a aliquam sem. Nam mattis fringilla eros, eu tristique ex interdum id. Donec ut porttitor magna.",
                    likesAmount: 374
                },
                {
                    id: 2,
                    text: "Duis rutrum mattis odio, sit amet consequat ipsum mollis convallis. Nulla consectetur metus nec finibus blandit. Fusce sapien orci, commodo at euismod quis, varius ut tortor.",
                    likesAmount: 923
                },
                {
                    id: 3,
                    text: "Nulla venenatis, lectus vitae fermentum vestibulum, tortor libero eleifend mi, nec rutrum purus erat congue ex. Morbi venenatis non enim nec fringilla. Ut convallis pellentesque ante, a sollicitudin tellus malesuada nec. Nunc mauris erat, gravida nec vestibulum ut, iaculis ut nisi. Nulla eu finibus urna. Pellentesque sed odio et lorem ullamcorper consectetur in id nisi. Donec egestas volutpat pharetra. Curabitur a leo nec sapien consequat maximus. Integer nec lectus felis. Ut eget interdum augue. Aenean tincidunt lorem eget accumsan sodales. Aliquam ultrices erat sed risus tincidunt rutrum. Proin ut dictum est. Ut luctus enim massa, a mollis ligula efficitur et. Vivamus nec placerat velit, vel auctor nunc.",
                    likesAmount: 756
                }
            ]
        },
        messagesPage: {
            chatsData: [
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
            ],
            messagesData: [
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
            ]
        },
        friendsPage: {
            friendsData: [
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
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() { },
    addNewPost() {
        let newPost = {
            id: this._state.profilePage.posts.length + 1,
            text: this._state.profilePage.newPostText,
            likesAmount: 0
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber();
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber();
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
}

export default store;