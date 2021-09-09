import { connect } from "react-redux";
import HomePage from "../components/HomePage";
import { loadQuestions, loadRandomQuestion, loadRandomQuestionByC } from "../redux/actions/questionsActions";
import categoriesArray from "../consts/categories"; 

const mapStateToProps = (state) => {
  return {
    randomQuestion: state.randomQuestion, 
    categoriesArray,
    questionsArray: state.questionsArray,
  };
}

const dispatchStateToProps = {
  loadQuestions,
  loadRandomQuestion,
  loadRandomQuestionByC,
};

export default connect(mapStateToProps, dispatchStateToProps)(HomePage);
