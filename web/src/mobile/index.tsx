import styles from "./index.module.css";
import { Login } from "./pages/login/index";

function Mobile() {
  return (
    <div className={styles.Desktop}>
      <Login />
    </div>
  );
}

export default Mobile;
