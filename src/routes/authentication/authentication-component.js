import SignUp from "../../comps/sign_up/Sign_up";
import SignIn from "../../comps/sign-in/Sign_in";
import "./authentication_style.scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignIn />
      <SignUp />
    </div>
  );
};
export default Authentication;
