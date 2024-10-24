import { useContext } from "react";
import { projects } from "../../utils/projects";
import "./AsideNav.css";
import { RouteContext } from "../../providers/RouteProvider";
import { getPropperty } from "../../utils/getPropperty";

const AsideNav = () => {
  const { route, setRoute } = useContext(RouteContext);

  const openRoute = (path) => {
    setRoute();
    setTimeout(() => {
      setRoute(path);
    }, 100);
  };

  return (
    <aside className="asideNav">
      <h3>Elige tu camino deseado</h3>

      <h4
        onClick={() =>
          route === "Data Scientist" ? setRoute() : openRoute("Data Scientist")
        }
        className={route === "Data Scientist" ? "active" : ""}
      >
        <span>{`>`} </span> Data Scientist
      </h4>
      <h4
        onClick={() =>
          route === "Visualización de datos"
            ? setRoute()
            : openRoute("Visualización de datos")
        }
        className={route === "Visualización de datos" ? "active" : ""}
      >
        <span>{`>`} </span> Visualización de datos
      </h4>
      <h4
        onClick={() =>
          route === "Desarrollo de IA"
            ? setRoute()
            : openRoute("Desarrollo de IA")
        }
        className={route === "Desarrollo de IA" ? "active" : ""}
      >
        <span>{`>`} </span> Desarrollo de IA
      </h4>
      <h4
        onClick={() =>
          route === "Scrapping" ? setRoute() : openRoute("Scrapping")
        }
        className={route === "Scrapping" ? "active" : ""}
      >
        <span>{`>`} </span> Scrapping
      </h4>
    </aside>
  );
};

export default AsideNav;
