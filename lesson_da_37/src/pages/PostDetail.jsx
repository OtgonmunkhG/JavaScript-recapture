import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function PostDetail() {
    const {postId} = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response => response.json())
        .then(data => setPost(data))
        .catch(error => console.error("error",error));
    }, [postId]);
    
    console.log(post);

    console.log("Heloooooooo")

    if (!post) return <div>Loading ...</div>;
    return (
        <div>
            <h1 className="text-3xl font-bold"> {post.title}</h1>
            <p>{post.body}</p>
        </div>
    )
}