import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    //navigation bar
    <header class="py-6">
      <div class="container mx-auto flex justify-between items-center px-8 md:px-14 lg:px-24 w-full">
        <div class="text-lg font-bold items-center">
          <a href="todo.html">
            <FontAwesomeIcon icon="far fa-calendar-check" />
          </a>
        </div>
        <div class="space-x-12 hidden md:flex items-center">
          <a
            href="#home"
            class="hover:text-selectedText transition-all duration-300"
          >
            ホーム
          </a>
          <a
            href="#about"
            class="hover:text-selectedText transition-all duration-300"
          >
            私について
          </a>
          <a
            href="#portfolio"
            class="hover:text-selectedText transition-all duration-300"
          >
            プロジェクト
          </a>
          <a
            href="#skills"
            class="hover:text-selectedText transition-all duration-300"
          >
            スキル一覧
          </a>
          <a
            href="#contact"
            class="hover:text-selectedText transition-all duration-300"
          >
            お問い合わせ
          </a>
        </div>
        <div class="md:hidden hover:text-selectedText transition-all duration-300">
          <button id="barbutton" type="button" class="fixed top-6 right-6 z-10">
            <i id="bars" class="fa-solid fa-bars"></i>
          </button>
        </div>
        <ul
          id="menu"
          class="fixed top-0 left-0 z-0 w-full translate-x-full bg-gray-500 opacity-50 text-center font-bold text-white transition-all ease-linear"
        >
          <li class="p-1">
            <a href="#home">ホーム</a>
          </li>
          <li class="p-1">
            <a href="#about">私について</a>
          </li>
          <li class="p-1">
            <a href="#portfolio">プロジェクト</a>
          </li>
          <li class="p-1">
            <a href="#skills">スキル一覧</a>
          </li>
          <li class="p-1">
            <a href="#contact">お問い合わせ</a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default App;