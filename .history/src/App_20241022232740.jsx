import { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
import "./index.css";
import Navbar from "./components/Navbar";
import Background from "./components/Background";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

import { Routes, Route } from "react-router-dom";
import { Front, Backskill } from "./pages";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/backskill" element={<Backskill />} />
      </Routes>
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