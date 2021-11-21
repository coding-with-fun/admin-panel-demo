import axios from "axios";

axios.interceptors.request.use((config) => {
    return config;
});

axios.interceptors.response.use((response) => {
    // * Change the response according to the response from server.
    if ([200, 201].includes(response.status)) {
        return response.data;
    } else {
        throw response;
    }
});

export const request = async ({
    url,
    method = "GET",
    params,
    data,
    headers,
}) => {
    const BASE_URL = "https://jsonplaceholder.typicode.com";
    const res = await axios.request({
        url: BASE_URL + url,
        method,
        params,
        data,
        headers,
    });

    return res;
};
