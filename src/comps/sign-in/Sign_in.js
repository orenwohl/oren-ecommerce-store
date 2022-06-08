import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import FormInput from "../form-input/form_input";
import "./sign_in_style.scss";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button_component";

import {
  signInWithhGooglePopUp,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase_utils";

const deafultFormFields = {
  email: "",
  password: "",
};
const SignIn = () => {
  const [formFields, setFormFields] = useState(deafultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(deafultFormFields);
  };

  const SignInWithGoogle = async () => {
    await signInWithhGooglePopUp();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      resetFormFields();
    } catch (err) {
      switch (err.code) {
        case "auth/wrong-password":
          alert("incorrect password");
          break;
        case "auth/user-not-found":
          alert("No user with this email");
          break;
        default:
          console.log(err);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with youre email and password </span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Sign in</Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={SignInWithGoogle}
          >
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};
export default SignIn;
