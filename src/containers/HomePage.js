import { connect } from "react-redux";
import HomePage from "../components/HomePage";
import { loadQuestions } from "../redux/actions/questionsActions";


function mapStateToProps(state) {
  return {
    randomQuestion: state.randomQuestion, 
  };
}

const dispatchStateToProps = {
  loadQuestions,
  // loadRandomQuestion
};

export default connect(mapStateToProps, dispatchStateToProps)(HomePage);
