import { useEffect, useRef, useState } from "react";
import "./App.css";
import AsideNav from "./components/AsideNav/AsideNav";
import Projects from "./page/Projects/Projects";

const App = () => {
  const [openned, setOpenned] = useState();
  const titleRef = useRef();

  const [position, setPosition] = useState({ top: 0, left: 0 });

  // Efecto para calcular la posición cuando se abre el título
  useEffect(() => {
    if (openned && titleRef.current) {
      const titleHeight = titleRef.current.clientHeight;
      const top = openned.e.clientY + 25 - titleHeight / 2;
      const left = openned.left
        ? openned.e.clientX - 204
        : openned.e.clientX + 54;
      setPosition({ top, left });
    }
  }, [openned]);

  return (
    <div className="app">
      <AsideNav />
      <Projects setOpenned={setOpenned} openned={openned} />
      <img src="/logo.png" alt="the power university" className="logo" />
      {openned && (
        <div
          className="titleProject"
          ref={titleRef}
          style={{
            top: `${position.top}px`,
            left: `${position.left}px`,
          }}
        >
          <h3>{openned.title}</h3>
        </div>
      )}
    </div>
  );
};

export default App;
