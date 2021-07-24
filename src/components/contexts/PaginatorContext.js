import { createContext, useState } from "react";
export const PaginatorContext = createContext({});
export const PaginatorProvider = ({ children }) => {
    const [url, setUrl] = useState("http://127.0.0.1:8000/api/posts");
    const changeUrl = (newurl) => {
        setUrl(newurl);
    };
    return (
        <PaginatorContext.Provider value={{ changeUrl, url }}>
            {children}
        </PaginatorContext.Provider>
    );
};
