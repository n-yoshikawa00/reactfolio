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
                        <li>フレームワーク（ライブラリ）：</li>
                        <div className=" flex flex-wrap gap-3">
                          <li className="badge">tailwindcss</li>
                          <li className="badge">JSF</li>
                          <li className="badge">Junit</li>
                          <li className="badge">react</li>
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

                <div className="w-full border border-body p-16 lg:py-20 flex justify-center lg:justify-start flex-wrap lg:space-x-32 hover:border-black transition-all duration-300 cursor-pointer">
                  <Link to="/Skill">
                    <div className="text-center flex flex-wrap justify-center lg:text-left lg:block">
                      <h3 className="text-3xl font-semibold">
                        フロントエンド開発
                      </h3>
                      <table className="items-center w-full justify-start gap-3 lg:w-auto mt-6 mb-8">
                        <tr>
                          <th className="text-left py-4">言語</th>
                          <div className="flex flex-wrap gap-3">
                            <td className="badge py-4">JavaScript</td>
                            <td className="badge py-4">HTML</td>
                            <td className="badge py-4">CSS</td>
                          </div>
                        </tr>
                        <tr>
                          <th className="text-left py-4">
                            フレームワーク（ライブラリ）
                          </th>
                          <div className=" flex flex-wrap gap-3">
                            <td className="badge py-4">tailwindcss</td>
                            <td className="badge py-4">react</td>
                            <td className="badge py-4">JSF</td>
                            <td className="badge py-4">Junit</td>
                          </div>
                        </tr>
                        <tr>
                          <th className="text-left py-4">開発環境</th>
                          <div className=" flex flex-wrap gap-3">
                            <td className="badge py-4">IntelliJ IDEA</td>
                            <td className="badge py-4">VSCode</td>
                            <td className="badge py-4">Docker</td>
                          </div>
                        </tr>
                      </table>
                    </div>
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
          {/* contact */}
          <Contact />
        </div>
        <Routes>
          <Route path="/Todo" element={<Todo />}></Route>
          <Route path="/Project" element={<Project />}></Route>
          <Route path="/Skill" element={<Skill />}></Route>
          <Route path="*" element={NotFound}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;