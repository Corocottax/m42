import { useContext, useState } from "react";
import "./Projects.css";
import { getPropperty } from "../../utils/getPropperty";
import { RouteContext } from "../../providers/RouteProvider";
/* getBoundingClient */

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
          className={`level${level} ${
            projects.find((project) =>
              project.projects.find(
                (project) => project.level === level && project.completed
              )
            )
              ? "level_completed"
              : ""
          }`}
          style={{
            width: `${150 * (level + 1)}px`,
            height: `${150 * (level + 1)}px`,
          }}
        >
          {projects?.map((project) => {
            return project.projects.map((project) => {
              return project.level === level ? (
                <a
                  href={project.pdf}
                  target="_blank"
                  key={project.id}
                  className={`project ${project.className} ${
                    project.completed ? "completed" : "pending"
                  }`}
                  onMouseEnter={() =>
                    setOpenned({
                      id: project.id,
                      title: project.title,
                      e: {
                        clientX: project.compass[0],
                        clientY: project.compass[1],
                      },
                    })
                  }
                  onMouseLeave={() => setOpenned()}
                  style={{
                    top: `calc(${project.compass[0]}% - 25px)`,
                    left: `calc(${project.compass[1]}% - 25px)`,
                    animationDelay: `${project.pathNumber / 20}s`,
                  }}
                >
                  {/* {project.degrees && <hr></hr>} */}
                  {openned?.id === project.id && (
                    <div className="titleProject">
                      <h3>{openned.title}</h3>
                    </div>
                  )}
                  {project.smallTitle}
                </a>
              ) : null;
            });
          })}
        </div>
      ))}
    </div>
  );
};

export default Projects;
