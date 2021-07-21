import React from 'react';
import { PostsList } from '../postsList/PostsList';
import { useEffect, useState } from 'react';

export const PostsContainer = () => {
    const [posts, setPosts] = useState([]);
    useEffect (() => {
        fetch('https://mocki.io/v1/52417dc9-9734-467f-add8-453ec4e0928b')
        .then((response) => response.json())
        .then((res)=> setPosts(res.data))
    }, []);
    return (
        <div className="postsContainer">
            <PostsList items={posts}/>
        </div>
    )
}
