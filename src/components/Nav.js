import React, { Component } from 'react';
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((_) => ({
  toolbarTitle: {
    flexGrow: 1,
  },
}));

const Nav = ({ logedIn, setLogedIn }) => {


  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
          For the Road
          </Typography>

        {logedIn && (
          <div>
            <Button color="inherit" component={Link} to={"/home"}>
              Let's Play
              </Button>
            <Button color="inherit" component={Link} to={"/all-questions"}>
              All Questions
              </Button>
            <Button color="inherit" component={Link} to={"/add-question"}>
              Add a Question
              </Button>
            <Button onClick={() => { setLogedIn(false) }} color="inherit" variant="outlined" component={Link} to={"/signin"}>
              Sign Out
              </Button>
          </div>
        )}
        {!logedIn && (
          <div>
            <Button color="inherit" component={Link} to={"/signup"}>
              Sign Up
              </Button>
            <Button color="inherit" variant="outlined" component={Link} to={"/signin"}>
              Sign In
              </Button>
          </div>
        )}
      </Toolbar>
    </AppBar>

  )
}

export default Nav;