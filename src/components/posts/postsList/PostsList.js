import React from 'react';
import { Link } from 'react-router-dom';

export const PostsList = ({items}) => {
    return (
        // <div className="postsList">
        // </div>
        <>
        {items.map((item)=>{
            return (
                <Link to={`/post/edit/${item.id}`} key={item.id}>
                    <h1>{item.title}</h1>
                </Link>
            )
        })}
    </>
    )
}
