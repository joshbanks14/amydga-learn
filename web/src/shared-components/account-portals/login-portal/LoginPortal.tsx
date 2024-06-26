import { useState } from "react";
import { usePortal } from "../../../context/portalContext";
import { Input } from "../../text-input/input";
import styles from "../Portal.module.css";

export const LoginPortal = () => {
  const { setPageType } = usePortal();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
        <button className={styles.submitButton}>Login</button>
        <label className={styles.signup} onClick={() => setPageType("signup")}>
          Need an account? Sign up here.
        </label>
      </div>
    </>
  );
};
