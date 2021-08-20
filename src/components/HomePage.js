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

  //ComponentDidMount() { }
  //DO I NEED THIS USEEFFECT? WHAT IS THIS FOR??
  useEffect(() => {
    if (props.questions.length === 0) {
      props.loadQuestions(); //this function is like a black box to the dumb component
    }
  }, []); //[] means on load of the page

  const [question, setQuestion] = useState({ questionName: "", categoryId:""}) 

  function handleClick(event) { //when handleClick is run it will generate a random question
    event.preventDefault(); //prevent from page to reload

   console.log("you clicked the button to call handleClick")

  //PROBABLY NEED TO USE props.loadQuestions() BUT IT ONLY NEEDS TO LOAD ONE QUESTION
  //HOW WILL IT KNOW TO RUN THE SQL QUERY ON THE BACKEND. probably with the to={"route"}

  }

  return (
  
      {/**
       * {props.questionsArray.map((question) => (
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
