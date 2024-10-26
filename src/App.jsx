import { useState } from "react";
import "./App.css";
// import Todo from "./components/Todo";
import "./index.css";
import Navbar from "./components/Navbar";
import Background from "./components/Background";
import About from "./components/About";
// import Projects from "./components/Projects";
// import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Project from "./pages/Project";
import Skill from "./pages/Skill";
import Todo from "./pages/Todo";
import { FaCalendarCheck } from "react-icons/fa";

import { Link, Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import NotFound from "./pages/Notfound";

const App = () => {
  return (
    <>
      {/* header */}
      <Router>
        <div className="py-6">
          <div className="container mx-auto flex justify-between items-center px-8 md:px-14 lg:px-24 w-full">
            <div className="text-lg font-bold items-center">
              {/* <Todo /> */}
              <Link to="/Todo">
                <FaCalendarCheck />
              </Link>
            </div>
            <Navbar />
          </div>
        </div>

        {/* body */}
        <div className="font-NotoSerifJP bg-body text-black">
          {/* background image */}
          <Background />
          {/* about */}
          <About />
          {/* projects */}
          <div
            id="projects"
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
          {/* skills */}
          <div
            id="skills"
            className="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full"
          >
            <section className="w-full">
              <h2 className="secondary-title">スキル一覧</h2>
              <p className="section-paragraph:">私が習得したスキル</p>
              <div className="my-16 items-start">
                <div className="w-full border border-body p-16 lg:py-20 flex justify-center lg:justify-start flex-wrap lg:space-x-32 hover:border-black transition-all duration-300 cursor-pointer">
                  <Link to="/Skill">
                    <div className="text-center flex flex-wrap justify-center lg:text-left lg:block">
                      <h3 className="text-3xl font-semibold">
                        フロントエンド開発
                      </h3>
                      <table
                        className="items-center w-full justify-start gap-3 lg:w-auto mt-6 mb-8"
                        style={{ tableLayout: "fixed" }}
                      >
                        <tr className="h-15">
                          <th className="text-left py-4">言語</th>
                          <td className="py-4 flex items-center flex-wrap gap-3">
                            <div className="badge">JavaScript</div>
                            <div className="badge">HTML</div>
                            <div className="badge">CSS</div>
                          </td>
                        </tr>
                        <tr className="h-15">
                          <th className="text-left py-4">
                            フレームワーク（ライブラリ）
                          </th>
                          <td className="py-4 flex items-center  flex-wrap gap-3">
                            <div className="badge">tailwindcss</div>
                            <div className="badge">react</div>
                            <div className="badge">JSF</div>
                            <div className="badge">JUnit</div>
                          </td>
                        </tr>
                        <tr className="h-15">
                          <th className="text-left py-4">開発環境</th>
                          <td className="pt-4 flex items-center  flex-wrap gap-3">
                            <div className="badge">IntelliJ IDEA</div>
                            <div className="badge">VSCode</div>
                            <div className="badge">Docker</div>
                          </td>
                        </tr>
                      </table>
                      <p className="text-secondary">
                        私は上記の技術経験があります。
                        <br />
                        詳細はクリックしてください。
                      </p>
                    </div>
                  </Link>
                </div>

                <div className="w-full border border-body p-16 lg:py-20 flex justify-center lg:justify-start flex-wrap lg:space-x-32 hover:border-black transition-all duration-300 cursor-pointer">
                  <Link to="/Skill">
                    <div className="text-center flex flex-wrap justify-center lg:text-left lg:block">
                      <h3 className="text-3xl font-semibold">
                        バックエンド開発
                      </h3>
                      <table
                        className="items-center w-full justify-start gap-3 lg:w-auto mt-6 mb-8"
                        style={{ tableLayout: "fixed" }}
                      >
                        <tr className="h-15">
                          <th className="text-left py-4">言語</th>
                          <td className="py-4 flex items-center flex-wrap gap-3">
                            <div className="badge">Java</div>
                            <div className="badge">SQL</div>
                          </td>
                        </tr>
                        <tr className="h-15">
                          <th className="text-left py-4">
                            フレームワーク（ライブラリ）
                          </th>
                          <td className="py-4 flex items-center  flex-wrap gap-3">
                            <div className="badge">Node.js</div>
                            <div className="badge">JSF</div>
                            <div className="badge">Hibernate</div>
                          </td>
                        </tr>
                        <tr className="h-15">
                          <th className="text-left py-4">開発環境</th>
                          <td className="pt-4 flex items-center  flex-wrap gap-3">
                            <div className="badge">Oracle Database</div>
                            <div className="badge">PostgreSQL</div>
                            <div className="badge">Amazon EC2</div>
                            <div className="badge">Postman</div>
                          </td>
                        </tr>
                      </table>
                      <p className="text-secondary">
                        私は上記の技術経験があります。
                        <br />
                        詳細はクリックしてください。
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </section>
          </div>
          {/* contact */}
          <Contact />
        </div>
        <Routes>
          <Route path="/Todo" element={<Todo />}></Route>
          <Route path="/Project" element={<Project />}></Route>
          <Route path="/Skill" element={<Skill />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
