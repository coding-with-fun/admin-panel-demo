import { SnackbarContent } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import React, { useContext } from "react";
import { ErrorContext } from "../context/ErrorContext";

const SnackBarComponent = () => {
    const { snackbarDetails, hideError } = useContext(ErrorContext);

    const statusToColor = {
        error: "#E36B2D",
        warning: "#FDD7C6",
        information: "#C8E8E5",
        success: "#88ADDB",
    };
    const statusToTextColor = {
        error: "#F3F3F3",
        success: "#F3F3F3",
        information: "#707070",
        warning: "#707070",
    };

    return (
        <Snackbar
            anchorOrigin={{
                horizontal: "center",
                vertical: "top",
            }}
            autoHideDuration={snackbarDetails.duration || 5000}
            message={snackbarDetails.message}
            open={snackbarDetails.open}
            onClose={hideError}
        >
            <SnackbarContent
                style={{
                    fontFamily: "RobotoMediumItalic",
                    fontSize: "20px",
                    color: statusToTextColor[snackbarDetails.status],
                    backgroundColor: statusToColor[snackbarDetails.status],
                    borderRadius: "15px",
                    padding: "8px 50px",
                }}
                message={snackbarDetails.message}
            />
        </Snackbar>
    );
};

export default SnackBarComponent;
