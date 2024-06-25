import { LoginPortal } from "../../../shared-components/login-portal/LoginPortal";
import styles from "./index.module.css";

export const Login = () => {
  return (
    <>
      <div className={styles.login}>
        <div className={styles.content}>
          <LoginPortal />
        </div>
        <div className={styles.branding}></div>
      </div>
    </>
  );
};
