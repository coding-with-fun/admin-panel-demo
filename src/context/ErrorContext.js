import React, { createContext, useState } from "react";

export const ErrorContext = createContext();

export const ErrorProvider = ({ children }) => {
    const initialSnackbarDetails = {
        open: false,
        message: "",
        duration: 3000,
        status: "error",
    };

    const [snackbarDetails, setSnackbarDetails] = useState(
        initialSnackbarDetails
    );

    const showError = () => {
        setSnackbarDetails((snackbarDetails) => {
            return {
                ...snackbarDetails,
                message: "Something went wrong",
                open: true,
            };
        });
        console.log("ERROR occurred");
    };

    const hideError = () => {
        setSnackbarDetails((snackbarDetails) => {
            return {
                ...snackbarDetails,
                message: "",
                open: false,
            };
        });
        console.log("ERROR closed");
    };

    return (
        <ErrorContext.Provider
            value={{
                snackbarDetails,

                showError,
                hideError,
            }}
        >
            {children}
        </ErrorContext.Provider>
    );
};
