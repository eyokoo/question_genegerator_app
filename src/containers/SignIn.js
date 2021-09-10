import { connect } from "react-redux";
import SignIn from "../components/SignIn";
import { signInUser } from "../redux/actions/userActions";

const mapStateToProps = (state) =>{
  return{
    logedIn: state.logedIn,
  }
}
const dispatchStateToProps = {
  signInUser,
};

export default connect(mapStateToProps, dispatchStateToProps)(SignIn);