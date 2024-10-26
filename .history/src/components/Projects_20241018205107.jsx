const Projects = () => (
<div id="portfolio" classname="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
        <section classname="w-full">
            <h2 classname="secondary-title">プロジェクト</h2>
            <p classname="section-paragraph:">
                今まで携わったプロジェクト
            </p>
            <div classname="my-16 grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-6">
                <a href="project1.html">
                    <img src="./src/images/image1.jpg" alt=""
                        classname="w-full h-36 lg:h-72 object-cover rounded-md cursor-pointer">
                </a>
                <a href="project2.html">
                    <img src="./src/images/image2.jpg" alt=""
                        classname="w-full h-36 lg:h-72 object-cover rounded-md cursor-pointer">
                </a>
            </div>
        </section>
    </div>
);

export default Projects;
