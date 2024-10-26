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
        <Router>
          <Routes>
            <Route path="/Project" element={<Project />}></Route>
          </Routes>
          <div
            id="portfolio"
            className="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full"
          >
            <section className="w-full">
              <h2 className="secondary-title">プロジェクト</h2>
              <p className="section-paragraph:">今まで携わったプロジェクト</p>
              <div className="my-16 grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-6">
                <Link to="/Project">
                  <img
                    src="./src/assets/image1.jpg"
                    alt=""
                    className="w-full h-36 lg:h-72 object-cover rounded-md cursor-pointer"
                  ></img>
                </Link>
                <Link to="/Project">
                  <img
                    src="./src/assets/image2.jpg"
                    alt=""
                    className="w-full h-36 lg:h-72 object-cover rounded-md cursor-pointer"
                  ></img>
                </Link>
              </div>
            </section>
          </div>
        </Router>
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
