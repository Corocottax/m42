import { createContext, useEffect, useState } from "react";
import { projects } from "../utils/projects";

export const RouteContext = createContext();

const RouteProvider = ({ children }) => {
  const [route, setRoute] = useState();
  const [projectsState, setProjectsState] = useState([...projects]);

  useEffect(() => {
    const projectsWithClass = projectsState.map((project) => {
      project.path === route
        ? (project.className = "active")
        : (project.className = "");
      return project;
    });
    setProjectsState([...projectsWithClass]);
  }, [route]);

  return (
    <RouteContext.Provider value={{ route, setRoute, projectsState }}>
      {children}
    </RouteContext.Provider>
  );
};

export default RouteProvider;
