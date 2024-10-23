/* import { projects } from "./projects"; */

import { projects } from "./projectsV2";

export const getPropperty = (propperty) => {
  const propperties = [];
  projects.forEach((project) =>
    project.projects.forEach((subProject) => {
      !propperties.includes(subProject[propperty]) &&
        propperties.push(subProject[propperty]);
    })
  );
  return propperties;
};
