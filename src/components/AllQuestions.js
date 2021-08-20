import { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
// import FormControl from '@material-ui/core/FormControl';
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  paper: {
    margin: "auto",
    width: 650,
  },
});

const AllQuestions = (props) => {
 const classes = useStyles();

 // props will contain {questions, loadQuestions}
  //ComponentDidMount() { }
  useEffect(() => { //I DONT UNDERSTANT THIS USEEFFECT FUNCTION
    if (props.questions.length === 0) {
      props.loadQuestions(); //this function is like a black box to the dumb component
    }
  }, []); //[] means on load of the page



  const handleDeleteQuestion = (questionId) => {
    props.deleteQuestion(questionId)
  }

  return (
    <TableContainer className={classes.paper} component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {props.questions.map((question) => ( //DOES THIS NEED TO BE PROPS.QUESTIONSARRAY.MAP...?
            <TableRow key={question.id}>
              <TableCell>{question.question_name}</TableCell>
              <TableCell>
                <IconButton
                className ={classes.deleteButton}
                color="primary"
                aria-label="delete question"
                component="span"
                onClick={() => handleDeleteQuestion(question.id)} //by adding another set of paramenters it will not automatically run the onclick event unless it is called
                /> 
              </TableCell>
            </TableRow>
          ))}
        </TableBody>


      </Table>
    </TableContainer>
  );
}

export default AllQuestions;
