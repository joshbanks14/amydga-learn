import styles from "./App.module.css";
import { Login } from "./pages/login";

function Desktop() {
  return (
    <div className={styles.Desktop}>
      <Login />
    </div>
  );
}

export default Desktop;
