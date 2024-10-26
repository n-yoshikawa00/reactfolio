import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button className="text-red-500" onClick={() => alert()}>
        buttou
      </button>
      {/*navigation bar*/}
      <div className="text-red-500">hellos</div>
      {/*hero*/}
      <div>hellos</div>
      {/*projects*/}
      <div>hellos</div>
      {/*skills*/}
      <div>hellos</div>
      {/*contact*/}
      <div>hellos</div>
    </>
  );
}

export default App;
