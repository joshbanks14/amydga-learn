import { useAuth } from "../context/authContext";
import styles from "./index.module.css";
import { Home } from "./pages/home";
import { Login } from "./pages/login";

function Desktop() {
  const { userLoggedIn } = useAuth();
  return (
    <div className={styles.Desktop}>{userLoggedIn ? <Home /> : <Login />}</div>
  );
}

export default Desktop;
