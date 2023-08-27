import { Router } from "../router/Router";
import { useState, useEffect } from "react";
import "./scrollX.css";
import "../components/efectosCss.css";

function App() {
  const [audioContext, setAudioContext] = useState(null);

  const handleStartAudio = () => {
    const newAudioContext = new (window.AudioContext || window.webkitAudioContext)();
    setAudioContext(newAudioContext);
  };

  useEffect(() => {
    if (audioContext) {
      // Haz lo que necesites con el audioContext
    }
  }, [audioContext]);

  window.addEventListener("load", handleStartAudio);


  return (
    <>
     

    <div>
        <Router />
      </div>
    </>
  );
}

export default App;
