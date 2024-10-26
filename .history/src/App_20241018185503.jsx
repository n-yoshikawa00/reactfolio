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
                <!-- <button
                    class="px-6 py-0 bg-button font-bold rounded-lg hover:trasition-all duration-300 mt-10 justify-center">
                    <span class="hover:text-selectedText transition-all duration-300"><i
                            class="fa-solid fa-anchor"></i>もっと見る</span>
                </button> -->
            </div>
            <!-- <svg class="hero__bg-2 fadein md:absolute lg:right-52 md:w-3/5 w-10/12 mt-12 md:mt-0 right-6 mx-auto -z-10 lg:w-3/6"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 320">
                <path
                    d="M260.88,293.61c103.44,15.15,197.9-54.19,160.68-156.06C383.51,33.37,188.25,7.95,96.94,33.53,5.08,59.26-6.9,161.54,75.12,183.89c90.51,24.66,82.31,94.57,185.75,109.72Z">
                </path> -->
            </svg>
            <img src="./src/images/boat_new.gif" alt="image"
                class="md:absolute  lg:right-52 md:w-3/5 w-10/12 mt-12 md:mt-0 right-6 mx-auto -z-10 lg:w-3/6">
        </div>
    </div>
    </>
);

export default App;
