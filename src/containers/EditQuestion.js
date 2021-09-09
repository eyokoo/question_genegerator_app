import { connect } from "react-redux";
import EditQuestion from "../components/EditQuestion";
import { updateQuestion } from "../redux/actions/questionsActions";
import categoriesArray from "../consts/categories"; 

const mapStateToProps = (state) => {
  return {
    categoriesArray,
    questionsArray: state.questionsArray, //getting data from outside of the state under consts/categories
    //whatever i put in mapStateToProps is what i want to display in my component
  };
}
const dispatchStateToProps = {
  //[key]: value
  updateQuestion,
};

export default connect(mapStateToProps, dispatchStateToProps)(EditQuestion);