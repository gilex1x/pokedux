import React from "react";
import { Grid } from "@mui/material";
import AsideMenu from "./AsideMenu.jsx";
import SearchBar from "./Searcher.jsx";
import logo from "../statics/images/logo_v4.svg";

const NavBar = () => {
  return (
    <Grid
      sx={{
        display: "flex ",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "8px",
      }}
      container>
      <Grid item>
        <img src={logo} width='50%' alt='logo-pokedux'/>
      </Grid>
      <Grid item>
        <SearchBar />
      </Grid>
      <Grid item>
        <AsideMenu />
      </Grid>
    </Grid>
  );
};

export default NavBar;
