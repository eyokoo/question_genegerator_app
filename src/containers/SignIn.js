import { connect } from "react-redux";
import SignIn from "../components/SignIn";
import { signInUser } from "../redux/actions/userActions";

const dispatchStateToProps = {
  signInUser,
};

export default connect(null, dispatchStateToProps)(SignIn);