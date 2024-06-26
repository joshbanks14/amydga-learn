import { useState } from "react";
import { usePortal } from "../../../context/portalContext";
import { Input } from "../../text-input/input";
import styles from "../Portal.module.css";
import {
  emailValidator,
  passwordValidator,
  passwordsMatchChecker,
} from "./signup-validation";
import { useAuthHelper } from "../../../firebase/auth";
import { UserCredential } from "firebase/auth";
import { useAuth } from "../../../context/authContext";

export const SignupPortal = () => {
  const { setPageType } = usePortal();
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordConfirmError, setPasswordConfirmError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const { doCreateUserWithEmailAndPassword } = useAuthHelper();
  const { setCurrentUser, setUserLoggedIn } = useAuth();

  const onSubmit = () => {
    const { isValid: isPasswordValid, message: passwordMessage } =
      passwordValidator(password);
    const { isValid: isEmailValid, message: emailMessage } =
      emailValidator(email);
    const doPasswordsMatch = passwordsMatchChecker(password, passwordConfirm);

    setPasswordError(passwordMessage);
    setEmailError(emailMessage);
    setPasswordConfirmError(doPasswordsMatch ? "" : "Passwords do not match!");

    if (isPasswordValid && isEmailValid && doPasswordsMatch) {
      doCreateUserWithEmailAndPassword(email, password).then(
        (user: UserCredential) => {
          setCurrentUser(user);
          setUserLoggedIn(true);
        }
      );
    }
  };

  return (
    <>
      <div className={styles.portal}>
        <div className={styles.titleGroup}>
          <div className={styles.title} style={{ fontWeight: "250" }}>
            Welcome.
          </div>
          <div className={styles.title}>Create Account.</div>
        </div>
        <div className={styles.emailInput}>
          <Input
            id="email"
            locked={false}
            active={false}
            label="Email Address"
            errorMessage={emailError}
            value={email}
            setValue={setEmail}
          />
        </div>
        <div className={styles.passwordInput}>
          <Input
            id="password"
            locked={false}
            active={false}
            label="Password"
            isPassword={true}
            errorMessage={passwordError}
            value={password}
            setValue={setPassword}
          />
        </div>
        <div className={styles.passwordInput}>
          <Input
            id="passwordconfirm"
            locked={false}
            active={false}
            label="Confirm Password"
            isPassword={true}
            errorMessage={passwordConfirmError}
            value={passwordConfirm}
            setValue={setPasswordConfirm}
          />
        </div>
        <button className={styles.submitButton} onClick={onSubmit}>
          Sign Up
        </button>
        <label className={styles.signup} onClick={() => setPageType("login")}>
          Already have an account? Login here.
        </label>
      </div>
    </>
  );
};
