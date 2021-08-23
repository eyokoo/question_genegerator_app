import { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
// import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  paper: {
    margin: "auto",
    width: 650,
  },
});

const RandomQuestion = (props) => {
  // props will contain {questions, loadQuestions}
  const classes = useStyles();


  function handleClick(event) { //when handleClick is run it will generate a random question

   console.log("you clicked the button to call handleClick")
    // props.loadRandomQuestion();

  //PROBABLY NEED TO USE props.loadRandomQuestions() BUT IT ONLY NEEDS TO LOAD ONE QUESTION
 

  }

  return (
  
      {/**
       * {props.randomQuestion.map((question) => (
        <Typography variant="h5" className={classes.questionId}>   
          {question.questionName}
        </Typography>
       ))}
       */}


    <Button variant="contained" color="secondary" onChange={handleClick} component={Link} to={"/questions/random/:id"}>
        GENERATE QUESTION
      </Button>
  );
}

export default RandomQuestion;
