import axios from "axios";
import { useContext, useMemo } from "react";
import { ErrorContext } from "../context/ErrorContext";

const WithAxios = ({ children }) => {
    const { showError } = useContext(ErrorContext);

    useMemo(() => {
        axios.interceptors.response.use(
            (response) => response,
            (error) => {
                showError();
                return error.data;
            }
        );
    }, [showError]);

    return children;
};

export default WithAxios;
