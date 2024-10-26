import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    //navigation bar
    <header class="py-6">
      <div class="text-lg font-bold items-center">
        <a href="todo.html">
          <FontAwesomeIcon icon="fas fa-calendar-check" />{" "}
        </a>
      </div>{" "}
    </header>
  );
}

export default App;
