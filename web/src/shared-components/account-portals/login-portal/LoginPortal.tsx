import { useState } from "react";
import { usePortal } from "../../../context/portalContext";
import { Input } from "../../text-input/input";
import styles from "../Portal.module.css";
import { useAuthHelper } from "../../../firebase/auth";
import { UserCredential } from "firebase/auth";
import { useAuth } from "../../../context/authContext";

export const LoginPortal = () => {
  const { setPageType } = usePortal();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);

  const { doSignInWithEmailAndPassword } = useAuthHelper();
  const { setCurrentUser, setUserLoggedIn } = useAuth();

  const onSubmit = () => {
    doSignInWithEmailAndPassword(email, password)
      .then((user: UserCredential) => {
        setCurrentUser(user);
        setUserLoggedIn(true);
      })
      .catch((error: any) => {
        handleErrorMessage();
      });
  };

  const handleErrorMessage = () => {
    setShowError(true);
    const errorTimeout = setTimeout(() => {
      setShowError(false);
    }, 3000);
    return () => {
      clearTimeout(errorTimeout);
    };
  };

  return (
    <>
      <div className={styles.portal}>
        <div className={styles.titleGroup}>
          <div className={styles.title} style={{ fontWeight: "250" }}>
            Welcome Back.
          </div>
          <div className={styles.title}>Login Here.</div>
        </div>
        <div className={styles.emailInput}>
          <Input
            id="email"
            locked={false}
            active={false}
            label="Email Address"
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
            value={password}
            setValue={setPassword}
          />
        </div>
        <div className={styles.forgotPassword}>
          <label style={{ color: "white", cursor: "pointer" }}>
            Forgotten password?
          </label>
        </div>
        <button className={styles.submitButton} onClick={onSubmit}>
          Login
        </button>
        <label
          className={
            showError ? styles.errorMessageActive : styles.errorMessageInactive
          }
        >
          The email and password provided do not match. Please try again!
        </label>
        <label className={styles.signup} onClick={() => setPageType("signup")}>
          Need an account? Sign up here.
        </label>
      </div>
    </>
  );
};
