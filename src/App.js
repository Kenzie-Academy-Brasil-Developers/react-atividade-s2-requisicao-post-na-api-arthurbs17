import { useState } from "react";
import "./App.css";
import Display from "./components/Display";
import Login from "./components/Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showStatus, setShowStatus] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <Login setIsLoggedIn={setIsLoggedIn} setShowStatus={setShowStatus} />
        {showStatus === true ? <Display isLoggedIn={isLoggedIn} /> : null}
      </header>
    </div>
  );
}

export default App;
