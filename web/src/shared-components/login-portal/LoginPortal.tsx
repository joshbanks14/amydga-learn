import { Input } from "../text-input/input";
import styles from "./LoginPortal.module.css";

export const LoginPortal = () => {
  return (
    <>
      <div className={styles.loginPortal}>
        <div className={styles.title}>Welcome Back.</div>
        <div className={styles.emailInput}>
          <Input locked={false} active={false} label="Email Address" />
        </div>
        <div className={styles.passwordInput}>
          <Input locked={false} active={false} label="Password" />
        </div>
        <div className={styles.forgotPassword}>
          <label style={{ color: "white", cursor: "pointer" }}>
            Forgotten password?
          </label>
        </div>
        <button className={styles.loginButton}>Login</button>
        <label className={styles.signup}>Need an account? Sign up here.</label>
      </div>
    </>
  );
};
