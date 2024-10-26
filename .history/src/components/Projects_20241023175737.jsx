import { Routes, Route } from "react-router-dom";
import Project from "../pages/Project";
import { Link, Switch } from "react-router-dom";
const Projects = () => (
  <>
    <Routes>
      <Route exact path="/Project" element={<Project />} />
    </Routes>
    <div
      id="portfolio"
      className="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full"
    >
      <section className="w-full">
        <h2 className="secondary-title">プロジェクト</h2>
        <p className="section-paragraph:">今まで携わったプロジェクト</p>
        <div className="my-16 grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-6">
          <Link to="Project">
            <img
              src="./src/assets/image1.jpg"
              alt=""
              className="w-full h-36 lg:h-72 object-cover rounded-md cursor-pointer"
            ></img>
          </Link>
          <Link to="Project">
            <img
              src="./src/assets/image2.jpg"
              alt=""
              className="w-full h-36 lg:h-72 object-cover rounded-md cursor-pointer"
            ></img>
          </Link>
        </div>
        <Switch>
          <Route ="/Project">

          </Route>
        </Switch>
      </section>
    </div>
  </>
);

export default Projects;
