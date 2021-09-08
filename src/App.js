import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import store from "./redux/store";
import AllQuestions from "./containers/AllQuestions";
import AddQuestion from "./containers/AddQuestion";
import SignUp from "./components/SignUp"
import HomePage from "./containers/HomePage";
import SignIn from "./containers/SignIn";
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles((_) => ({
  root: {
    flexGrow: 1,
  },
  toolbarTitle: {
    flexGrow: 1,
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <ReduxProvider store={store}>
      <Router>
        <div className={classes.root}>

          <AppBar position="static">
            <Toolbar>
            <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            For the Road
          </Typography>
            <Button color="inherit" component={Link} to={"/home"}>
                Let's Play
              </Button>
              <Button color="inherit" component={Link} to={"/all-questions"}>
                All Questions
              </Button>
              <Button color="inherit" component={Link} to={"/add-question"}> 
                Add a Question
              </Button>
            <Button color="inherit" component={Link} to={"/signup"}>
                Sign Up
              </Button>
              <Button color="inherit" variant="outlined" component={Link} to={"/signin"}>
                Sign In
              </Button>
            </Toolbar>
          </AppBar>

          <Switch>
          <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/signin">
              <SignIn/>
            </Route>
            <Route path="/home">
              <HomePage />             
            </Route>
            <Route path="/all-questions">
              <AllQuestions />
            </Route>
            <Route path="/add-question">
              <AddQuestion />
            </Route>
          </Switch>

        </div>
      </Router>
    </ReduxProvider>
  );
}

export default App;