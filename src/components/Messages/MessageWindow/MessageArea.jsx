import ContactMessage from "./ContactMessage";
import UserMessage from "./UserMessage";

export default function MessageArea() {
    return (
        <div className="flex flex-col justify-end flex-wrap-reverse flex-auto px-5 mb-5">
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
        </div>
    );
}
