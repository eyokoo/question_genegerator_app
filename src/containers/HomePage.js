import { connect } from "react-redux";
import HomePage from "../components/HomePage";
import { loadQuestions, loadRandomQuestion } from "../redux/actions/questionsActions";
import categoriesArray from "../consts/categories"; 

const mapStateToProps = (state) => {
  return {
    randomQuestion: state.randomQuestion, 
    categoriesArray,
  };
}

const dispatchStateToProps = {
  loadQuestions,
  loadRandomQuestion
};

export default connect(mapStateToProps, dispatchStateToProps)(HomePage);
