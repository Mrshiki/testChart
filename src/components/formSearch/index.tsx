import React from 'react';
import {Box, Button, TextField} from "@mui/material";
import {FormSearchProps} from "./FormSearchType";

export const FormSearch = ({handleSubmit, setUserName}: FormSearchProps) => {

    const searchUserChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <Box
                sx={{
                    p: 2,
                    bgcolor: "background.default",
                    display: "grid",
                    gridTemplateColumns: { md: "1fr" },
                    gap: 2,
                }}
            >
                <TextField
                    id="outlined-basic"
                    label="Enter user"
                    variant="outlined"
                    onChange={searchUserChange}
                />

                <Button type="submit" variant="outlined">
                    Найти
                </Button>
            </Box>
        </form>
    );
};
