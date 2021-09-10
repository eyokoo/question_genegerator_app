import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import store from "./redux/store";
import AllQuestions from "./containers/AllQuestions";
import AddQuestion from "./containers/AddQuestion";
import EditQuestion from "./containers/EditQuestion";
import Nav from "./components/Nav"
import SignUp from "./containers/SignUp"
import HomePage from "./containers/HomePage";
import SignIn from "./containers/SignIn";


const useStyles = makeStyles((_) => ({
  root: {
    flexGrow: 1,
  },

}));

const App = () => {
  const classes = useStyles();

  const[logedIn, setLogedIn] = useState(true)
  return (
    <ReduxProvider store={store}>
      <Router>
        <div className={classes.root}>
       <Nav logedIn={logedIn} setLogedIn={setLogedIn}/>
          <Switch>
          <Route path="/signup">
              <SignUp logedIn={logedIn} setLogedIn={setLogedIn}/>
            </Route>
            <Route path="/signin">
              <SignIn logedIn={logedIn} setLogedIn={setLogedIn}/>
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
            <Route path="/edit-question/:questionId">
              <EditQuestion />
            </Route>
          </Switch>

        </div>
      </Router>
    </ReduxProvider>
  );
}

export default App;