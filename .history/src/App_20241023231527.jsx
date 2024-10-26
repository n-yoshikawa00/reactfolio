import { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
import "./index.css";
import Navbar from "./components/Navbar";
import Background from "./components/Background";
import About from "./components/About";
// import Projects from "./components/Projects";
// import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Project from "./pages/Project";
import Skill from "./pages/Skill";

import { Link, Routes, Route } from "react-router-dom";
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
            <Router>
              <Route path="/Todo" element={<Todo />}></Route>
            </Router>
            {/* <Todo /> */}
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
        {/* skills */}
        <Router>
          <Routes>
            <Route path="/Skill" element={<Skill />}></Route>
          </Routes>
          <div
            id="skills"
            className="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full"
          >
            <section className="w-full">
              <h2 className="secondary-title">スキル一覧</h2>
              <p className="section-paragraph:">私が習得したスキル</p>
              <div className="my-16 items-start">
                <div className="w-full border border-body p-16 lg:py-20 flex justify-center lg:justify-start flex-wrap lg:space-x-32 hover:border-black transition-all duration-300 cursor-pointer">
                  {/* 言語の説明 */}
                  {/* <a href="frontskill.html"> */}
                  <Link to="/Skill">
                    <div className="text-center flex flex-wrap justify-center lg:text-left lg:block">
                      <h3 className="text-3xl font-semibold">
                        フロントエンド開発
                      </h3>
                      <ol className="flex items-center w-full justify-start gap-3 lg:w-auto mt-6 mb-8">
                        <li className="pr-20">言語：</li>
                        <div className=" flex flex-wrap gap-3">
                          <li className="badge">JavaScript</li>
                          <li className="badge">HTML</li>
                          <li className="badge">CSS</li>
                        </div>
                      </ol>
                      <ol className="flex items-center w-full justify-start gap-3 lg:w-auto mt-6 mb-8">
                        <li>フレームワーク：</li>
                        <div className=" flex flex-wrap gap-3">
                          <li className="badge">tailwindcss</li>
                          <li className="badge">JSF</li>
                        </div>
                      </ol>
                      <ol className="flex items-center w-full justify-start gap-3 lg:w-auto mt-6 mb-8">
                        <li className="pr-12">開発環境：</li>
                        <div className=" flex flex-wrap gap-3">
                          <li className="badge">IntelliJ IDEA</li>
                          <li className="badge">VSCode</li>
                          <li className="badge">Docker</li>
                        </div>
                      </ol>
                      <p className="text-secondary">
                        私は上記の技術経験があります。
                        <br />
                        詳細はクリックしてください。
                      </p>
                    </div>
                    {/* </a> */}
                  </Link>
                </div>

                {/* <a href="backskill.html"> */}
                <Link to="/Skill">
                  <div className="w-full border border-body p-16 lg:py-20 flex justify-center lg:justify-start flex-wrap lg:space-x-32 hover:border-black transition-all duration-300 cursor-pointer">
                    {/* 言語の説明 */}
                    <div className="text-center flex flex-wrap justify-center lg:text-left lg:block">
                      <h3 className="text-3xl font-semibold">
                        バックエンド開発
                      </h3>
                      <ol className="flex items-center w-full justify-start gap-3 lg:w-auto mt-6 mb-8">
                        <li className="pr-20">言語：</li>
                        <div className=" flex flex-wrap gap-3">
                          <li className="badge">Java</li>
                          <li className="badge">SQL</li>
                        </div>
                      </ol>
                      <ol className="flex items-center w-full justify-start gap-3 lg:w-auto mt-6 mb-8">
                        <li>フレームワーク：</li>
                        <div className=" flex flex-wrap gap-3">
                          <li className="badge">JSF</li>
                          <li className="badge">Hibernate</li>
                        </div>
                      </ol>
                      <ol className="flex items-center w-full justify-start gap-3 lg:w-auto mt-6 mb-8">
                        <li className="pr-12">開発環境：</li>
                        <div className=" flex flex-wrap gap-3">
                          <li className="badge">Oracle Database</li>
                          <li className="badge">PostgreSQL</li>
                          <li className="badge">Amazon EC2</li>
                          <li className="badge">Postman</li>
                        </div>
                      </ol>
                      <p className="text-secondary">
                        私は上記の技術経験があります。
                        <br />
                        詳細はクリックしてください。
                      </p>
                    </div>
                  </div>
                  {/* </a> */}
                </Link>
              </div>
            </section>
          </div>
        </Router>
        {/* contact */}
        <Contact />
      </div>
      {/* </Router> */}
      {/* </Router> */}
    </>
  );
};

export default App;
