import { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
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

function AllQuestions(props) {
  const classes = useStyles();


  //ComponentDidMount() { }
  useEffect(() => {
    if (props.questionsArray.length === 0) {
      props.loadQuestions(); //this function is like a black box to the dumb component
    }
  }, []); //[] means on load of the page



  //NEED TO MAKE THE DELETE ICON WORK
  const handleDeleteQuestion = (questionId) => {
    props.deleteQuestion(questionId)
  }

  return (
    <TableContainer className={classes.paper} component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>QUESTIONS:</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {props.questionsArray.map((question) => (
            <TableRow key={question.id}>
              <TableCell>{question.question}</TableCell>
              <TableCell>
                <IconButton aria-label="delete" disabled color="primary">
                  <DeleteIcon color="primary"
                    onClick={() => handleDeleteQuestion(question.id)} //by adding another set of paramenters it will not automatically run the onclick event unless it is called
                  />
                </IconButton>

              </TableCell>
            </TableRow>
          ))}
        </TableBody>


      </Table>
    </TableContainer>
  );
}

export default AllQuestions;
