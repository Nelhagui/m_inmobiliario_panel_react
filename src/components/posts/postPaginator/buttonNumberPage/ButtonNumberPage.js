import React from "react";
import { useContext } from "react";
import { PaginatorContext } from "../../../contexts/PaginatorContext";
import "./ButtonNumberPage.css";

export const ButtonNumberPage = ({ itemPage }) => {
    const { changeUrl } = useContext(PaginatorContext);

    const clickUrl = (inUrl) => changeUrl(inUrl);
    let label =
        itemPage.label === "Next &raquo;"
            ? ">"
            : itemPage.label === "&laquo; Previous"
            ? "<"
            : itemPage.label;
    let stateHove = itemPage.url !== null ? "buttonPage hov" : "buttonPage";

    return (
        <>
            <button
                href={itemPage.url}
                onClick={() => clickUrl(itemPage.url)}
                className={`${stateHove} ${itemPage.active ? "active" : ""}`}
                disabled={itemPage.url ? "" : "disabled"}
            >
                <span>{label}</span>
            </button>
        </>
    );
};
