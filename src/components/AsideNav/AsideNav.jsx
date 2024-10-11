import { useContext } from "react";
import { projects } from "../../utils/projects";
import "./AsideNav.css";
import { RouteContext } from "../../providers/RouteProvider";
import { getPropperty } from "../../utils/getPropperty";

const AsideNav = () => {

  const { setRoute } = useContext(RouteContext);

  return (
    <aside className="asideNav">
      <h3>Elige tu camino deseado</h3>
      {getPropperty("path").map((path, index) => (
        <h4 key={index} onClick={() => setRoute(path)}>
          {path}
        </h4>
      ))}
    </aside>
  );
};

export default AsideNav;
