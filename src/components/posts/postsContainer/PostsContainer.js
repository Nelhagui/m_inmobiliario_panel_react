import React from "react";
import { useEffect, useState } from "react";
import { PaginatorContainer } from "../postPaginator/paginatorContainer/PaginatorContainer";
import { PostTable } from "../postTable/PostTable";
import { useContext } from "react";
import { PaginatorContext } from "../../contexts/PaginatorContext";
import "./PostsContainer.css";

export const PostsContainer = ({ url }) => {
    const { changeUrl } = useContext(PaginatorContext);
    const urlBusqueda = (qry) => changeUrl(qry);
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
    const busqueda = (event) => {
        if (event.target.value.trim().length < 1) {
            changeUrl("http://127.0.0.1:8000/api/posts");
        }
        if (event.keyCode === 13) {
            event.preventDefault();
            let newURL = `http://127.0.0.1:8000/api/posts/busqueda?entrada=${event.target.value}`;
            urlBusqueda(newURL);
        }
    };

    return (
        <div className="postsContainer">
            <div className="optionsTable">
                <PaginatorContainer pages={listUrls} />
                <input
                    type="text"
                    placeholder="Buscar"
                    onKeyUp={(e) => busqueda(e)}
                />
            </div>
            <PostTable data={posts} />
        </div>
    );
};
