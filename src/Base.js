import React, { useEffect } from "react";
import { request } from "./shared/RequestWrapper";

const Base = () => {
    useEffect(() => {
        // GET request
        request({
            url: "https://jsonplaceholder.typicode.com/posts",
        });

        // POST request
        request({
            url: "https://jsonplaceholder.typicode.com/post",
            method: "POST",
            data: {
                title: "foo",
                body: "bar",
                userId: 1,
            },
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        });
    }, []);
    return (
        <div>
            <h1>Base</h1>
        </div>
    );
};

export default Base;
