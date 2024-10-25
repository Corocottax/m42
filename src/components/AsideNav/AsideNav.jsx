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
        onClick={() => (route === "Cloud" ? setRoute() : openRoute("Cloud"))}
        className={route === "Cloud" ? "active" : ""}
        style={{ marginLeft: "20px" }}
      >
        <span>{`>`} </span> Acelerador Cloud Computing
      </h4>
      <h4
        onClick={() => (route === "Data" ? setRoute() : openRoute("Data"))}
        className={route === "Data" ? "active" : ""}
        style={{ marginLeft: "20px" }}
      >
        <span>{`>`} </span> Acelerador Data Engineer
      </h4>
      <h4
        onClick={() => (route === "IA" ? setRoute() : openRoute("IA"))}
        className={route === "IA" ? "active" : ""}
        style={{ marginLeft: "20px" }}
      >
        <span>{`>`} </span> Acelerador Desarrollador IA
      </h4>
    </aside>
  );
};

export default AsideNav;
