import React, { createContext } from "react";

export const ErrorContext = createContext();

export const ErrorProvider = ({ children }) => {
    const showError = () => {
        console.log("ERROR occurred");
    };

    return (
        <ErrorContext.Provider
            value={{
                showError,
            }}
        >
            {children}
        </ErrorContext.Provider>
    );
};
