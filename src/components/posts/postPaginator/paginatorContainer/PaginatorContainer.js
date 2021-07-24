import React from "react";
import { ButtonNumberPage } from "../buttonNumberPage/ButtonNumberPage";

export const PaginatorContainer = ({ pages }) => {
    return (
        <div>
            {pages.map((page, index) => {
                return (
                    <ButtonNumberPage itemPage={page} key={index.toString()} />
                );
            })}
        </div>
    );
};
