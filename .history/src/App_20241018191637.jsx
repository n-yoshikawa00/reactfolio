import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./components/Todo";
import "./index.css";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      {/* header */}
      <header class="py-6">
        <div class="container mx-auto flex justify-between items-center px-8 md:px-14 lg:px-24 w-full">
          <div class="text-lg font-bold items-center">
            <Todo />
          </div>
          <Navbar />
        </div>
      </header>
      {/* background image */}
      <div
        id="home"
        className="container mt-16 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full"
      >
        <div className="flex flex-wrap md:flex-nowrap">
          <div className="md:my-36 lg:ml-20 md:justify-start mx-auto max-w-xl flex flex-wrap items-end">
            <h1 className="font-bold text-5xl text-black text-center md:text-left lg:text-7xl md:text-6xl justify-center">
              Naoto <br />
              Yoshikawa <br />
            </h1>
          </div>
          <img
            src="./src/assets/boat_new.gif"
            alt="image"
            className="md:absolute  lg:right-52 md:w-3/5 w-10/12 mt-12 md:mt-0 right-6 mx-auto -z-10 lg:w-3/6"
          ></img>
        </div>
      </div>
    </>
  );
};

export default App;
