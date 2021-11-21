import React, { useEffect } from "react";
import { request } from "./shared/RequestWrapper";

const Base = () => {
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        // GET request
        const responseOne = await request({
            url: "https://jsonplaceholder.typicode.com/posts",
        });
        console.log(responseOne);

        // POST request
        const responseTwo = await request({
            url: "https://jsonplaceholder.typicode.com/posts",
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
        console.log(responseTwo);
    };

    return (
        <div>
            <h1>Base</h1>
        </div>
    );
};

export default Base;
