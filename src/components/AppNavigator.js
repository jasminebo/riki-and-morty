import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles(({ theme }) => ({
  AppBar: {
    backgroundColor: "black",
  },
  link: {
    textDecoration: "none",
  },
  title: {
    cursor: "pointer",
    color: "white",
  },
}));

export default function AppNavigator() {
  const classes = useStyles();
  return (
    <AppBar className={classes.AppBar} position="fixed" variane="h6">
      <Toolbar>
        <Link to="/" className={classes.link}>
          <Typography className={classes.title}>Ricki & Morty</Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
