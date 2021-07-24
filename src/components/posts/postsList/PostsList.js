import React from "react";
import { Link } from "react-router-dom";
import "./PostList.css";

export const PostsList = ({ items }) => {
    return (
        <>
            {items.map((item) => {
                return (
                    <Link to={`/post/edit/${item.id}`} key={item.id}>
                        <h1>{item.title}</h1>
                    </Link>
                );
            })}
        </>
    );
};
