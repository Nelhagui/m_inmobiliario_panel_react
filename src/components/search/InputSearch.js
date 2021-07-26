import React from "react";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import { useContext } from "react";
import { PaginatorContext } from "../contexts/PaginatorContext";
import { TextField } from "@material-ui/core";

export const InputSearch = () => {
    const { changeUrl } = useContext(PaginatorContext);
    const urlBusqueda = (qry) => changeUrl(qry);

    const busqueda = (event) => {
        console.log(event.target.value.trim().length);
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
        <TextField
            id="outlined-basic"
            label="Buscar"
            autoComplete="off"
            variant="outlined"
            onKeyUp={(e) => busqueda(e)}
            InputProps={{
                endAdornment: (
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                ),
            }}
        />
    );
};
