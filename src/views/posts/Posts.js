import React from "react";
import { PostsContainer } from "../../components/posts/postsContainer/PostsContainer";
import "./Posts.css";
import { useContext } from "react";
import { PaginatorContext } from "../../components/contexts/PaginatorContext";

export const Posts = () => {
    const { url } = useContext(PaginatorContext);
    return (
        <div className="sectionPost">
            <h1>Entradas</h1>
            <PostsContainer url={url} />
        </div>
    );
};
