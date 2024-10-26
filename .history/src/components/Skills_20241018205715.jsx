const Skills = () => ( 
  <>
<div id="skills" className="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
<section className="w-full">
    <h2 className="secondary-title">スキル一覧</h2>
    <p className="section-paragraph:">
        私が習得したスキル
    </p>
    <div className="my-16 items-start">
        <div
            className="w-full border border-body p-16 lg:py-20 flex justify-center lg:justify-start flex-wrap lg:space-x-32 hover:border-black transition-all duration-300 cursor-pointer">

            <!-- ロゴ -->
            <!-- <div className="mb-6 lg:mb-0 self-center">
                <i className="fa-brands fa-java text-8xl"></i>
            </div> -->

            <!-- 言語の説明 -->
            <a href="frontskill.html">
                <div className="text-center flex flex-wrap justify-center lg:text-left lg:block">
                    <h3 className="text-3xl font-semibold">フロントエンド開発</h3>
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
                        私は上記の技術経験があります。<br>
                        詳細はクリックしてください。
                    </p>
                </div>
        </div>
        </a>
        <a href="backskill.html">
            <div
                className="w-full border border-body p-16 lg:py-20 flex justify-center lg:justify-start flex-wrap lg:space-x-32 hover:border-black transition-all duration-300 cursor-pointer">
                <!-- 言語の説明 -->
                <div className="text-center flex flex-wrap justify-center lg:text-left lg:block">
                    <h3 className="text-3xl font-semibold">バックエンド開発</h3>
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
                        私は上記の技術経験があります。<br>
                        詳細はクリックしてください。
                    </p>
                </div>
            </div>
    </div>
    </a>
</section>
</div >
  </>
);

export default Skills;