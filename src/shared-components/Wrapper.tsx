import { Box } from "@mui/material";
import React, { ReactNode } from "react";

const wrapperStyle = {
  maxWidth: "500px",
  margin: "auto",
  backgroundColor: "#f0f0f0",
  boxShadow: "0px 0px 60px rgb(0,0,0,0.1)",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

export default function Wrapper({ children }: any) {
  return <Box sx={wrapperStyle}>{children}</Box>;
}
