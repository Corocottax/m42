import { useContext, useState } from "react";
import "./Projects.css";
import { getPropperty } from "../../utils/getPropperty";
import { RouteContext } from "../../providers/RouteProvider";

const Projects = () => {
  const [openned, setOpenned] = useState();

  const { projectsState: projects } = useContext(RouteContext);

  console.log(projects);

  return (
    <div
      className="projects"
      style={{ minWidth: `${getPropperty("level").length * 150}px` }}
    >
      {getPropperty("level").map((level) => (
        <div
          key={`level${level}`}
          className={`level${level}`}
          style={{
            width: `${150 * (level + 1)}px`,
            height: `${150 * (level + 1)}px`,
          }}
        >
          {projects?.map((project) => {
            return project.level === level ? (
              <a
                href={project.pdf}
                target="_blank"
                key={project.id}
                className={`project ${project.className}`}
                onMouseEnter={(e) => setOpenned({ title: project.title, e })}
                onMouseLeave={() => setOpenned()}
                style={{
                  top: `calc(${project.compass[0]}% - 25px)`,
                  left: `calc(${project.compass[1]}% - 25px)`,
                  animationDelay: `${project.pathNumber / 2}s`,
                }}
              ></a>
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
