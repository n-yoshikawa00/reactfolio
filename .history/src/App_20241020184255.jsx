import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./components/Todo";
import "./index.css";
import Navbar from "./components/Navbar";
import Background from "./components/Background";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import StarRating from "./components/Untitled-1";

const App = () => {
  return (
    <>
      <StarRating />
      {/* header */}
      <header className="py-6">
        <div className="container mx-auto flex justify-between items-center px-8 md:px-14 lg:px-24 w-full">
          <div className="text-lg font-bold items-center">
            <Todo />
          </div>
          <Navbar />
        </div>
      </header>
      <body className="font-NotoSerifJP bg-body text-black">
        {/* background image */}
        <Background />
        {/* about */}
        <About />
        {/* projects */}
        <Projects />
        {/* skills */}
        <Skills />
        {/* contact */}
        <Contact />
      </body>
    </>
  );
};

export default App;
