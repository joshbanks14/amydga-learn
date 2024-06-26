import { useState } from "react";
import { usePortal } from "../../../context/portalContext";
import { Input } from "../../text-input/input";
import styles from "../Portal.module.css";

export const SignupPortal = () => {
  const { setPageType } = usePortal();
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isPasswordValid = (password: string) => {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*]/.test(password);

    if (password.length < minLength) {
      setPasswordError(
        `Password must be at least ${minLength} characters long.`
      );
      return false;
    }
    if (!hasUpperCase) {
      setPasswordError("Password must contain at least one uppercase letter.");
      return false;
    }
    if (!hasLowerCase) {
      setPasswordError("Password must contain at least one lowercase letter.");
      return false;
    }
    if (!hasNumber) {
      setPasswordError("Password must contain at least one number.");
      return false;
    }
    if (!hasSpecialChar) {
      setPasswordError(
        "Password must contain at least one special character (!@#$%^&*)."
      );
      return false;
    }
    setPasswordError("");
    return true;
  };

  const onSubmit = () => {
    if (isPasswordValid(password)) {
      console.log("Error!");
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
