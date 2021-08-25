import { makeStyles } from "@material-ui/core/styles";
// import { useState } from "react";
import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: "auto",
    width: 650,
  },
  root: {
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  },
}));

function RandomQuestion(props) {
  // props will contain {questions, loadQuestions}
  const classes = useStyles();
  const [question, setQuestion] = useState({ questionName: "", questionId:""})



  function handleClick() { //when handleClick is run it will generate a random question

    console.log("you clicked the button to call handleClick")

    props.loadRandomQuestion(question)
   .then(()=> setQuestion.questionName);

    //PROBABLY NEED TO USE props.loadRandomQuestions() BUT IT ONLY NEEDS TO LOAD ONE QUESTION

  }

  return (

    <p className={classes.root}>{"This div's text looks like that of a button."}</p>

    {/* {props.randomQuestion.map((question) => {
      <div>
      
      {question.questionName}
      
      </div>
    })}
    </div>
     */}


  < Button variant="contained" color="secondary" onClick={handleClick} component={Link} to={"/questions/random/:id"} >
    GENERATE QUESTION
      </Button >
  );
}

export default RandomQuestion;
