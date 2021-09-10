import { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import { useHistory } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
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
  tableCellIcon:{
    minWidth: "150px",
  }
});

const AllQuestions = (props) => {
  const classes = useStyles();

  //ComponentDidMount() { }
  useEffect(() => {
    if (props.questionsArray.length === 0) {
      props.loadQuestions(); //this function is like a black box to the dumb component
    }
  }, [props.questionsArray]); //[] means on load of the page

  const [question, setQuestion] = useState(props.question);
  const handleInputChanges = (event) => {
    const { name, value } = event.target;

    setQuestion((previousQuestion) => ({
      ...previousQuestion,
      [name]: value,
    }));
  }
  const history = useHistory();
  const handleUpdateQuestion = (questionId) => {
    props.updateQuestion(questionId).then(() => history.push(`/edit-question/${questionId}`));
  }

  //NEED TO MAKE THE DELETE ICON WORK
  const handleDeleteQuestion = (questionId) => {
  console.log("***handleDeleteQuestion")
    props.deleteQuestion(questionId)
    props.loadQuestions();
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
              <TableCell> {question.question} </TableCell>
              <TableCell className={classes.tableCellIcon}>
                <IconButton aria-label="delete" color="primary" 
                onClick={() => handleDeleteQuestion(question.id)}> 
                 
                  <DeleteIcon color="primary"
                  />
                </IconButton>
                <IconButton onClick={() => handleUpdateQuestion(question.id)}>
                  <EditIcon color="primary"
                    
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
