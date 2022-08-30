import React from "react";
import { Box } from "@mui/material";
import AsideMenu from "./Menu";
import SearchBar from "./Searcher";
import logo from "../statics/images/logo_v4.svg";

const NavBar = () => {
  return (
    <Box
      sx={{
        display: "flex ",
        justifyContent: "space-around",
        alignItems: "center",
      }}>
      <img src={logo} width='25%' />
      <SearchBar />
      <AsideMenu />
    </Box>
  );
};

export default NavBar;
