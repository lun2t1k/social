import ContactMessage from "./ContactMessage";
import UserMessage from "./UserMessage";

export default function MessageArea() {
    return (
        <div className="flex flex-col flex-auto px-5 py-3 border-y-2 overflow-scroll">
            <ContactMessage text="Lorem ipsum" />
            <ContactMessage
                text="Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Maiores qui odit unde corporis."
            />
            <UserMessage text="Lorem ipsum dolor sit amet consectetur" />
            <ContactMessage text="Lorem ipsum dolor sit amet consectetur, adipisicing elit." />
            <UserMessage
                text="Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Maiores qui odit unde corporis. Perspiciatis culpa, magnam
                    corrupti obcaecati repellendus quidem velit voluptatum iure,
                    deserunt cupiditate."
            />
            <ContactMessage
                text="Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Maiores qui odit unde corporis."
            />
            <UserMessage text="Lorem ipsum dolor sit amet consectetur" />
            <ContactMessage text="Lorem ipsum dolor sit amet consectetur, adipisicing elit." />
            <UserMessage
                text="Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Maiores qui odit unde corporis. Perspiciatis culpa, magnam
                    corrupti obcaecati repellendus quidem velit voluptatum iure,
                    deserunt cupiditate."
            />
            <ContactMessage text="Lorem ipsum" />
            <UserMessage
                text="Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Maiores qui odit unde corporis."
            />
            <ContactMessage text="Lorem ipsum dolor sit amet consectetur, adipisicing elit." />
            <UserMessage
                text="Perspiciatis culpa, magnam
                    corrupti obcaecati repellendus quidem velit voluptatum iure,
                    deserunt cupiditate."
            />
        </div>
    );
}
