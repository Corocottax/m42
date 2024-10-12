import { useContext, useState } from "react";
import { projects } from "../../utils/projects";
import "./Projects.css";
import { getPropperty } from "../../utils/getPropperty";
import { RouteContext } from "../../providers/RouteProvider";

const Projects = () => {
  const [openned, setOpenned] = useState();

  const { route } = useContext(RouteContext);

  return (
    <div className="projects">
      {getPropperty("level").map((level) => (
        <div
          key={`level${level}`}
          className={`level${level}`}
          style={{
            width: `${150 * (level + 1)}px`,
            height: `${150 * (level + 1)}px`,
          }}
        >
          {projects.map((project) => {
            return project.level === level ? (
              <div
                key={project.id}
                className="project"
                onMouseEnter={(e) => setOpenned({ title: project.title, e })}
                onMouseLeave={() => setOpenned()}
                style={{
                  top: `calc(${project.compass[0]}% - 25px)`,
                  left: `calc(${project.compass[1]}% - 25px)`,
                }}
              >
              </div>
            ) : null;
          })}
        </div>
      ))}
      {openned && (
        <div
          className="titleProject"
          style={{
            top: `${openned.e.clientY - 50}px`,
            left: `${openned.e.clientX + 50}px`,
          }}
        >
          <h3>{openned.title}</h3>
        </div>
      )}
    </div>
  );
};

export default Projects;
