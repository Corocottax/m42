import { useState } from "react";
import "./App.css";
import AsideNav from "./components/AsideNav/AsideNav";
import Projects from "./page/Projects/Projects";

const App = () => {
  const [openned, setOpenned] = useState();

  return (
    <div className="app">
      <AsideNav />
      <Projects setOpenned={setOpenned} openned={openned} />
      <img src="/logo.png" alt="the power university" className="logo" />
      {openned && (
        <div
          className="titleProject"
          style={{
            top: `${openned.e.clientY}px`,
            left: `${openned.e.clientX + 54}px`,
          }}
        >
          <h3>{openned.title}</h3>
        </div>
      )}
    </div>
  );
};

export default App;
