import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./layout/header";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function App() {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    localStorage.setItem("auth", auth);
  }, [auth]);
  return (
    <div className="App">
      <Header auth={auth} />
      <header className="App-header">
        <p>React + TailwindCSS Starter</p>
        <button
          className={
            "block px-4 py-2 text-lg text-white-700 w-9/12  text-center ml-6 underline"
          }
          onClick={() => {
            setAuth(!auth);
          }}
        >
          toggle auth state
        </button>
      </header>
    </div>
  );
}

export default App;
