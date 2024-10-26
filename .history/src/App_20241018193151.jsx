import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./components/Todo";
import "./index.css";
import Navbar from "./components/Navbar";
import Background from "./components/Background";

const App = () => {
  return (
    <>
      {/* header */}
      <header className="py-6">
        <div className="container mx-auto flex justify-between items-center px-8 md:px-14 lg:px-24 w-full">
          <div className="text-lg font-bold items-center">
            <Todo />
          </div>
          <Navbar />
        </div>
      </header>
      {/* background image */}
      <Background />
      {/* about */}
      <div
        id="about"
        class="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full"
      >
        <section class="w-full">
          <h2 class="secondary-title">私について</h2>
          <div>
            <p class="">
              当webサイトをご覧いただきありがとうございます。学生時代は私の学部に中国人留学生が多く会話する機会も多かったことや、ゼミで米中の貿易（自動車産業）について学習したことから、
              中国語に興味を持ち中国語の学習に力を入れていました。そこでの経験を活かしたいと思い新卒でNECチャイナソフトジャパンに就職しました。また、
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default App;
