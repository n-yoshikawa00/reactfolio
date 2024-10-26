import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./components/Todo";
import "./index.css";
import Navbar from "./components/Navbar";

const App = () => (
  <>
  //header
  <header class="py-6">
    <div class="container mx-auto flex justify-between items-center px-8 md:px-14 lg:px-24 w-full">
      <div class="text-lg font-bold items-center">
        <Todo />
      </div>
      <Navbar />
    </div>
  </header>
  //background image
  <div id="home" class="container mt-16 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
        <div class="flex flex-wrap md:flex-nowrap">
            <div class="md:my-36 lg:ml-20 md:justify-start mx-auto max-w-xl flex flex-wrap items-end">
                <h1
                    class="font-bold text-5xl text-black text-center md:text-left lg:text-7xl md:text-6xl justify-center">
                    Naoto <br />
                    Yoshikawa <br />
                </h1>
            </div>
        </div>
  <div/>
    </>
);

export default App;
