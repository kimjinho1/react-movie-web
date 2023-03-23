import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import MusicDisplay from "./pages/Music";
import About from "./pages/About";
import ToDo from "./pages/ToDo";
import Authentication from "./pages/Authentication";

const USER_TOKEN = "USER_TOKEN";

function App() {
  const [loginState, setLoginState] = useState(false);
  useEffect(() => {
    if (window.localStorage.getItem(USER_TOKEN)) {
      console.log("Login O");
      setLoginState(true);
    } else {
      console.log("Login X");
    }
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home loginState={loginState} />} />
        <Route path="/todo" element={<ToDo loginState={loginState} />} />
        <Route
          path="/music"
          element={<MusicDisplay loginState={loginState} />}
        />
        <Route path="/about" element={<About loginState={loginState} />} />
        <Route
          path="/auth"
          element={
            <Authentication
              loginState={loginState}
              setLoginState={setLoginState}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;