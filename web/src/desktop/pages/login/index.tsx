import { LoginPortal } from "../../../shared-components/account-portals/login-portal/LoginPortal";
import styles from "./index.module.css";
import { SignupPortal } from "../../../shared-components/account-portals/signup-portal/SignupPortal";
import { usePortal } from "../../../context/portalContext";

export const Login = () => {
  const { pageType } = usePortal();
  return (
    <>
      <div className={styles.login}>
        <div className={styles.content}>
          {pageType === "login" && <LoginPortal />}
          {pageType === "signup" && <SignupPortal />}
        </div>
        <div className={styles.branding}></div>
      </div>
    </>
  );
};
