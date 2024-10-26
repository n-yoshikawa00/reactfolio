const Skills = () => ( 
  <>
<div id="skills" class="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
<section class="w-full">
    <h2 class="secondary-title">スキル一覧</h2>
    <p class="section-paragraph:">
        私が習得したスキル
    </p>
    <div class="my-16 items-start">
        <div
            class="w-full border border-body p-16 lg:py-20 flex justify-center lg:justify-start flex-wrap lg:space-x-32 hover:border-black transition-all duration-300 cursor-pointer">

            <!-- ロゴ -->
            <!-- <div class="mb-6 lg:mb-0 self-center">
                <i class="fa-brands fa-java text-8xl"></i>
            </div> -->

            <!-- 言語の説明 -->
            <a href="frontskill.html">
                <div class="text-center flex flex-wrap justify-center lg:text-left lg:block">
                    <h3 class="text-3xl font-semibold">フロントエンド開発</h3>
                    <ol class="flex items-center w-full justify-start gap-3 lg:w-auto mt-6 mb-8">
                        <li class="pr-20">言語：</li>
                        <div class=" flex flex-wrap gap-3">
                            <li class="badge">JavaScript</li>
                            <li class="badge">HTML</li>
                            <li class="badge">CSS</li>
                        </div>
                    </ol>
                    <ol class="flex items-center w-full justify-start gap-3 lg:w-auto mt-6 mb-8">
                        <li>フレームワーク：</li>
                        <div class=" flex flex-wrap gap-3">
                            <li class="badge">tailwindcss</li>
                            <li class="badge">JSF</li>
                        </div>
                    </ol>
                    <ol class="flex items-center w-full justify-start gap-3 lg:w-auto mt-6 mb-8">
                        <li class="pr-12">開発環境：</li>
                        <div class=" flex flex-wrap gap-3">
                            <li class="badge">IntelliJ IDEA</li>
                            <li class="badge">VSCode</li>
                            <li class="badge">Docker</li>
                        </div>
                    </ol>
                    <p class="text-secondary">
                        私は上記の技術経験があります。<br>
                        詳細はクリックしてください。
                    </p>
                </div>
        </div>
        </a>
        <a href="backskill.html">
            <div
                class="w-full border border-body p-16 lg:py-20 flex justify-center lg:justify-start flex-wrap lg:space-x-32 hover:border-black transition-all duration-300 cursor-pointer">
                <!-- 言語の説明 -->
                <div class="text-center flex flex-wrap justify-center lg:text-left lg:block">
                    <h3 class="text-3xl font-semibold">バックエンド開発</h3>
                    <ol class="flex items-center w-full justify-start gap-3 lg:w-auto mt-6 mb-8">
                        <li class="pr-20">言語：</li>
                        <div class=" flex flex-wrap gap-3">
                            <li class="badge">Java</li>
                            <li class="badge">SQL</li>
                        </div>
                    </ol>
                    <ol class="flex items-center w-full justify-start gap-3 lg:w-auto mt-6 mb-8">
                        <li>フレームワーク：</li>
                        <div class=" flex flex-wrap gap-3">
                            <li class="badge">JSF</li>
                            <li class="badge">Hibernate</li>
                        </div>
                    </ol>
                    <ol class="flex items-center w-full justify-start gap-3 lg:w-auto mt-6 mb-8">
                        <li class="pr-12">開発環境：</li>
                        <div class=" flex flex-wrap gap-3">
                            <li class="badge">Oracle Database</li>
                            <li class="badge">PostgreSQL</li>
                            <li class="badge">Amazon EC2</li>
                            <li class="badge">Postman</li>
                        </div>
                    </ol>
                    <p class="text-secondary">
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