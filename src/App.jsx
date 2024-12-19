import { createContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./components/Home";
import Colors from "./components/Colors";
import Focus from "./components/Focus";
import A from "./components/a";
import Transition from "./components/Transition";
import Reducer from "./components/reducer";

const themes = {
  light: {
    background: "white",
    color: "black",
  },
  dark: {
    background: "black",
    color: "white",
  },
};

export const SiteTheme = createContext();

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          onChange={() => {
            setDarkMode(!darkMode);
          }}
        />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
          Dark mode
        </label>
      </div>
      <div className="container">
        <SiteTheme.Provider value={darkMode ? themes.dark : themes.light}>
          <A />
        </SiteTheme.Provider>
      </div>
      {/* <Home />
      <Colors /> */}
      {/* <Focus /> */}
      <Reducer />
      <Transition />
    </>
  );
}

export default App;
