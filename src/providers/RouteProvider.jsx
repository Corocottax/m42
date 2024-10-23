import { createContext, useEffect, useState } from "react";
import { projects } from "../utils/projectsV2";
/* import { projects } from "../utils/projects"; */

export const RouteContext = createContext();

const RouteProvider = ({ children }) => {
  const [route, setRoute] = useState();
  const [projectsState, setProjectsState] = useState([...projects]);

  useEffect(() => {
    const projectsWithClass = projectsState.map((project) => {
      return {
        projects: project.projects.map((subProject) => {
          console.log(subProject);
          subProject.path.includes(route)
            ? (subProject.className = "active")
            : (subProject.className = "");
          return subProject;
        }),
      };
    });
    console.log(projectsWithClass);
    setProjectsState([...projectsWithClass]);
  }, [route]);

  return (
    <RouteContext.Provider value={{ route, setRoute, projectsState }}>
      {children}
    </RouteContext.Provider>
  );
};

export default RouteProvider;
