import Desktop from "./desktop";
import Mobile from "./mobile";
import { useWindowDimensions } from "./shared-components/window-dimensions/use-window-dimensions";

function App() {
  const { width } = useWindowDimensions();
  const isDesktop = width >= 1095;

  return <>{isDesktop ? <Desktop /> : <Mobile />}</>;
}

export default App;
