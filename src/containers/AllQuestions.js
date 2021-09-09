import { connect } from "react-redux";
import AllQuestions from "../components/AllQuestions";
import { updateQuestion, loadQuestions, deleteQuestion } from "../redux/actions/questionsActions";


const mapStateToProps = (state) => {
  return {
    questionsArray: state.questionsArray,
  };
}

const dispatchStateToProps = {
  loadQuestions, 
  updateQuestion,
  deleteQuestion, //function
};

export default connect(mapStateToProps, dispatchStateToProps)(AllQuestions);

// const props = connect(mapStateToProps, dispatchStateToProps);
// the result of connect will be:

// {questionsArray, loadQuestions}
// export default AllQuestions(props)