import { connect } from "react-redux";
import AddQuestion from "../components/AddQuestion";
import { postQuestion } from "../redux/actions/questionsActions";
import categories from "../consts/categories";

function mapStateToProps(state){
  return {
    categories
  };
}
const dispatchStateToProps = {
  //[key]: value
  //  adQuestion: addQuestion,
  postQuestion,
};

//the store has to state whatever it gets saved (ex. questions: []  that is in my state.js) in order to allow the dumb component to know about questions:[] it has to expose the state
//the function connect comes from import { connect } from "react-redux";
//the connect requires two parameters: first param is what you want to expose to your dumb component into your store (in my case questions:[]). Second params is what allows you to make modifications to the store through dispatching actions


//dispath --> action --> reducer --> new State (aka. new values inside,in my case, questions:[] )

//I am creating an object called dispatchSateToProps, that file contains all the potential actions I can perform into the store

export default connect(mapStateToProps, dispatchStateToProps)(AddQuestion);