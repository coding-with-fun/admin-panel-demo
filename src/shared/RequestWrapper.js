import axios from "axios";

axios.interceptors.request.use((config) => {
    return config;
});

axios.interceptors.response.use((response) => {
    // ! TODO: Comment it for successful response
    // throw response.data;

    // * Change the response according to the response from server.
    return response.data;
});

export const request = async ({
    url,
    method = "GET",
    params,
    data,
    headers,
}) => {
    const res = await axios.request({
        url,
        method,
        params,
        data,
        headers,
    });

    return res;
};
