import Post from "./Post/Post";

export default function Posts() {
    return (
        <div className="posts">
            <Post
                postUserAvatar=""
                postUserName="User Name"
                postText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porta ex ut suscipit euismod. In ultricies pharetra purus. Aliquam elementum leo vitae ultrices ullamcorper. In in egestas dolor. Donec pellentesque egestas diam vitae egestas. Maecenas a aliquam sem. Nam mattis fringilla eros, eu tristique ex interdum id. Donec ut porttitor magna."
                postLikesAmount="152"
            />
            <Post
                postUserAvatar=""
                postUserName="User Name"
                postText="Duis rutrum mattis odio, sit amet consequat ipsum mollis convallis. Nulla consectetur metus nec finibus blandit. Fusce sapien orci, commodo at euismod quis, varius ut tortor."
                postLikesAmount="394"
            />
            <Post
                postUserAvatar=""
                postUserName="User Name"
                postText="Nulla venenatis, lectus vitae fermentum vestibulum, tortor libero eleifend mi, nec rutrum purus erat congue ex. Morbi venenatis non enim nec fringilla. Ut convallis pellentesque ante, a sollicitudin tellus malesuada nec. Nunc mauris erat, gravida nec vestibulum ut, iaculis ut nisi. Nulla eu finibus urna. Pellentesque sed odio et lorem ullamcorper consectetur in id nisi. Donec egestas volutpat pharetra. Curabitur a leo nec sapien consequat maximus. Integer nec lectus felis. Ut eget interdum augue. Aenean tincidunt lorem eget accumsan sodales. Aliquam ultrices erat sed risus tincidunt rutrum. Proin ut dictum est. Ut luctus enim massa, a mollis ligula efficitur et. Vivamus nec placerat velit, vel auctor nunc."
                postLikesAmount="139"
            />
        </div>
    );
}
