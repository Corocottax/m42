import { projects } from "./projects";

export const getPropperty = (propperty) => {
  const propperties = [];
  projects.forEach(
    (project) =>
      !propperties.includes(project[propperty]) &&
    propperties.push(project[propperty])
  );
  return propperties;
};
