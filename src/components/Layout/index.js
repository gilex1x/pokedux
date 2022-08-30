import { Box } from "@mui/material";
import React from "react";
import NavBar from "../NavBar";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <Box>{children}</Box>
    </>
  );
};

export default Layout;
