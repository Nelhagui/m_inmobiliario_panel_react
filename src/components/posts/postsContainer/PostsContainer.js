import React from "react";
import { useEffect, useState } from "react";
import { PaginatorContainer } from "../postPaginator/paginatorContainer/PaginatorContainer";
import { PostTable } from "../postTable/PostTable";
import { InputSearch } from "../../search/InputSearch";
import "./PostsContainer.css";

export const PostsContainer = ({ url }) => {
    const [posts, setPosts] = useState([]);
    const [listUrls, setListUrls] = useState([]);

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((res) => setDatas(res));
    }, [url]);

    const setDatas = (res) => {
        setListUrls(res.links);
        setPosts(res.data);
    };

    return (
        <div className="postsContainer">
            <div className="optionsTable">
                <PaginatorContainer pages={listUrls} />
                <InputSearch />
            </div>
            <PostTable data={posts} />
        </div>
    );
};
