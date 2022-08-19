import { Box } from "@mui/material";
import React, { ReactNode } from "react";

const wrapperStyle = {
    maxWidth: '500px',
    height: '100vh',
    margin: 'auto',
    backgroundColor: "#080808",
    
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
}

export default function Wrapper({ children }: any) {
    return (
        <Box sx={wrapperStyle}>
            {children}
        </Box>
    )
}