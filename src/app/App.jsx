import { Router } from "../router/Router";
import "./scrollX.css";
import "../components/efectosCss.css";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <>
    <div>
      <ToastContainer />
        <Router />
      </div>
    </>
  );
}

export default App;
