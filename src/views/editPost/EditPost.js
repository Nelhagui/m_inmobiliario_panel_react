import React from "react";
import { useEffect, useState } from "react";
import "./EditPost.css";

export const EditPost = ({ match }) => {
    const [post, setPost] = useState({});
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/post/edit/${match.params.id}`)
            .then((response) => response.json())
            .then((res) => setPost(res));
    }, [match]);

    return (
        <div className="form_edit_post">
            <h1>Editar Artículo {match.params.url}</h1>
            <label htmlFor="title">Titulo</label>
            <input type="text" value={post.title} name="title" />
            <hr />
            <label htmlFor="title">URL</label>
            <input type="text" value={post.permanent_link} name="title" />
            <hr />
            <label htmlFor="content">Contenido</label>
            <textarea type="text" value={post.content} name="content" />
            <hr />
            <label htmlFor="tags">Etiquetas</label>
            <textarea type="text" value={post.tags} name="tags" />
        </div>
    );
};
