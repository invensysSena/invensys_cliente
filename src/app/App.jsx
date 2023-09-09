import { Router } from "../router/Router";
import "./scrollX.css";
import "../components/efectosCss.css";
import { ToastContainer } from "react-toastify";
import RouterDasboard from "../router/RouterDasboard";
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
