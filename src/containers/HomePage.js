import { connect } from "react-redux";
import HomePage from "../components/HomePage";
import { loadQuestions } from "../redux/actions/questionsActions";


function mapStateToProps(state) {
  return {
    questionsArray: state.questionsArray, 
  };
}

const dispatchStateToProps = {
  loadQuestions, 
};

export default connect(mapStateToProps, dispatchStateToProps)(AllQuestions);
