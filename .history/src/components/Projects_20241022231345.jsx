import { Link } from "react-router-dom";

const Projects = () => (
  <div
    id="portfolio"
    className="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full"
  >
    <section className="w-full">
      <h2 className="secondary-title">プロジェクト</h2>
      <p className="section-paragraph:">今まで携わったプロジェクト</p>
      <div className="my-16 grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-6">
        <a href="project1.html">
          <img
            src="./src/assets/image1.jpg"
            alt=""
            className="w-full h-36 lg:h-72 object-cover rounded-md cursor-pointer"
          >
            <Link to="/frontskill">aa</Link>
          </img>
        </a>
        <a href="project2.html">
          <img
            src="./src/assets/image2.jpg"
            alt=""
            className="w-full h-36 lg:h-72 object-cover rounded-md cursor-pointer"
          ></img>
        </a>
      </div>
    </section>
  </div>
);

export default Projects;
