import ChatsItem from "./ChatsItem";

export default function ChatsList(props) {
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

    let chatsElements = chatsData.map((chat) => (
        <ChatsItem
            key={chat.id}
            userID={chat.id}
            userName={chat.name}
            userAvatar={chat.avatar}
            lastMessage={chat.lastMessage}
        />
    ));

    return <div className="h-full overflow-scroll">{chatsElements}</div>;
}
