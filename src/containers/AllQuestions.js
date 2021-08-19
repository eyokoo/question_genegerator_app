import { connect } from "react-redux";
import AllQuestions from "../components/AllQuestions";
import { loadQuestions, deleteQuestion } from "../redux/actions/questionsActions";

function mapStateToProps(state) {
  return {
    questionsArray: state.questionsArray, 
  };
}

const dispatchStateToProps = {
  loadQuestions, 
  deleteQuestion, //function
};

export default connect(mapStateToProps, dispatchStateToProps)(AllQuestions);

// const props = connect(mapStateToProps, dispatchStateToProps);
// the result of connrect will be:

// {questionsArray, loadQuestions}
// export default AllQuestions(props)