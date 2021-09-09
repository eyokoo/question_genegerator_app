import { connect } from "react-redux";
import SignUp from "../components/SignUp";
import { signUpUser } from "../redux/actions/userActions";

const dispatchStateToProps = {
  signUpUser,
};

export default connect(null, dispatchStateToProps)(SignUp);