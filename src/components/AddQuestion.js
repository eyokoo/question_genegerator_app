import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link, useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
// import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";


// import { url } from "inspector"; //WHAT IS THIS? APPEARED OUT OF NOWHERE


const useStyles = makeStyles({
  paper: {
    margin: "auto",
    padding: 50,
    width: 650,
  },
  title: {
    marginBottom: 8,
  },
  textField: {
    display: "block",
    marginBottom: 20,
  },
  button: {
    marginRight: 20,
  },
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

//addQuestion is a function in actions/questionActions which runs the POST API command and returns if postQuestionSuccess was a success or caused an error. This line of code is saying, run the POST API command to add the new questions and once thats done then push it into history stack in "/questions"
function AddQuestion(props) {
  const classes = useStyles();

  let history = useHistory(); //defined to push a new entry onto the history stack
  const [question, setQuestion] = useState({ questionName: "", categoryId:""}) 

  function handleInputChanges(event) {
    const { name, value } = event.target; //I DONT UNDERSTAND WHY IM USING "VALUE" HERE

    setQuestion((previousQuestion) => ({
      ...previousQuestion,
      [name]: value,
    }));
  }

  function handleFormSubmit(event) { //when handleFormSubmit is clicked it will add the question to the AddQuestion function
    event.preventDefault(); //prevent from page to reload

    props.addQuestion(question) //.addQuestion is a black box function
      .then(() => history.push("/questions"));


  }

  return (
    <Paper className={classes.paper} elevation={3}>
      <Typography variant="h5">
        Add a new question
      </Typography>
      <form onSubmit={handleFormSubmit}>
       
        <TextField>
          required
          className={classes.textField}
          fullWidth
          name="questionName"
          label="Type new question here"
          variant="outlined"
          value={question.questionName}
          onChange={handleInputChanges}
          </TextField>

          <TextField
          select
          required
          name = "categoryId"
          label="Category"
          value={question.categoryId}
          onChange={handleInputChanges}
          helperText="Please select your category"
        >
          {props.categoriesArray.map((category) => ( //whatever name i provide in my smart component/conatainer is what i should use here
            <MenuItem key={category.name} value={category.id}>
              {category.name}
            </MenuItem>
          ))}
        </TextField>
        <div>
          <Button className={classes.button} variant="outlined" color="primary" type="submit">
            SAVE
          </Button>

          <Button variant="outlined" component={Link} to={"/all-questions"}> {/**redirecting. You can see this on App.js under the Switch Component*/}
            CANCEL
          </Button>
        </div>

      </form>
    </Paper>
  );
}

export default AddQuestion;
