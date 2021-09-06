import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles({
  root: {
    margin: "0 auto",
    width: 400,
  },
  title: {
    marginBottom: 16,
  },
  textField: {
    display: "block",
    marginBottom: 20,
  },

  button: {
    marginRight: 20,
  },
});

const SignUp = (props) => {
  const classes = useStyles();

  const [newUser, setNewUser] = useState({ email: "", password: "", name: "" });

  const handleInputChanges = (event) => {
    const { name, value } = event.target;

    setNewUser((previousNewUser) => ({
      ...previousNewUser,
      [name]: value,
    }));
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(newUser);
    //NEED TO CODE THIS OUT

  }

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} variant="h5">
          Sign Up to Over Coffee
        </Typography>
        <form onSubmit={handleFormSubmit}>
          <TextField
            required
            className={classes.textField}
            fullWidth
            name="name"
            label="Name"
            variant="outlined"
            value={newUser.name}
            onChange={handleInputChanges}
          />
          <TextField
            required
            className={classes.textField}
            fullWidth
            name="email"
            label="Email"
            type="email"
            variant="outlined"
            value={newUser.email}
            onChange={handleInputChanges}
          />
          <TextField
            required
            className={classes.textField}
            fullWidth
            name="password"
            label="Password"
            type="password"
            variant="outlined"
            value={newUser.password}
            onChange={handleInputChanges}
          />
          <div>
            <Button
              type="submit"
              className={classes.button}
              variant="contained"
              color="primary"
              onClick={handleFormSubmit}
              component={Link} to={"/signin"}
            >
              Sign up
            </Button>
            <Button variant="outlined" color="primary" component={Link} to={"/signin"}>
              Cancel
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

export default SignUp;