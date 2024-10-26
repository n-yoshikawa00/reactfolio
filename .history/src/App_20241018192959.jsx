import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./components/Todo";
import "./index.css";
import Navbar from "./components/Navbar";
import Background from "./components/Background";

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
      <Background />
    </>
  );
};

export default App;
