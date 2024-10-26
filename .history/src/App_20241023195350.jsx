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
import { Link, Routes, Route } from "react-router-dom";
import Project from "./pages/Project";

import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <>
      {/* <Router>
        <Routes>
          <Route path="/Project" element={<Project />}></Route>
        </Routes> */}

      {/* <Router> */}
      {/* header */}
      <div className="py-6">
        <div className="container mx-auto flex justify-between items-center px-8 md:px-14 lg:px-24 w-full">
          <div className="text-lg font-bold items-center">
            <Todo />
          </div>
          <Navbar />
        </div>
      </div>
      <div className="font-NotoSerifJP bg-body text-black">
        {/* background image */}
        <Background />
        {/* about */}
        <About />
        {/* projects */}
        <Projects />
        {/* <Link to="/Project">Project</Link> */}
        {/* skills */}
        <Skills />
        {/* contact */}
        <Contact />
      </div>
      {/* </Router> */}
      {/* </Router> */}
    </>
  );
};

export default App;
